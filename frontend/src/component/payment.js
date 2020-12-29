import React , { useState }from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button} from 'react-bootstrap';
import axios from 'axios';

function Payment() {

    const [product, setProduct] = useState({
        name: 'react from me',
        price : 10,
        productBy:'facebook'
    })
    return (
        <div>
            <StripeCheckout
            stripeKey=''
            token =''
            name = 'Tick Kid'>
            <Button>Buy by card </Button>

            </StripeCheckout>    
           

        </div>
    )
}

export default Payment
