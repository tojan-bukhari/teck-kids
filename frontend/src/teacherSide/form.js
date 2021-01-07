import React, {Component} from 'react';
import {storage} from '../component/teacher/firebase'
import axios from 'axios';
import { toast } from "react-toastify";
const queryString = require('query-string');

/***************************************/
toast.configure();

class Form extends Component {
  constructor(props) {
    super(props);
    this.onChangeMaterial = this.onChangeMaterial.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangevideo = this.onChangevideo.bind(this);
    this.handleUpload = this.handleUpload.bind(this);



    this.state = {
      video: null,
      url: '',
      progress: 0,
      material: '',
      description: '',
      title: '',
      cardId: localStorage.getItem("cardId")
    }
    // this.handleChange = this
    //   .handleChange
    //   .bind(this);
    //   this.handleUpload = this.handleUpload.bind(this);
  }
  // handleChange = e => {
  //   if (e.target.files[0]) {
  //     const video = e.target.files[0];
  //     this.setState(() => ({video}));
  //   }
  // }
  handleUpload = () => {
      const uploadTask = storage.ref(`videos/${this.state.video.name}`).put(this.state.video); 
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState ({
          progress : progress
        })
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('videos')
        .child(this.state.video.name)
        .getDownloadURL()
        .then(url => {
            console.log(url);
            this.setState({url:url});

        })
    });
  }

  onChangeMaterial(e) {
    this.setState({
      material: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  video
  onChangevideo(e) {
    
    if(e.target.files[0]){
      this.setState({
        video : e.target.files[0]
      })
      console.log('video',e.target.files[0])
      
    }
   
  }

  // handleClick() {
  //   window.location = "/teachersM";
  // }
  onSubmit(e) {
    e.preventDefault();
    console.log("this is the id",queryString.parse(this.props.location.search));
    const courseId = queryString.parse(this.props.location.search);
    //declare an obj that holds all values after change
    const task = {
      title: this.state.title,
      material: this.state.material,
      description: this.state.description,
      video: this.state.url,
      courseId:courseId.id
    }
    console.log(task);
    const response = axios.post('http://localhost:8000/materials/add', task) //create?
    response.then(res => toast("Success ! New Lesson is added ", { type: "success" }));
    response.catch(res =>      toast("Something went wrong &#128531;", { type: "error" }))
    console.log(response.status);
  

    console.log(task);
    //window.location = '/teachersM'
  }



  
  render() {
    return (


       <div>
        <br />
        <div className = "container">
       
          <form className="text-center border border-light p-9" action="#!" onSubmit = {this.onSubmit} >
          <div className = "col">
                    <h1>Add video</h1>
                    <input 
                      type = "file" 
                      required="{true}"
                      className = "form-control" 
                      onChange = {this.onChangevideo}
                      />
                  </div>  
                  

                  <button onClick={this.handleUpload}>Upload</button>
                
                  <br />
                    <iframe title="myFrame" src={this.state.url} alt="firebase-video" width='600' height='400' ></iframe>

             

            <p className="h4 mb-4">matireal</p>

                <div className="col">
         
                <input 
                required="{true}"
                  type = "text" 
                  className = "form-control" 
                  value = {this.state.material}
                  onChange = {this.onChangeMaterial}
                  text-align = "center"
                  placeholder = "Insert Item Name"/>
                </div>

                <br />


                <br />

                <div className="col">
                <h1>Title  </h1>

                
                <input 
                required="{true}"
                  type = "text" 
                  className = "form-control" 
                  value = {this.state.title}
                  onChange = {this.onChangeTitle}
                  text-align = "center"
                  placeholder = "Insert Item Name"/>
                </div>
               

                <br />

                <div className = "col">
                  <h1>Description  </h1>
                  <input 
                    type = "text" 
                    required="{true}"
                    className = "form-control" 
                    value = {this.state.description} 
                    onChange = {this.onChangeDescription}
                    placeholder = "Please insert a description of your item and add its current condition"/>
                </div>

                <br />
                
                <div>
                <button type="submit" value = "Submit" className="btn btn-deep-orange darken-4">Submit</button>
                </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Form; 