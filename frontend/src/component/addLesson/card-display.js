import axios from 'axios';
import React , {useState,useEffect} from 'react';
import { Card } from 'antd';
import { Row, Col } from 'react-simple-flex-grid';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from "react-router-dom";
import { Button} from 'react-bootstrap';

/************************************************/

export default function CardDisplay() {
    const history = useHistory();
    
    var userId = localStorage.getItem('id');
    var role = localStorage.getItem('role');
    
    const [product , setProduct] = useState({})
    const [data, setData]=useState([])
    const { Meta } = Card;

    // const [info, setInfo]=useState([])
    useEffect( () => {
        async function fetchData() {
        const result = await axios.get('http://localhost:8000/teacher/card');
        setData(result.data)
    }fetchData();
     },[]);
   

    
    const makePayment = async token =>{
       
        console.log(token);
           
    
        try{
               const response= await axios.post("http://localhost:8000/payments/charge", {token, product});

               console.log("haio ",product);
                const { status } = response.data

               
                if (response.data === "success") {
                    toast("Success! Check email for details", { type: "success" });
                    history.push('/account/'+userId);
                  } else {
                    toast("Something went wrong", { type: "error" });
                  } 
            
            } catch (error) {
            alert(error)
            } 
        }
        console.log("haio ",product);

    return (
            <div>

<Row gutter={40}>
      
        {data.map((card,i) => (
            <Col  key={i}>
            <Card
              hoverable
              style={{ width: 400 ,hight: 200 , margin : 'auto'}}
              cover={<img alt="example" src={card.image} />}
              >
              <Meta title={card.Title} description={card.Desceription} />
              <label>Teacher name :</label><span>{card.Name}</span>
              <label>The Price : </label><span>{card.price}</span><br/>
              
              <StripeCheckout
            stripeKey={process.env.REACT_APP_KEY }
            token ={makePayment}
            name = 'Tick Kid'
            amount = {product.price * 100}>

            {role==='teacher' ? <button >add lesson</button> :
                <Button onClick={()=>setProduct({
                    name: data[i].Title,
                    price :data[i].price,
                    productBy:data[i].Name,
                })}>
                    Buy this course with just ${card.price} 
                </Button>
        }
            </StripeCheckout>
              
            </Card>
         </Col>
        ))}
       
       </Row>
        </div>
    )

} 


