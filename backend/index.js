
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User=require('./schemas/user.js')
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken')
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io'); 
const server = http.createServer(app); 
const port=8000;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST"],
    credentials:true,
  },
}); 


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/CipherBox");
}
main()
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cors());

  const JWT_SECRET="helloworld@123"
  
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) {
    return res.status(403).send({"required":"Token is required"});
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({"Invalid":"Invalid Token"});
    }
    
    req.userId = decoded.userId; 
    next();
  });
};

app.get("/CipherBox", (req, res) => {
  res.send("Hello World");
});

app.post("/CipherBox/signup",async (req,res)=>{
  const { username, password, name, email } = req.body;
  if(await User.findOne({username})){
   return res.send({"message":"username taken"})
    
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new User({
      username,
      password:hashedPassword, 
      name,
      email
    });

    await newUser.save();

    console.log("User signed up:", newUser);
    return res.status(200).send({"greetings":`Hello ${name}`});

  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send({"error":"Internal Server Error"});
  }
});
app.post("/CipherBox/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({username });
    
    // Check if user exists
    if (!user) {
      return res.status(401).send({"Invalid":"Invalid credentials"});
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    
    // If password is incorrect
    if (!isMatch) {
      return res.status(401).send({"Invalid":"Invalid credentials"});
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    console.log("User logged in:", user);
    res.status(200).send({"token":token})
  
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).send({"error":"Internal Server Error"});
  }
});

io.on("connection",(socket)=>{
    console.log("userconnected-------------------")
    console.log(socket.id)
   
    // socket.broadcast.emit("hello","welcome bhaiyo!");
   
    socket.on("message",(data)=>{
        console.log(data); 
    })
   });

server.listen(port,()=>{
    console.log("serever is running on port",port)
});
