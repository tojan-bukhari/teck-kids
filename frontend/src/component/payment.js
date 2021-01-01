import React , { useState }from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//require('dotenv').config();
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
           // console.log(response.data);
            if (response.data === "success") {
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
            stripeKey={process.env.REACT_APP_KEY }
            token ={makePayment}
            name = 'Tick Kid'
            amount = {product.price * 100}>

                <Button>
                    Buy this course with just ${product.price} 
                </Button>
        
            </StripeCheckout>
           

              
           

        </div>
    )
}

export default Payment
