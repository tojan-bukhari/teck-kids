const mongoose = require('mongoose');

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
<<<<<<< HEAD
        type: Number,
=======
        type:Number,
>>>>>>> 10d342ba5aa6ccc71a5eddbacebbc0c1d5baf7b4
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
<<<<<<< HEAD
          {
              type: mongoose.Schema.Types.ObjectId,
            ref:"Html"
        }
      ],
  
     CSS_Schema:[
          {
              type:mongoose.Schema.Types.ObjectId,
              ref:"css"
            }
      ],
  
     JS_Schema:[
          {
              type:mongoose.Schema.Types.ObjectId,
              ref:"js"}
=======
          {type:mongoose.Schema.Types.ObjectId,ref:"Html"}
      ],
  
     CSS_Schema:[
          {type:mongoose.Schema.Types.ObjectId,ref:"css"}
      ],
  
     JS_Schema:[
          {type:mongoose.Schema.Types.ObjectId,ref:"js"}
>>>>>>> 10d342ba5aa6ccc71a5eddbacebbc0c1d5baf7b4
      ] 
   
});

const User = mongoose.model('User', userSchema);

module.exports = User;
