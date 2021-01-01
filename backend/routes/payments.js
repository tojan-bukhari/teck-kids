const express = require('express');
const router = express.Router();

var stripe = require('stripe')('sk_test_51I3lU8JcY9KJTdicHsybG4B51PGZdmBbOdJK4NmGPGKnq06nNExdmgPfPb7vHg2wqBhUehIdb57QP3ZdvkQYk8eY00ceh1JI0w')
const { v4: uuidv4 } = require('uuid');
/******************************************* */

router.post('/charge',(req,res)=>{
    //let status;
    
    const {  token, product } = req.body;
    //console.log(req.body);
    //console.log("price ", product.price);
    console.log('token ' , token.email);
    //this idempontencyKey is a To create a random UUID this keep the user intrake to not be charged twice for the same product
    const idempontencyKey = uuidv4(); 
    //create a customer 
    stripe.customers.create({
        email : token.email,
        source: token.id

    })
    .then(customer => {
      stripe.charges.create({

            amount        : product.price *100 ,//take the amount from the product and multiplay the price *100 to make it in dollers
            currency      : 'usd',
            customer      : customer.id,
            receipt_email : token.email,
            description   : `Purchase of ${product.name}`,

        })
    }).then(charge=> {
        res.status(200).json(charge)
    }).catch(err => res.status(500).json('NotWorking'))

})

module.exports = router;
