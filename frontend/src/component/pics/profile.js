
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


    handelImageChange=(profilepic)=>{
        console.log("hey",profilepic)
        this.setState({
            profilepic }) 
    }


    componentDidMount() {
        axios.get("http://localhost:8000/user/account/" + this.state.id)
            .then(res => {
                console.log(res.data)
                this.setState({ 
                    name: res.data.userName,
                    age: res.data.age, })
            })
            .catch((error) => {
                console.log(error);
            });
        
    } 
   

    render() {
        return (
            <div 
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
    
                <Avatar size={200} icon={<UserOutlined />} src={this.img} />
                <h2>Profile</h2>
                <lable>Name</lable>
                <h3>{this.state.name}</h3>
                <lable>Age</lable>
                <h3>{this.state.age}</h3>
                {/* pic1={Pic1} pic2={Pic2} pic4={Pic4} pic5={Pic5} pic6={Pic6} */} 
                 <ProfilePicChanger handelImageChange={this.handelImageChange} />
                 <Link to ={"/edit/" + this.state.id}  class="btn btn-success" >Edit User</Link>
             </div>
            
        )
    }
}

export default withRouter(Personalprofile);