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
import * as uuid from 'uuid'
const Signup=()=>{
    const [id,setId]=useState("")
    const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const [user,setUser]=useState({id:"",eamil:"",password:""})
const navigate =useNavigate();
const submitHandler=async()=>{
  await setId(uuid.v4())
  console.log({
    userId:id,
    name:name.name,
    email:email.email,
    username:username.username,
    password:password.password
})
   
    const data= await axios.post("http://localhost:5001/register",{
        userId:id,
        name:name.name,
        email:email.email,
        username:username.username,
        password:password.password
    })
 
    
    if(data.status==200){
      console.log("user registred")
      window.alert("user registred")
    }else{
        window.alert("something went wrong")
    }
}

return(
    <div className="signdiv">
      <Form className="form">
       <h2>Sign Up</h2>
       <FormGroup>
        <Label for="exampleEmail">name</Label>
        <Input
          type="name"
          name="name"
          id="exampleEmail"
          placeholder="name"
          onChange={e=>setName({name:e.target.value})}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">username</Label>
        <Input
          type="username"
          name="username"
          id="exampleEmail"
          placeholder="username"
          onChange={e=>setUsername({username:e.target.value})}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="example@example.com"
          onChange={e=>setEmail({email:e.target.value})}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="********"
          onChange={e=>setPassword({password:e.target.value})}
        />
      </FormGroup>
    <Button onClick={submitHandler}>Submit</Button>
  </Form>
    </div>
)
}
export default Signup