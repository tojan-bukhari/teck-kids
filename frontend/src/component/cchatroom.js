import React,{Component} from 'react'
import ReactDom from 'react-dom'
import openSocket from 'socket.io-client';

import axios from 'axios'
const socket =openSocket('/')

//
class Chat extends Component{
    constructor(){
        super()
    }
    componentDidMount(){

        socket.on("sendMessage" ,(data)=>{
            console.log(socket)

            console.log(data)

        })
        axios.post('/getMessage',{data:"helloworld"})

    }

    render(){
        return(
            <div>
                <h3>
                    chatroommmmmmmmmmmmmmmmmmmmm
                </h3>
            </div>
        )
    }
}

export default Chat