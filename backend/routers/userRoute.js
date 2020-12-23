const express = require('express');
const error = require('mongoose/lib/error');
const router = express.Router();
// const User = require('../models/user');
const User = require('../models/User');
/**************************************************/

// router.get('/account/:id' , function (req , res) {
//      var user = User.findById(req.params._id)
//      .then(userFound=>{
//          if(!userFound){return res.status(404).json("Can't find user")}
//          return res.status(200).json(userFound)
//      })
//      .catch(err =>  res.status(500).json("not working"))      
//  } ); 
// router.get('/account/:_id' , function (req , res) {
//     // console.log(req.params._id)
//      var user = User.findById(req.params._id)
//      .then(userFound=>{
//          if(!userFound){return res.status(404).json("Can't find the user")}
//          return res.status(200).json(userFound)
//      })
//      .catch(err =>  res.status(500).json("not working"))      
     
//  } );
 


//GET users by ID  becouse i want to delete and update this user / we will use find by id method and how ? by get the id by (req.params.id)
router.get("/account/:id", function(req, res) {
    User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
  });


module.exports = router;