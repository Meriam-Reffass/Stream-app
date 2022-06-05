import React, {useState, useEffect} from 'react';
import socketClient from "socket.io-client";
import { sendMessage,initiateSocket, fetchChannelMessages, broadcast } from "./fun";
let socket;
const SOCKET_URL = "http://localhost:8080";
socket = socketClient(SOCKET_URL);
const loc=window.location

function Chat(props){
  useEffect(()=>{
    
   initiateSocket()
  var list=document.getElementById('message-list') 
  var mes=document.getElementById('messages') 
  const video=document.createElement('video')
  video.className='vid'
  mes.appendChild(video)
  socket.on("NEW_MESSAGE", (data) => {
    if(data.idStream==props.id){
    const li = document.createElement('li');
    
  li.className = 'message';
   console.log(data)
   li.appendChild(document.createTextNode(data.message));
  list.appendChild(li)}
  });
  
 }, [])
 
// getmessages(list)

    // Met à jour le titre du document via l’API du navigateur
     
   
    const [input,setInput]=useState("");
 const [data,setData]=useState({idStream:props.id,message:input,username:""});
        
return(
<section class="livechat">
<h5>Viewers in chat: <span id="viewerCount">0</span></h5>

<div class="messages" id="messages">
  <ul id="message-list"></ul>
</div>

<form action='#' >
  <input type="text" id="chat-input" placeholder="Type away!" onChange={e=>setInput({input:e.target.value})}/>
 
 
 <button type="submit" className='c' value="chat" onClick={()=>{sendMessage(data)}} >button</button>
 </form>

</section>
)
}
export default Chat