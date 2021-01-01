import React, {Component} from 'react';
import { storage } from './firebase';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { Form, Input, Button, Radio ,Select, } from 'antd';




class Addcorsecard extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.handleUpload = this.handleUpload.bind(this);



    this.state = {
      image: null,
      url: '',
      progress: 0,
      material: '',
      description: '',
      title: ''
    }
  }

  handleUpload = () => {
      const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image); 
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
        storage.ref('images')
        .child(this.state.image.name)
        .getDownloadURL()
        .then(url => {
            console.log(url);
            this.setState({url:url});

        })
    });
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
  image
  onChangeimage(e) {
    
    if(e.target.files[0]){
      this.setState({
        image : e.target.files[0]
      })
      console.log('image',e.target.files[0])
      
    }
   
  }

  onSubmit(e) {
    e.preventDefault();
    const task = {
      title: this.state.title,
      // material: this.state.material,
      Desceription: this.state.description,
      image: this.state.url,
      Name: this.state.name
    }
    console.log(task);
    axios.post('http://localhost:8000/teacher/addcard', task) //create?
      .then(res => console.log(res.data));
      console.log(res.data)
          window.location = '/teacher/card'
  }



  
  render() {
    return (


       <div>
        <br />
        <div className = "container">
       
          <form className="text-center border border-light p-9" action="#!" onSubmit = {this.onSubmit} >
          <div className = "col">
                    <h1>Add image</h1>
                    <input 
                      type = "file" 
                      required="true"
                      className = "form-control" 
                      onChange = {this.onChangeimage}
                      />
                  </div>  
                  

                  <button onClick={this.handleUpload}>Upload</button>
                
                  <br />
                    <iframe  src={this.state.url} alt="firebase-image" width='400' height='400' ></iframe>

             

            <p className="h4 mb-4">matireal</p>
                <br />


                <br />

                <div className="col">
                <h1>Title  </h1>

                <h1></h1>
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

export default Addcorsecard; 
 