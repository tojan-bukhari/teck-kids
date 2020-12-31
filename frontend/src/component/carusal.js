
import React , {useState}from 'react';
import Carousel from 'react-bootstrap/Carousel';
 export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    // <MDBContainer>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel slide" data-ride="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 size"
            src="https://cdn.diabetesdaily.com/wp-content/blogs.dir/21/files/2017/08/iStock-538864120.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='pargraph'>
            <h3>“No one is perfect – that’s why pencils have erasers.” </h3>
            <span>
                   Love yourself, your whole self.<br/>
                   You are not here to be perfect, you are here to be you.<br/>
                   Be who you are and you will attract the right people around you.</span>
                  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 size"
            src="https://raisingchildren.net.au/__data/assets/image/0032/47975/praise-and-encouragement.jpg"
            alt="Second slide"
          />
          <Carousel.Caption  className='pargraph'>
            <h3>“Why fit in when you were born to stand out?” </h3>
            <span>When it seems like everyone is trying to fit in,<br/> standing out can be a bit scary.
            As a kid, I was scared to stand out and<br/> be who I really was.
            I was concerned and caught up with what other <br/>people thought of me.
            </span>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
        
            className="d-block w-100 size"
            src="https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/04/children-learn-CONTENT-2019-600x315.jpg"
            alt="Third slide"
          />
      <Carousel.Caption  className='pargraph'>
            <h3>“You can steer yourself any direction you choose.”</h3>
            <span>Your life is completely up to you.<br/>
                 Many times when we are going through hard times, <br/>
                 it doesn’t feel like that, but it is.
                 As we spoke about before,<br/>
                  we can’t control everything that happens to us,<br/>
                 but the way we respond is ALWAYS up to us.</span>
                
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 size"
            
            src="https://www.hhsi.us/wp-content/uploads/2019/02/shutterstock_735971851.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className='pargraph'>
            <h3> “Anything is possible. Anything can be.” –</h3>
            <span>
            Believe it’s possible. Sometimes it’s just that simple. <br/>
            Yet, some people will never truly believe.<br/>
            Have faith. But just because it’s possible, doesn’t mean it will be easy.<br/>
            Know that whatever life you want, the grades you want, the job you want,<br/>
            the reputation you want, friends you want, that it’s possible.<br/>
             Nothing is off limits. Everything is within reach. Anything can be.
            </span>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      // </MDBContainer>
    );
  }