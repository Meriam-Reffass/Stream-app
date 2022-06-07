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

 const submitHandler=async()=>{
  console.log("ok")
const data= await axios.post("http://localhost:5001/login",{
  email:email,password:password
})

console.log(localStorage)
    if(data.data.user){
      localStorage.setItem("user",JSON.stringify(data.data.user))
      console.log(localStorage)
      console.log("user exists")
        setUser(data.data.user.username)
        navigate("/", { replace: true })
    }else{
        window.alert(data.data.message)
    }
}

    return(<div className="App">
   <Form className="form">
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
  </Form>
   

   
</div>)
}
export default SignIn