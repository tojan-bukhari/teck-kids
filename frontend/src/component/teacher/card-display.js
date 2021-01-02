import axios from 'axios';
import React , {useState,useEffect} from 'react';
import { Card } from 'antd';
import { Row, Col } from 'react-simple-flex-grid';
import { Link } from 'react-router-dom';
import Payment from '../payment';
/************************************************/

export default function CardDisplay() {
   
    const [product , setProduct] = useState({})
    const [data, setData]=useState([])
    const { Meta } = Card;
    useEffect(async () => {
        try{
        const result = await axios.get('http://localhost:8000/teacher/card');
        const [Desceription,Name,Title,image , _id, price ] = result.data;
        setProduct({
            name: Title,
            price : price,
            productBy:Name,
         })
        
        console.log('this is result data',result.data);
        setData(result.data)
    }catch(error){
        console.log(error,"oh nooooo")
    } },[]);
    console.log(product)

    
    return (
            <div>

<Row gutter={40}>
      
        {data.map((card,i) => (
            <Col  key={i}>
            <Card
              hoverable
              style={{ width: 200 ,hight: 200 }}
              cover={<img alt="example" src={card.image} />}
              >
              <Meta title={card.Title} description={card.Desceription} />
              <label>Teacher name :</label><span>{card.Name}</span>
              <label>The Price : </label><span>{card.price}</span><br/>
              <Link to={{ pathname:'/payment', state:{price:card.price}}}>
              <Payment/></Link>
              
            </Card>
         </Col>
        ))}
       
       </Row>
        </div>
    )

} 


