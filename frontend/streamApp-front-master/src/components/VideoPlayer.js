import React, { useEffect, useState } from "react";
import axios from 'axios'
// Styles
import "./VideoPlayer.css";
import Chat from '../Chat'
import Stream from "../stream";
const VideoPlayer =(props) => {
  // add the ivs player script to the page
  const script = document.createElement("script");
  script.src = "https://player.live-video.net/1.0.0/amazon-ivs-player.min.js";
  script.async = true;
  document.body.appendChild(script);
  const [data,setData]=useState({url:'',id:''})
  // let playbackUrl ="https://b163dcb14227.us-east-1.playback.live-video.net/api/video/v1/us-east-1.334424422278.channel.Cm9zns7c8C4P.m3u8"
  useEffect(async() => {
    const MediaPlayerPackage = window.IVSPlayer;
    let channel=await axios.get("http://localhost:5000/channels")
   let channels=channel.data
    let playbackURLS=[]
    console.log(channels)
    for(const item in channels){
    let data = await axios.post("http://localhost:5000/stream",{channelArn:item})
    console.log(data)
      playbackURLS.push(data.data.stream.playbackUrl)
      console.log(data.data.stream.playbackUrl)

      var div=document.getElementById('div') 
      const video=document.createElement('video')
      const h=document.createElement('h1')
      h.nodeValue="ok"
      video.className='vid'
      video.onclick=()=>{
        setData({url:data.data.stream.playbackUrl,id:data.data.stream.streamId})
      }
      div.appendChild(video)
    
    
    // First, check if the browser supports the Amazon IVS player.
    if (!MediaPlayerPackage.isPlayerSupported) {
      console.warn(
        "The current browser does not support the Amazon IVS player."
      );
      return;
    }

    const PlayerState = MediaPlayerPackage.PlayerState;
    const PlayerEventType = MediaPlayerPackage.PlayerEventType;

    // Initialize player
    const player = MediaPlayerPackage.create();
    player.attachHTMLVideoElement(document.getElementsByClassName("vid"));

    // Attach event listeners
    player.addEventListener(PlayerState.PLAYING, () => {
      console.info("Player State - PLAYING");
    });
    player.addEventListener(PlayerState.ENDED, () => {
      console.info("Player State - ENDED");
    });
    player.addEventListener(PlayerState.READY, () => {
      console.info("Player State - READY");
    });
    player.addEventListener(PlayerEventType.ERROR, (err) => {
      console.warn("Player Event - ERROR:", err);
    });

    // Setup stream and play
    player.setAutoplay(true);
    player.load(data.data.stream.playbackUrl);

    player.setVolume(1);
    player.play()} 
  }, []); // eslint-disable-line

  return (
    <div className="player-wrapper">
         {(data.url!="")?(
       <>
        {/* <Stream url={data.url}/> */}
        <Stream />
        <Chat id={data.id} username={props.username}/></>
):(
  <div id="div" className="aspect-169 pos-relative full-width full-height">
       
      </div>
 
)
      }
      
    </div>
  );
};

export default VideoPlayer;