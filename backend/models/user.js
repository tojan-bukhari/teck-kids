const mongoose = require('mongoose');
//////////////////////userSchema///////////////////////////////////
const userSchema = new mongoose.Schema ({
    userName:{
        type: String,
        required : true,
        trim: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        trim: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        trim: true,
        max: 1000,
        min: 6
    },
    age:{
        type: number,
      required: true,
       trim: true
        
    }, 
    image:{
        typt:String,
      },
  
     progress:{
         type:Boolean
         
      },
     role:{
         type:String,
         enum :[ "student" , "teacher"]
      },
    HTML_Schema:[
          {type:mongoose.schema.types.ObjectId,ref:"Html"}
      ],
  
     CSS_Schema:[
          {type:mongoose.schema.types.ObjectId,ref:"css"}
      ],
  
     JS_Schema:[
          {type:mongoose.schema.types.ObjectId,ref:"js"}
      ] 
   
});

module.exports = mongoose.model('User',userSchema );
/////////////////////////////////////////////////////////////////////////////