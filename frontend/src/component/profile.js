
import axios from 'axios';
import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { Link, withRouter } from "react-router-dom";


class Personalprofile extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
             id:localStorage.getItem("userId"),
            name:"",
            age:"",
            users: [],
            Data: [],


        }

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
            <div>
             <div>
                <Avatar size={200} icon={<UserOutlined />} />
                <h2>Profile</h2>
                <lable>Name</lable>
                <h3>{this.state.name}</h3>
                <lable>Age</lable>
                <h3>{this.state.age}</h3>
                <Link to ={"/edit/" + this.state.id}  class="btn btn-success" >Edit User</Link>
             </div>
             <div>
             </div>
           
            </div>
        )
    }
}

export default withRouter(Personalprofile);