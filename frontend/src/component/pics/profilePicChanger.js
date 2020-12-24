import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Modal, Button } from 'antd';
import { ImagesArray } from './images';

/************************************************ */
export default class ProfilePicChanger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            images:[props.pic1, props.pic2, props.pic4, props.pic5, props.pic6]
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

    render() {
        console.log(ImagesArray);
        const imageMapper = ImagesArray.map((image, index)=>{
            return (
                <img src={image.url}
                  onClick={()=>this.props.handelImageChange(image.url)}
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
                </Modal>
            </div>
        )
    }
}
