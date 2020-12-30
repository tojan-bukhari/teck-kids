import React, {Component} from 'react';
import {storage} from './firebace';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onChangeMaterial = this.onChangeMaterial.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      video: null,
      url: '',
      progress: 0,
      material: '',
      description: '',
      title: ''
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const video = e.target.files[0];
      this.setState(() => ({video}));
    }
  }
  handleUpload = () => {
      const {video} = this.state;
      const uploadTask = storage.ref(`videos/${video.name}`).put(video); 
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('videos').child(video.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
            console.log("video: ", video);

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

  handleClick() {
    window.location = "/teachersM";
  }
  onSubmit(e) {
    e.preventDefault();
    //declare an obj that holds all values after change
    const task = {
      title: this.state.title,
      material: this.state.material,
      description: this.state.description,
    }
    console.log(task);
    axios.post('http://localhost:8000/materials/add', task) //create?
      .then(res => console.log(res.data));

    this.setState({
      title: '',
      material: '',
      description: ''
    });
  }



  
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (

      <div style={style}>
         <h3 className="font-weight-bold deep-purple-text">Create Your Lesson</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="deep-purple-text">Material: </label>
            <input style={{ fontFamily: "Courier" }} 
              type="text"
              required
              className="form-control"
              value={this.state.material}
              onChange={this.onChangeMaterial}
            />
          </div>
          <div className="form-group" width="100">
          <label className="deep-purple-text">Description: </label>
          <input style={{fontFamily:"Courier"}} 
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
          <label className="deep-purple-text" >Title </label>
          <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group"> <pre>
          <input type="submit" value="Create" className="btn btn-primary btn btn-outline-#4a148c purple darken-4" />     
           <button onClick={this.handleClick.bind(this)} className="btn btn-primary">show your matierial</button></pre>
          </div>
        </form>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <iframe  src={this.state.url} alt="firebase-video" width='600' height='400' ></iframe>

      </div>
    )
  }
}

export default Form; 