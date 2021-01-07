import React, { Component } from 'react';
import { storage } from './firebase';
import axios from 'axios';
import {Form , Button} from 'react-bootstrap'

class Addcorsecard extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.state = {
      image: null,
      url: '',
      progress: 0,
      material: '',
      description: '',
      title: '',
      price: 0,
      name:localStorage.getItem("Name")
    }
  }
  // this function will handele firebase
  handleUpload = () => {
    const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
    uploadTask.on('state_changed',
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({
          progress: progress
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
            this.setState({ url: url });

          })
      });
  }
  ////////////////////////////// HANDEL STATE//////////////////////
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
  onChangeimage(e) {

    if (e.target.files[0]) {
      this.setState({
        image: e.target.files[0]
      })
      console.log('image', e.target.files[0])

    }

  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }
  ////////////////////////////// HANDEL STATE//////////////////////
  onSubmit(e) {
    e.preventDefault();
    const task = {
      Title: this.state.title,
      Desceription: this.state.description,
      image: this.state.url,
      Name: this.state.name,
      price: this.state.price
    }
    console.log(task);
    axios.post('http://localhost:8000/teacher/addcard', task) //create?
    .then(res => console.log(res.data));
    // console.log(res.data)
    window.location = '/teacher/card'
  }

  render() {
    return (
      <div 
      style={{
          padding: '10px',
          width: '600px',
          border: '4px solid #080600',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          border: '1px solid',
          padding: '70px',
          boxShadow: '5px 10px 10px #888888' ,
          margin:'auto'
                      
      }}>
       <Form>
              <Form.Group>
                <Form.File id="exampleFormControlimage" label="Add image" onChange={this.onChangeimage} />
                <iframe  title="myFrame" src={this.state.url} alt="firebase-image" width='400' height='400' ></iframe><br/><br/>
                <Button onClick={this.handleUpload}>Upload</Button>
              </Form.Group> 
              <Form.Group controlId='formBasiccourseTitel'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Enter the course titel' onChange={this.onChangeTitle} />
              </Form.Group>
              <Form.Group controlId='formBasicDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control size="lg" type='text' placeholder='course Description' onChange={this.onChangeDescription} />
              </Form.Group>
              <Form.Group controlId='formBasicPrice'>
              <Form.Label>Price</Form.Label>
              <Form.Control type='number' onChange={this.onChangePrice} />
              </Form.Group>
              <Button variant='primary' type='submit' onClick={this.onSubmit}>
                Submit
              </Button>
            </Form>
      </div>
    )
  }
}

export default Addcorsecard;