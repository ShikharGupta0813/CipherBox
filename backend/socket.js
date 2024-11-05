const express =require('express')
const app=express()
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
app.use(cors());

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
