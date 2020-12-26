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

    handleOk = async (e) => {
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
   

    render() {
        const imageMapper = ImagesArray.map((image, index) => {
            return (
                <img src={image.url}
                style={{width:"100px",height:"100px "}}
                key={index}
                 onClick={() => this.props.handelImageChange(image.url)}
                 
                />
            )
        })
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Change Picture
             </Button>
                <Modal title="Profile Pic Changer Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.hideModal}>
                    {imageMapper}
                    {/* <button onClik={this.handelClick()}>save</button> */}
                </Modal>
            </div>
        )
    }
}
