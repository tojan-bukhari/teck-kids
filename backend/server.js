var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
var app = express();
//






//the Routes...
const authRoutes = require('./routes/auth');
const courseRoute = require('./routes/courseRoute');
const userRoute=require('./routes/userRoute')
const chatroomRoute=require('./routes/chatroomRoute')
//
require('dotenv').config();

app.use(cors())
app.use(express.json()); 
///

app.use(morgan('dev'));

// // --> Add this
// // ** MIDDLEWARE ** //'''''
// const whitelist = ['http://localhost:3000', 'http://localhost:8080']
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true ,useFindAndModify:false}
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
//

// MIDDILWARES
app.use('/api',authRoutes);
app.use('/course',courseRoute);
app.use('/user',userRoute);
app.use("/Chatroom",chatroomRoute)
// // --> Add this
// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'frontend/build')));
// // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
//   });
// }

//
//port with whatever the port will be given by heruko
const port = process.env.PORT || 8000;
 server=app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


const io = require("socket.io")(server);
const jwt = require("jwt-then");

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
});

