const express = require('express');
const router = express.Router();
//import the htmlmodel to use the schema to get the lisson 
const htmlCourse = require('../models/html');
const cssCourse = require('../models/css');
const jsCourse = require('../models/js');
/**************************************************/

router.get('/html/:_id' , function (req , res) {
   // console.log(req.params._id)
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
module.exports = router;
