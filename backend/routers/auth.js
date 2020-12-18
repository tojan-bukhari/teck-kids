//the authontication route for regester page (login)
const router = require("express").Router();
//import the usermodel  use the schema to insert the data 
const User = require('../models/User');
//for hashing the password
const bcrypt = require('bcrypt');
// use joi to validate the data inputs from user 
const Joi = require('@hapi/joi');
//for the token
const JWT = require('jsonwebtoken');

const validator = require('express-joi-validation').createValidator({})

const { schema } = require('../models/User');








router.post("/register", async (req, res) => {
    try {
      let { userName, age,email, password } = req.body;
  
      // validate
  
      if ( !userName || !age||!email || !password )
        return res.status(400).json({ msg: "Not all fields have been entered." });
     
     
  
      const existingUser = await User.findOne({ email: email });
      if (existingUser)
        return res
          .status(400)
          .json({ msg: "An account with this email already exists." });
  
    
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newUser = new User({
          userName,age,
        email,
        password: passwordHash,
       
      });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
   router.post('/signin',async(req, res)=> {
    try {
        const {email, password } = req.body;

        if(!email || !password)
        return res.status(401).json({msg :"password and email are required"})

        //3-find the user email at the db by email since it is uonic and it will return boolean so..
        const retrevdUser = await User.findOne({ email:email }) ;
        if( !retrevdUser ){
        return res.status(402).json({msg:"Sorry you don't have acount on the webpage please login... 3eeeb 3aleek"})
        
        }
        //4-You need to compare the encripted pass with the pass entered from the user by using bcrypt.compare
        //it will return boolean so 
        const comparePass = await bcrypt.compare( password, retrevdUser.password )
        if( !comparePass )
        return res.status(403).json({msg:"Invalid Credentials, 3eeeeb 3aleeek U_U "})

        //5- create the token for the user
        //-make the SECRET_TOKEN by  require('crypto').randomBytes(64).toString('hex') at the terminal but before that you 
        //should write node so you can use it 
        //sign take (what we wont to serialized)
        const token = JWT.sign({ retrevdUser : retrevdUser._id }, process.env.SECRET_TOKEN)
        res.header('theToken',token);// put the token in the header so we send it 
        res.status(200).json({ token, retrevdUser :{id:retrevdUser._id , name: retrevdUser.name} }) //send the token to the local storge
    } catch (error) {
        return res.status(500).json({err : error.message})

 
    }
})

});
module.exports = router;