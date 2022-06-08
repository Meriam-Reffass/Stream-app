import { useEffect } from "react"
import axios from "axios"
import './Stream.css'
import img2 from './images/background.jpg'
const StartStream=()=>{
         let item=JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{
   
       
        (async()=>{
             const data=await axios.post("http://localhost:5000",{username:item.username})
            const h1=document.createElement('h4')

            const h=document.createElement('h4')
            h.className='h4'
            h1.className='h4'
            h1.innerText=data.data.IngestServerUrl
            console.log(h1.innerText)
            h.innerText=data.data.streamKey
            const div=document.getElementById("div")
            const div2=document.createElement("div")
            div2.className="rtmp"
            div.appendChild(div2)
            div2.appendChild(h1)
            div2.appendChild(h)}) ()
           
  
    })
    return(
       
       <div className="mine">
            <div id="div">
    <h1 className="h1">your stream info </h1>
    </div>
        </div>
        )
}
export default StartStream
