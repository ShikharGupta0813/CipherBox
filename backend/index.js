const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./schemas/user.js");
const Meta = require("./schemas/metadata.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const port = 8000;
const crypto = require('crypto');
const fs = require('fs');
const multer = require("multer");

const algorithm = 'aes-256-cbc';
const generateKey = () => crypto.randomBytes(32);
const generateIV = () => crypto.randomBytes(16);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/CipherBox");
}
main()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const JWT_SECRET = "helloworld@123";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).send({ required: "Token is required" });
  }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user data to req object
    // req.userId = decoded.userId;
    next();
}

app.get("/CipherBox", (req, res) => {
  res.send("Hello World");
});

app.post("/CipherBox/signup", async (req, res) => {
  const { username, password, name, email } = req.body;
  if (await User.findOne({ username })) {
    return res.send({ message: "username taken" });
  }

  const hashedPassword = await bcrypt.hash( password, 10);
  try {
    const newUser = new User({
      username,
      password: hashedPassword,
      name,
      email,
    });

    await newUser.save();

    console.log("User signed up:", newUser);
    return res.status(200).send({ greetings: `Hello ${name}` });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
app.post("/CipherBox/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      return res.status(401).send({ Invalid: "Invalid credentials1" });
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password,user.password);

    // If password is incorrect
    if (!isMatch) {
      return res.status(401).send({ Invalid: "Invalid credentials2" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("User logged in:", user);
    res.status(200).send({ token: token });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

const storage = multer.memoryStorage();
const upload = multer({storage:storage});

// Create an upload endpoint
app.post("/CipherBox/upload",verifyToken, upload.single("file"), async (req, res) => {
  let array = req.file;
  
  try {
    const file = req.file;
    const key = generateKey();
    const iv = generateIV();

    // Encrypt the file buffer
    const encryptedBuffer = encryptBuffer(file.buffer, key, iv);

    const encryptedPath = `encrypted_files/${Date.now()}-${file.originalname}.enc`;

    // Save the encrypted buffer to disk
    fs.writeFileSync(encryptedPath, encryptedBuffer);

    // Save file metadata to MongoDB
    const newMeta = new Meta({
      originalname: file.originalname,
      filename: encryptedPath, // Storing the path of the encrypted file
      path: encryptedPath,
      user_id: req.user.userId,
      key: key.toString('hex'), // Convert buffer to hex string for storage
      iv: iv.toString('hex'),   // Convert buffer to hex string for storage
    });

    await newMeta.save();

    res.status(200).json({ message: "File encrypted and uploaded successfully!", file: encryptedPath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to upload and encrypt file." });
  }
});

function encryptBuffer(buffer, key, iv) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
  return encrypted;
}

async function encryptFile(filePath, outputFilePath, key, iv) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const input = fs.createReadStream(filePath);
  const output = fs.createWriteStream(outputFilePath);

  return new Promise((resolve, reject) => {
    input.pipe(cipher).pipe(output);
    output.on('finish', resolve);
    output.on('error', reject);
  });
}
