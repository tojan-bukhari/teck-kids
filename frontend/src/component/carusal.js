import  Button  from 'react-bootstrap/Button';
import React , {useState}from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Home from './carusal.css';




 export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
   
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="size"
            src="https://cdn.diabetesdaily.com/wp-content/blogs.dir/21/files/2017/08/iStock-538864120.jpg"
            alt="First slide"
          />
          
          <Carousel.Caption className='pargraph'>
        
            <h3>“No one is perfect – that’s why pencils have erasers.” </h3>
            <p>
                   Love yourself, your whole self.<br/>

                   You are not here to be perfect, you are here to be you.<br/>

                   Be who you are and you will attract the right people around you.</p>
                   <Button href="./registrate" className="button1" className="landing-button" variant="outline-light" data-slide="prev">Sign Up</Button>
                   <Button href="./login" className="landing-button" className="button" variant="outline-light" data-slide="prev">LogIn</Button>

          </Carousel.Caption>
        
        </Carousel.Item>
      
        <Carousel.Item>

      
          <img
            className="d-block w-100"
            className="size"
            src="https://raisingchildren.net.au/__data/assets/image/0032/47975/praise-and-encouragement.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption  className='pargraph'>
            <h3>“Why fit in when you were born to stand out?” </h3>
            <p>When it seems like everyone is trying to fit in,<br/> standing out can be a bit scary.

            As a kid, I was scared to stand out and<br/> be who I really was.
            I was concerned and caught up with what other <br/>people thought of me.

            </p>
            <Button href="./registrate" className="button1" className="landing-button" variant="outline-light" data-slide="prev">Sign Up</Button>
                   <Button href="./login" className="landing-button" className="button" variant="outline-light" data-slide="prev">LogIn</Button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="size"
            src="https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/04/children-learn-CONTENT-2019-600x315.jpg"
            alt="Third slide"
          />
  
      <Carousel.Caption  className='pargraph'>
            <h3>“You can steer yourself any direction you choose.”</h3>
            <p>Your life is completely up to you.<br/>

                 Many times when we are going through hard times, <br/>
                 it doesn’t feel like that, but it is.

                 As we spoke about before,<br/> we can’t control everything that happens to us,<br/>
                 but the way we respond is ALWAYS up to us.</p>
                 <Button href="./registrate" className="button1" className="landing-button" variant="outline-light" data-slide="prev">Sign Up</Button>
                   <Button href="./login" className="landing-button" className="button" variant="outline-light" data-slide="prev">LogIn</Button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="size"

            src="https://www.hhsi.us/wp-content/uploads/2019/02/shutterstock_735971851.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption className='pargraph'>
              
            <h3> “Anything is possible. Anything can be.” –</h3>
            <p>
            Believe it’s possible. Sometimes it’s just that simple. <br/>
            Yet, some people will never truly believe.<br/>

            Have faith. But just because it’s possible, doesn’t mean it will be easy.<br/>
            Know that whatever life you want, the grades you want, the job you want,<br/>
            the reputation you want, friends you want, that it’s possible.<br/>

             Nothing is off limits. Everything is within reach. Anything can be.
            </p>
            <Button href="./registrate" className="button1" className="landing-button" variant="outline-light" data-slide="prev">Sign Up</Button>
                   <Button href="./login" className="landing-button" className="button" variant="outline-light" data-slide="prev">LogIn</Button>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 