import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Modal, Button } from 'antd';
import { ImagesArray } from './images';
import axios from 'axios';

/************************************************ */
export default class ProfilePicChanger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            ImagesArray,
            image:""
            // images:[props.pic1, props.pic2, props.pic4, props.pic5, props.pic6]
        }
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    hideModal = (e) => {
        console.log(e)
        this.setState({
            visible: false,
        });
    };
    // handelClick=()=>{
    //     axios.put("http://localhost:8000/user/pic/" + this.state.id, this.image)
    //     .then()
    //        console.log("image changed") 
        // axios.get("http://localhost:8000/user/account/" + this.state.id)
        //    .then(res => {
        //        console.log(res.data)
        //        this.setState({ 
        //            name: res.data.userName,
        //            age: res.data.age,
        //            img: res.data.image
        //         })
        //    })
        //    .catch((error) => {
        //        console.log(error);
        //    });


    render() {
        console.log(ImagesArray);
        const imageMapper = ImagesArray.map((image, index) => {
            return (
                <img src={image.url}
                 onClick={() => this.props.handelImageChange(image.url)}
                 height="48px"
                />
            )
        })
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
             </Button>
                <Modal title="Profile Pic Changer Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.hideModal}>
                    {imageMapper}
                    {/* <button onClik={this.handelClick()}>save</button> */}
                </Modal>
            </div>
        )
    }
}
