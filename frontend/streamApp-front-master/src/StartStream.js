import { useEffect } from "react"
import axios from "axios"

const StartStream=()=>{
         let item=JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{
   
       
        (async()=>{
             const data=await axios.post("http://localhost:5000",{username:item.username})
            const h1=document.createElement('h1')

            const h=document.createElement('h1')
            h1.innerText=data.data.IngestServerUrl
            h.innerText=data.data.streamKey
            const div=document.getElementById("div")
            div.appendChild(h1)
            div.appendChild(h)}) ()
           
  
    })
    return(<>
    <h1>your stream info </h1>
    </>)
}
export default StartStream