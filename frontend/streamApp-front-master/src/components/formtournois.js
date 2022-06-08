import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';
import axios from 'axios'

function Formtournois() {
  
  const [tournois,setTournois]= useState({
    name: "",
    date: "",
    time: "",
    description: "",
  });
    
        axios.get('http://localhost:5002/tournois')
            .then(response => {
                console.log(response.data)
            });
  function updateTourn(value){
    return setTournois((prev)=>{
      return { ...prev, ...value};
    })
  }
  async function onSubmit(e){
    e.preventDefault();
    const newTournois= {...tournois};
    await fetch("http://localhost:5002/tournois", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTournois),
      
    }).then(()=>{window.alert("successfully created!!")})
    .catch(error => {
      window.alert(error);
      return;
    });
    setTournois({name: "",
    date: "",
    time: "",
    description: "",})
  }

            return (
                <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" required id="name" name="name" value={tournois.name} onChange={(e) => updateTourn({ name: e.target.value })} placeholder="Name of tournament" />
              </Form.Group>
            
              <Form.Group className="mb-3" id="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" required id="date" name="date" value={tournois.date} onChange={(e) => updateTourn({ date: e.target.value })} placeholder="yyyy-mm-dd :hh:mm" />
              </Form.Group>
              <Form.Group className="mb-3" id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" id="description" name="description" value={tournois.description} onChange={(e) => updateTourn({ description: e.target.value })}  placeholder="Description..." />
              </Form.Group>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Form>
              );
        }
    


export default Formtournois;