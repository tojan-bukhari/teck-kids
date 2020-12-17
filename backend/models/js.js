const mongoose = require('mongoose');

const JS_Schema = new mongoose.Schema ({   
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

export default mongoose.model('js',JS_Schema);