
import React, { Component } from 'react';
import axios from "axios";

export default class EditProfile extends Component {
  
   onSubmit=this.onSubmit.bind(this)   

  state = {
        id:localStorage.getItem("userId"),
       name:localStorage.getItem("username"),
       age:localStorage.getItem("userage"),
       password:localStorage.getItem("userpass"),
   }
   handleChange = e => {
    this.setState({ name: e.target.value });
 };
 handleChange = e => {
  this.setState({ age: e.target.value });
 };
 handleChange = e => {
  this.setState({ password: e.target.value });
 };

onSubmit(e) {
  e.preventDefault();   
  const user = {
    username: this.state.username,
    password: this.state.password,
    age: this.state.phone,
  }

  console.log(user);
axios.post("http://localhost:3000/addUser/update/:id"+this.state.id, user)
    .then(res => console.log(res.data));

  window.location = '/account/'+this.state.id
}
   render() {
    return (
        <div>
          <h3>EDIT PROFILE</h3>
         
         <form className="text-center border border-light p-9" onSubmit={this.onSubmit}>
           <div>
               <lable>Change User Name</lable>
               <input value={this.state.name} onChange={this.handleChange}></input>
             </div>
               <div>
               <lable>Change User Age</lable>
               <input value={this.state.age} onChange={this.handleChange}></input>
             </div>
             <div>
               <lable>Change User Password</lable>
               <input value={this.state.password} onChange={this.handleChange}></input>
             </div>
                <input type='submit' value='Edit Account' className="btn btn-deep-orange darken-4"/>
          </form>
        </div>
        
    )
}
}
