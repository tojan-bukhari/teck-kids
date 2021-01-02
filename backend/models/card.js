const mongoose = require('mongoose');

const card_Schema = new mongoose.Schema ({
    Title:
    {
        type: String,     
    },
    image: {
        type: String,       
    },
    Desceription: {
        type: String,
        
    },
   Name:{
    type: String,
   },
   price:{
    type: Number,
   }
});

module.exports = mongoose.model('card',card_Schema );