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
        const imageMapper = ImagesArray.map((image) => {
            
            return (
                < div  key={image.id} style={{height :'100px',
                width :' 100px'}}>
                <img key={image.id}
                src={image.url}
                style={{width:"100px",height:"100px "}}
                 onClick={() => this.props.handelImageChange(image.url)}
                 height = '100px'
                 width = ' 48px'
                 alt="css"
                />
                </div>
            )
        })
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Change Picture
             </Button>
                <Modal title="Profile Pic Changer Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.hideModal}>
                    {imageMapper}
                    
                </Modal>
            </div>
        )
    }
}
