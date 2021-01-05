const express = require('express');
const error = require('mongoose/lib/error');
const router = express.Router();
const Card = require('../models/card');


router.post('/addcard', (req , res)=>{
    try {
        const newCard = new Card(req.body);
        console.log(newCard)
        newCard.save();
        res.json(newCard)
    }
    catch(err){res.json("waahhhh ");}    
    

})

  router.get('/card' , function (req , res) {
    console.log(req.params.id)
     const card = Card.find()
     .then(cardFound=>{
         if(!cardFound){return res.status(404).json("Can't find the card")}
         return res.status(200).json(cardFound)
     })
     .catch(err =>  res.status(500).json("not working"))      
     
 } );
 
// GET THE CARD BY ID 
router.get("/card/:id", function(req, res) {
  Card.findById(req.params.id)
  .then(card => res.json(card))
  .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;