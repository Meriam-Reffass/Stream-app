import io from "socket.io-client";
import axios from 'axios';
import Chat from "./Chat";
import React, { useEffect, useState } from "react";


function Stream(props) {
    useEffect(() => {
        const MediaPlayerPackage = window.IVSPlayer;
    
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
        player.attachHTMLVideoElement(document.getElementById("video-player"));
    
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
        player.load(props.url);
        player.setVolume(0.5);
      }, []); // eslint-disable-line
      
    return(
        <div className="player-wrapper">
      <div className="aspect-169 pos-relative full-width full-height">
        <video controls
          id="video-player"
          className="video-elem pos-absolute full-width"
          playsInline
          muted
        ></video>
        
      </div>
    </div>

    )
   
  }
  
  export default Stream;
  