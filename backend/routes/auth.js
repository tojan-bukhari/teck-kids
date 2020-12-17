const router = require("express").Router();
const User = require('../models/user');



router.post("/regerster" , async (req,res) => {
    const {userName,email,password,age } = req.body;
    console.log(req.body)
//validate
    if(!userName || !email || !password || !age )
        return res.status(401).json ({msg:"not all field have been entered"});
    
        const existingUser = User.findOne({email:email})
        if(existingUser)
    return res.status(402).json({msg :"the email is used"})

});
module.exports = router;