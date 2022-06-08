import axios from "axios"
import { useEffect, useState } from "react"
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

function Participer(){

const [tournamentname, setTournamentname]=useState("")
const [username,setUsername]=useState("")

  const part=async()=>{
   console.log(tournamentname)
    await axios.post("http://localhost:5002/update",{
      username: username,
      name: tournamentname
    })

  }

  return(
    <div>
      <Form.Group className="mb-3" id="username">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" required id="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value )}/>
              </Form.Group>
            
              <Form.Group className="mb-3" id="Tournamentname">
                <Form.Label>Tournamentname</Form.Label>
                <Form.Control type="text" required id="Tournamentname" name="Tournamentname" placeholder="Name of tournament" onChange={(e) => setTournamentname(e.target.value )} />
              </Form.Group>
      <button onClick={()=>{part()} } >Participer</button>
    </div>
  )
}
export default Participer