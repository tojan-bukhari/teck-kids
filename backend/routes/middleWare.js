const router = require("express").Router();
const JWT = require('jsonwebtoken');

//retrun true or false if the token exist and it's valid
const auth = (req, res, next) => {
   router.post("/tokenIsValid", async (req, res) => {
      try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
    
        const verified = JWT.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.json(false);
    
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
    
        return res.json(true);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
     
    });
  };

    module.exports = auth;
