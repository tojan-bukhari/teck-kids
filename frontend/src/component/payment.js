import React , { useState }from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
require('dotenv').config();
/************************************************/
toast.configure();

function Payment() {
    const history = useHistory();

    var userId = localStorage.getItem('id');
    //var userToken = localStorage.getItem('theToken');

    const [product] = useState({
        name: 'react from me',
        price : 10,
        productBy:'facebook',
    })

    const makePayment = async token =>{
       
        console.log(token);
      console.log("haio ",product);
        try{
           const response= await axios.post("http://localhost:8000/payments/charge", {token, product});
           
            const { status } = response.data
            if (status === "success") {
                toast("Success! Check email for details", { type: "success" });
                history.push('/account/'+userId);
              } else {
                toast("Something went wrong", { type: "error" });
              } 
         //  history.push('/account/'+userId);
        } catch (error) {
        alert(error)
        } 
    }

    return (
        <div>
            <StripeCheckout
            stripeKey='pk_test_51I3lU8JcY9KJTdicuwdaAS2Y1sePa698fW7C5peecuSzWbgOov34REXHvoedFBVISFqGyYSCakwBhGyQYndgOBWI00SzCaAuQm'
            token ={makePayment}
            name = 'Tick Kid'
            amount = {product.price * 100} />
           

              
           

        </div>
    )
}

export default Payment
