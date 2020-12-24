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
 


//GET users by ID and the id is saved in local storage 
router.get("/account/:id", function(req, res) {
    User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
  });

  //UPDATE USER PROFILE BY ID 
  router.route("/update/:id" ).post((req, res) => {
    User.findById(req.params.id)
    .then(user => {
      user.userName = req.body.username;
      user.password= req.body.password;
      user.age = req.body.age;
      user.save()
      .then(() => res.json("User is updated!"))
      .catch(err => res.status(400).json('Error: ' + err));
    })
      .catch(err => res.status(400).json('Error: ' + err));
  })

 router.post("/pic/:id", function(req,res){
  
    User.findById(req.params.id)
    
    .then(user => {
      user.image=req.body.image
      user.save()
      .then(()=> res.json("profile image update!!"))
      .catch(err=> res.status(400).json('Error:'+err));
      console.log("backend"+user.userName,req.body.image)
    }) 
    .catch(err=> res.status(400).json('Error:'+ err))
 })

module.exports = router;