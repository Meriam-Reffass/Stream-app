import io from "socket.io-client";
import axios from "axios";
let socket;
const SOCKET_URL = "http://localhost:8080";
export const initiateSocket =()=> {
    socket = io.connect(SOCKET_URL);
    console.log(socket); 
}  
export const broadcast=(list)=>{
  socket.on("NEW_MESSAGE", ({id,data}) => {
    const li = document.createElement('li');
    
  li.className = 'message';
   console.log(data)
   li.appendChild(document.createTextNode(data));
  list.appendChild(li)
  });
}
export const sendMessage =(data)=> {

        if (!socket) {
          return;
        }else{
       
        socket.emit("MESSAGE_SEND",data);
        console.log('message send')
}
       };
export const fetchChannelMessages = async () => {
        const response = await axios.get(
          `${SOCKET_URL}/streams/messages`
        );
       
        return response.data.allMessages;
       };