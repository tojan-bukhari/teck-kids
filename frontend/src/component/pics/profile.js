
import axios from 'axios';
import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { Link, withRouter } from "react-router-dom";
import ProfilePicChanger from "./profilePicChanger";
// import Pic1 from "./pics/1.png";
// import Pic2 from "./pics/2.png";
// // import Pic3 from "./pics/3.png";
// import Pic4 from "./pics/4.png";
// import Pic5 from "./pics/5.png";
// import Pic6 from "./pics/6.png";
// import Image from 'react-bootstrap/Image'

class Personalprofile extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
             id:localStorage.getItem("userId"),
            name:"",
            age:"",
            img:"",
            profilepic:[],
        }

    }


    handelImageChange= async (profilepic)=>{
        console.log("hey",profilepic)
        this.setState({
            img :profilepic }) 
            var newImg = {"img":profilepic}
            try {     
                await axios.put("http://localhost:8000/user/account/" + this.state.id,newImg);
               } catch (error) {
                  alert(error.response.data.msg)
                  }  
    }


    componentDidMount() {
        axios.get("http://localhost:8000/user/account/" + this.state.id)
            .then(res => {
                console.log(res.data.img+"yees")
                this.setState({ 
                    name: res.data.userName,
                    age: res.data.age,
                    img:res.data.img
                 })
            })
            .catch((error) => {
                console.log(error);
            });
        
    } 
   

    render() {
        return (
            <div 
            style={{
                position: 'absolute', right: '0%', top: '40%',
                transform: 'translate(-50%, -50%)',
                border:'2px solid pink',
                height:'500px',
                padding:'20px'
            }}>
                <Avatar size={200} icon={<UserOutlined />} src={this.state.img} />
                <h2>My Profile</h2>
               
                <span>Name</span>
                <h3>{this.state.name}</h3>
                <span>Age</span>
                <h3>{this.state.age}</h3>
                
                  <ProfilePicChanger handelImageChange={this.handelImageChange} />
                 <Link to ={"/edit/" + this.state.id}  className="btn btn-success" >Edit User</Link>
             </div>
            
        )
    }
}

export default withRouter(Personalprofile);