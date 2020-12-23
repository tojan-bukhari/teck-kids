
import React from 'react';

export default function EditProfile() {

    this.state = {
        id:localStorage.getItem("userId"),
       name:localStorage.getItem("username"),
       age:localStorage.getItem("userage"),
       password:localStorage.getItem("userpass"),
   }
 
    return (
        <div>
          <div>
               <lable>Change User Name</lable>
               <input value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input>
             </div>
             <div>
               <lable>Change User Age</lable>
               <input value={this.state.age} onChange={(e)=>{this.setState({age:e.target.value})}}></input>
             </div>
             <div>
               <lable>Change User Password</lable>
               <input value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}></input>
             </div>
             <div>
               <lable>Change User image</lable>
             </div>
             <div>
              {/* <button onSubmit={}>Save</button> */}
             </div> 
        </div>
    )
}
