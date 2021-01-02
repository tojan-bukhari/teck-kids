import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import './Chat.css';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './messages.js';
import TextContainer from './TextContainer/TextContainer';
//
//
let socket;
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:8000';
    useEffect(() => {
      const { name, room } = queryString.parse(location.search);
      socket = io(ENDPOINT);
      setRoom(room);
      setName(name)
      socket.emit('join', { name, room }, (error) => {
        if(error) {
          alert(error);
        }
      });
    }, [ENDPOINT, location.search]);
    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  console.log(message,messages)
    return(
      <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />    
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          {/* <TextContainer users={users}/> */}
           </div>
    </div>
    )
}
//
export default Chat;





