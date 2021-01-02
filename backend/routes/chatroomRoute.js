<<<<<<< HEAD
  
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ response: "Server is up and running." }).status(200);


    
  });
  module.exports = router;
=======
// const router = require("express").Router();
// const { catchErrors } = require("../handlers/errorChat");
// const chatroomController = require("../Controllers/chatroomcontrollers");
// const User = require('../models/User');
// const Massages= require('../models/Massages');
// const Chatroom= require('../models/Chatroom');


// const auth = require("../middleware.js/auth1");

// router.get("/", auth, catchErrors(chatroomController.getAllChatrooms));
// router.post("/", auth, catchErrors(chatroomController.createChatroom));

// module.exports = router;
>>>>>>> 08addaab9f4acfa94f4afec53c4f0432ca774087
