const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./schemas/user.js");
const Meta = require("./schemas/metadata.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const port = 8000;
const multer = require("multer");

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

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ Invalid: "Invalid Token" });
    }

    req.userId = decoded.userId;
    next();
  });
};

app.get("/CipherBox", (req, res) => {
  res.send("Hello World");
});

app.post("/CipherBox/signup", async (req, res) => {
  const { username, password, name, email } = req.body;
  if (await User.findOne({ username })) {
    return res.send({ message: "username taken" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
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
      return res.status(401).send({ Invalid: "Invalid credentials" });
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    // If password is incorrect
    if (!isMatch) {
      return res.status(401).send({ Invalid: "Invalid credentials" });
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files/"); // specify the folder for storing files
  },
  filename: (req, file, cb) => {
    // Use the original file name, or generate a custom name
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Create an upload endpoint
app.post("/upload",verifyToken, upload.single("file"), async (req, res) => {
  let array = req.file;
  try {
    // File is automatically stored in the specified folder
    res
      .status(200)
      .json({ message: "File uploaded successfully!", file: req.file });
  } catch (error) {
    res.status(500).json({ message: "Failed to upload file." });
  }
  const newMeta = new Meta({
    originalname: array.originalname,
    filename:array.filename,
    path:array.path,
    user_id:req.user.user_id
  });

  await newMeta.save()

});
