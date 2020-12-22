const express = require('express');
const router = express.Router();
const User = require('../models/user');
/**************************************************/

router.get('/account/:_id' , function (req , res) {
    console.log(req.params._id)
     var user = User.findById(req.params._id)
     .then(userFound=>{
         if(!userFound){return res.status(404).json("Can't find user")}
         return res.status(200).json(userFound)
     })
     .catch(err =>  res.status(500).json("not working"))      
 } ); 