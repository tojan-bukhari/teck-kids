import SocketIO from "socket.io-client";

const socket = SocketIO("http://localhost:8000");

export default socket;