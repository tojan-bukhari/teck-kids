import axios from 'axios';
import { set } from 'mongoose';
import React , {useState,useEffect} from 'react';
import { Card } from 'antd';
import { Row, Col } from 'react-simple-flex-grid';
import { Link } from 'react-router-dom';

// import { FaSatelliteDish } from 'react-icons/fa';
// import CardItem from './CardItem';



export default function CardDisplay() {

    const [data, setData]=useState([])
    const { Meta } = Card;
    useEffect(async () => {
        try{
        const result = await axios.get('http://localhost:8000/teacher/card');
        const [Desceription,Name,Title,image , _id ] = result.data;
        // console.log('this is result data',result.data);
        setData(result.data)
    }catch(error){
        console.log(error,"oh nooooo")
    } },[]);
    // console.log(data[0].Titel)
    return (
            <div>

<Row gutter={40}>
      
        {data.map((card,i) => (
            <Col  key={i}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={card.image} />}
              >
              <Meta title={card.Titel} description={card. Desceription} />
               <Link to="/">
               <button type="button">
                Click Me!
              </button>
              </Link>
            </Card>
            {/* <div><h3>{card.Titel}</h3>
            <img src={card.image} alt="hey-img"/>
            <h3>{card. Desceription}</h3>
            <h3>{card.Name}</h3>
            </div> */}
         
         </Col>
        ))}
       
       </Row>
        </div>
    )

} 


