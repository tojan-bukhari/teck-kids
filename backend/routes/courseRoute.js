const express = require('express');
const router = express.Router();
//import the htmlmodel to use the schema to get the lisson 
const htmlCourse = require('../models/html');
const cssCourse  = require('../models/css');
const jsCourse   = require('../models/js');
//import the usermodel  use the schema to insert the data 
const User = require('../models/User');
//////////////////

router.get('/html/:_id' , function (req , res) {
    console.log(req.params._id)
    var course = htmlCourse.findById(req.params._id)
    .then(lessonFound=>{
        if(!lessonFound){return res.status(404).json("Can't find the lesson")}
        return res.status(200).json(lessonFound)
    })
    .catch(err =>  res.status(500).json("not working"))      
    
} );

router.post('/html', (req , res)=>{
    try {
        const newCourse = new htmlCourse(req.body);
        newCourse.save();
        res.json(newCourse)
    }
    catch(err){res.json("can't save");}    
    

})
router.post('/css', (req , res)=>{
    try {
        const newCourse = new cssCourse(req.body);
        newCourse.save();
        res.json(newCourse)
    }
    catch(err){res.json("can't save");}    
    

})

router.get('/css/:_id' , function (req , res) {
    console.log(req.params._id)
    var course = cssCourse.findById(req.params._id)
    .then(lessonFound=>{
        if(!lessonFound){return res.status(404).json("Can't find the lesson")}
        return res.status(200).json(lessonFound)
    })
    .catch(err =>  res.status(500).json("not working"))      
    
} );

router.post('/js', (req , res)=>{
    try {
        const newCourse = new jsCourse(req.body);
        newCourse.save();
        res.json(newCourse)
    }
    catch(err){res.json("can't save");}    
})

router.get('/js/:_id' , function (req , res) {
    console.log(req.params._id)
    jsCourse.findById(req.params._id)
    .then(lessonFound=>{
        if(!lessonFound){return res.status(404).json("Can't find the lesson")}
        return res.status(200).json(lessonFound)
    })
    .catch(err =>  res.status(500).json("not working"))      
    
} );
//this request is to update the course state to register if the user add the course
router.put('/addCourse/:id',(req,res)=>{
    console.log(req.params.id)
    const promise = User.findByIdAndUpdate(req.params.id,req.body);
    console.log(req.body)
    promise.then((data)=>{
        
     res.json(data);
    }).catch((err)=>{
     res.json(err);
    })
   })

//this request to get the user and check if he is regester at the course or not 
router.get('/user/:_id' , function (req , res) {
    console.log(req.params._id)
    User.findById(req.params._id)
    .then(userFound=>{
        if(!userFound){return res.status(404).json("Can't find the user man :(")}
        return res.status(200).json(userFound)
    })
    .catch(err =>  res.status(500).json("not working"))      
    
} );
module.exports = router;
