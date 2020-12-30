const router = require("express").Router();
const { catchErrors } = require("../handlers/errorChat");
const chatroomController = require("../Controllers/chatroomcontrollers");
const User = require('../models/User');

const Massages= require('../models/Massages');
const Chatroom= require('../models/Chatroom');


const auth = require("./auth");

router.get("/", auth, catchErrors(chatroomController.getAllChatrooms));
router.post("/", auth, catchErrors(chatroomController.createChatroom));

module.exports = router;