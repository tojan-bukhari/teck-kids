const mongoose = require('mongoose');

const CSS_Schema = new mongoose.Schema ({
   
    Titles:
    {
        type: String,   
    },
    Videos: {
        type: String,    
    },
    Desceriptions: {
        type: String,     
    },
});

module.exports = mongoose.model('css',CSS_Schema );