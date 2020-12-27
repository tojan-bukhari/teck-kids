const express = require('express');
const error = require('mongoose/lib/error');
const router = express.Router();
// const User = require('../models/user');
const User = require('../models/User');
/**************************************************/

//THIS is coming from profile component  // GET users by ID and the id is saved in local storage
// WHAT IS THE DEFRENCE BETWEEN [Req.PODY, Req.PARAMS, Req.DATA, Req.QUERY] 
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
// THIS IS COMING FROM PROFILE IMAGE CHANGER 
// WE SHOULD HERE USE PUT BUT ITS NOT WORKING SO INSTADE WE ARE USING POST 
//  router.put("/pic/:id", function(req,res){
//   console.log(req.params.id)
//     User.findById(req.params.id)
//     .then(user => {
//       console.log(user)
//       user.img=req.body.image
//       user.save()
//       .then(()=> res.json("profile image update!!"))
//       .catch(err=> res.status(400).json('Error:'+err));
//       console.log("backend"+user.userName,req.body.image)
//     }) 
//     .catch(err=> res.status(400).json('Error:'+ err))
//  })

 //this request is to update the course state to register if the user add the course
router.put("/account/:id",(req,res)=>{
  console.log("the id",req.params.id)
  const promise = User.findByIdAndUpdate(req.params.id,req.body);
  console.log(req.body)
  promise.then((data)=>{
   res.json(data);
  }).catch((err)=>{
   res.json(err);
  })
 })
module.exports = router;