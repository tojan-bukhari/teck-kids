import axios from 'axios';
import React , {useState,useEffect} from 'react';
import { Card } from 'antd';
import { Row, Col } from 'react-simple-flex-grid';
import { Link } from 'react-router-dom';

// import { FaSatelliteDish } from 'react-icons/fa';
// import CardItem from './CardItem';



export default function CardDisplay() {

    const [data, setData]=useState([])
    const { Meta } = Card;

    
    useEffect( () => {
        async function fetchMyAPI() {
        const result = await axios.get('http://localhost:8000/teacher/card');
        // const [Desceription,Name,Title,image , _id ] = result.data;
        // console.log('this is result data',result.data);
        setData(result.data)
    }
     fetchMyAPI() 
     },[]);
    // console.log(data[0].Titel)
    return (
            <div>

<Row gutter={40}>
      
        {data.map((card,i) => (
            <Col  key={i}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<img alt="example" src={card.image} />}
              >
              <Meta title={card.title} description={card.Desceription}/>
               <Link to="/teachersM">
               <button type="button">
                go to lesson
              </button>
              </Link>
            </Card>
         </Col>
        ))}
       
       </Row>
        </div>
    )

} 


