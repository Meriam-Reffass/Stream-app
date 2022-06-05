import './sign.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import VideoPlayer from './components/VideoPlayer';

const SignIn=()=>{
    const config= {
        headers :{
    "Content-type":"application/json"
}}
const [id,setId]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [user,setUser]=useState("")
const navigate =useNavigate();
const stream=async(username)=>{
  const data=await axios.post("http://localhost:5000",{username:username})
  const h1=document.createElement('h1')
  const h=document.createElement('h1')
  h1.innerText=data.data.IngestServerUrl
  h.innerText=data.data.streamKey
  const div=document.getElementById("div")
  div.appendChild(h1)
  div.appendChild(h)

 }
 const submitHandler=async()=>{
  console.log("ok")
const data= await axios.post("http://localhost:5001/login",{
  email:email,password:password
})
console.log("ok")
    if(data.data.user){
      console.log("user exists")
        setUser(data.data.user.username)
    }else{
        window.alert(data.data.message)
    }
}

    return(<div className="App">
   {(!user)?( <Form className="form">
       <h2>Sign In</h2>
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="example@example.com"
          onChange={e=>setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="********"
          onChange={e=>setPassword(e.target.value)}
        />
      </FormGroup>
    <Button onClick={submitHandler}>Submit</Button>
  </Form>):(
    <>
    <Button onClick={()=>stream(user)}>Stream</Button>
    <div id="div"></div>
    <VideoPlayer /></>
  )}
   
</div>)
}
export default SignIn