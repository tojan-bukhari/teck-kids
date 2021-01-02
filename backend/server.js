var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
var app = express();
const socketio = require('socket.io');
const path = require("path");
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
const server = require("http").createServer(app);
//the Routes
const authRoutes  = require('./routes/auth');
const courseRoute = require('./routes/courseRoute');
const userRoute=require('./routes/userRoute');
const teacherRoute=require('./routes/teacherRoute');
const materialsRouter = require('./routes/materials');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const chatroomRoute=require('./routes/chatroomRoute')
const userRoute   =require('./routes/userRoute')
const payments    = require('./routes/payments');
const teacherRoute=require('./routes/teacherRoute');
const materialsRouter = require('./routes/materials');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const chatroomRoute=require('./routes/chatroomRoute')
require('dotenv').config();
//middleware
app.use(cors())
app.use(express.json()); 
app.use(morgan('dev'));
const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true ,useFindAndModify:false}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

//Bring in the models
require("./models/User");
require("./models/Chatroom");
require("./models/Massages");
// Routes
app.use('/api',authRoutes);
app.use('/course',courseRoute);
app.use('/user',userRoute);
app.use('/payments',payments)
app.use('/teacher',teacherRoute);
app.use('/materials', materialsRouter);
app.use("/Chatroom",chatroomRoute);
app.use("/Chatroom",chatroomRoute);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
}); 


io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });
  

 
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});



//port with whatever the port will be given by heruko
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//port with whatever the port will be given by heruko
const port = process.env.PORT || 8000;
// server.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

 server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
const io = require("socket.io")(server);
const jwt = require("jwt-then");
const Message = mongoose.model("Message");
const User = mongoose.model("User");

io.use(async (socket, next) => {
 
  try {
    const token = socket.handshake.query.token;
   
    const payload = await jwt.verify(token, process.env.SECRET);
    socket.userId = payload.id;
    next();
  } catch (err) {}
});

io.on("connection", (socket) => {
  
  console.log("Connected: " + socket.userId);

  socket.on("disconnect", () => {
    console.log("Disconnected: " + socket.userId);
  });

  socket.on("joinRoom", ({ chatroomId }) => {
        console.log("hhhhhhhhhhhhhhhhhhh")

    socket.join(chatroomId);
    console.log("A user joined chatroom: " + chatroomId);
  });
  //

  socket.on("leaveRoom", ({ chatroomId }) => {
    
    socket.leave(chatroomId);
    console.log("A user left chatroom: " + chatroomId);
  });

  socket.on("chatroomMessage", async ({ chatroomId, message }) => {
    if (message.trim().length > 0) {
      const user = await User.findOne({ _id: socket.userId });
      const newMessage = new Message({
        chatroom: chatroomId,
        user: socket.userId,
        message,
      });
      io.to(chatroomId).emit("newMessage", {
        message,
        name: user.name,
        userId: socket.userId,
      });
      await newMessage.save();
     
    }
  });
});
