import axios from 'axios';
import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { Link, withRouter } from "react-router-dom";
import ProfilePicChanger from "./profilePicChanger";
import HtmlCard from '../CourseCards/HtmlCard';
import CssCard from '../CourseCards/CssCard';
import { Card ,Col} from 'antd';
import { Button} from 'react-bootstrap';
import flower from '../pices/flower.jpg';
const queryString = require('query-string');


/************************************************** */



class Personalprofile extends React.Component {
    // this component is a pairent component of profilepicChanger and the props are inharitence
    constructor(props) {
        super(props);
        // ID forme the local storage 
        // and the user info we need 
        this.state = {
             id:localStorage.getItem("id"),
            name:"",
            age:"",
            img:"",
            profilepic:[],
            htmlCourse:'',
            cssCourse:'',
            jsCourse:'',
            role:localStorage.getItem("role"),
            courses:[],//contains the courses id of the user
            array:[]//contains the coursees returend from the db to render it 
            
        }

    }
   
// THIS FUNCTION WILL HANDELL THE IMAGES ARE COMNMING FROM PIC CHANGER COMPONENT AND WLL SEND A PUT REQ TO DATABASE 
    handelImageChange= async (profilepic)=>{
        console.log("hey",profilepic)
        
        this.setState({
            img :profilepic }) 
            var newImg = {"img":profilepic}
            try {     
                await axios.put("http://localhost:8000/user/account/" + this.state.id,newImg);
               } catch (error) {
                  console.log(error.response.data.msg)
                  }  
    }


    componentDidMount= async()=> {
        console.log(this.state.role)
       try{//bring info of the user 
        await axios.get("http://localhost:8000/user/account/" + this.state.id)
            .then(res => {
                // console.log(res.data)
                console.log("id of teacher",this.state.id)
                this.setState({ 
                    name: res.data.userName,
                    age: res.data.age,
                    img:res.data.img,
                    htmlCourse:res.data.htmlCourse,
                    cssCourse:res.data.cssCourse,
                    jsCourse:res.data.jsCourse,
                    courses:res.data.Courses
                 })
                 console.log("this is courses of this teacher",this.state.courses)

                 
            })

           var data = this.state.courses
           var myCourses = []
           

           await
            data.map((courseId) => (
             axios.get("http://localhost:8000/teacher/card/"+courseId)//return the information of the courses the user teach
                .then(res=>{ 
                this.setState({course:res.data})
                console.log(this.state.course)
                 myCourses.push(res.data)
                this.setState({array:myCourses})
                })
            )
            
            ,[])
        }catch(error) {            console.log(error)
            }
   }

   

    render() {
        const { Meta } = Card;
        if(this.state.htmlCourse){
            var x = 
            <li >
            <Card
            hoverable
            style={{ width: 300 ,hight: 200 , margin : 'auto',padding:'1rem'}}
            cover={<img alt="courseImg" src={"https://2.bp.blogspot.com/-eO5lbx98AXU/VgJteZXqfQI/AAAAAAAAAU8/jVrj2vfkWZQ/s1600/what-is-html.jpg"} width='300' height='200'/>}>
            <Meta title={'HTML'} />
            <Button className="hh7"><Link to='/HTMLcourse'>Go to HTML</Link></Button>
            </Card>
        </li>
        }
        if(this.state.cssCourse){
            var y =   
             <li >
            <Card
            hoverable
            style={{ width: 300 ,hight: 200 , margin : 'auto',padding:'1rem'}}
            cover={<img alt="courseImg" src={"https://2.bp.blogspot.com/-me_vlpqkQGw/VgJwY3wm_SI/AAAAAAAAAVI/cyg9I6tfXWs/s400/What%2Bis%2BCSS.jpg"} width='300' height='200'/>}>
            <Meta title={'CSS'} />
            <Button className="hh7"><Link to='/CSScourse'>Go To CSS</Link></Button>
            </Card>
        </li>
        }
      
        return (
            <div  style={{
                backgroundImage: "url(" + flower + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

            <div style={{marginLeft:"600px"}}>
              
            
                <span> {this.state.role==="teacher"? "hello teacher" : "helllo student" }</span>
                
            <div>
            
            <div style={{marginLeft:"-550px",float:"left" , backgroundColor:'#80aaff',padding: '10px', border: '1px solid #80aaff',boxShadow: '5px 10px 10px #888888' ,}}>
                
                <Avatar  size={200} icon={<UserOutlined />} src={this.state.img} /><br/>
                <ProfilePicChanger handelImageChange={this.handelImageChange} /><br />

                <h2 style={{  fontFamily:"Cursive"}}>My Profile</h2>
               
                 <Link to ={"/edit/" + this.state.id}  className="btn btn-success" >Edit profile</Link>
              
              <br/>
                <h3  style={{  fontFamily: "Trirong"}}>{this.state.name}</h3>
                <span style={{  fontFamily:"Cursive"}}>Age</span>
                <span  style={{  fontFamily:"Cursive"}}>{this.state.age}</span>
                 
            </div> 
           
             </div>
             <br/>
             <label>{this.state.role==="teacher"? "to add a card that will help u to show your lessons" :  "learn a new lesson"} </label>
             <Button>{this.state.role==="teacher"? <Link to="/teacher/addcard" style={{color:'white'}}> Add New Course </Link>:<Link to="/"> register to lesson </Link>}</Button> <br/>
            
             <div 
               style={{
                padding: '10px',
                backgroundColor:'#ff8c1a',
                width: '450px',
                border: '1px solid #ffff00',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                padding: '50px',
                boxShadow: '5px 10px 10px #888888' ,
                margin:'auto'
                            
            }}
             
             >
                 <h3 style={{  fontFamily:"Serif" , color:"white", backgroundColor:'#ffa64d'}}>My Courses</h3>
                <ol>
                
                    {(this.state.array).map((course,i)=>{
                        return(
                        
                        <li key={i}>
                            <Card
                            hoverable
                            style={{ width: 300 ,hight: 200 , margin : 'auto',padding:'1rem'}}
                            cover={<img alt="courseImg" src={course.image} width='300' height='200'/>}>
                            <Meta title={course.Title} />

                        {this.state.role==="teacher"?  <Link to={`/addNewLesson ?id=${course._id}`} style={{fontSize:'1.2rem', padding:'2rem'}} > Add a new lesson </Link>  : <Link to={`/Lissons ?id=${course._id}`} style={{fontSize:'1.2rem', padding:'2rem'}} > Lets Study &#128516;</Link> }<br/><br/>
                        {this.state.role === "teacher"? <Link to={`/Lissons ?id=${course._id}`} style={{fontSize:'1.2rem', padding:'2rem'}} > Edit lesson &#128516;</Link> : null }
                            </Card>
                        </li>
                    )
                    
                    })}
                     {x}
                     {y}
                    
                 </ol>
                
             </div >
                   
             </div>
            </div>
            
        )
    }
}

export default withRouter(Personalprofile);