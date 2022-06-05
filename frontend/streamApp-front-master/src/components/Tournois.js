import axios from "axios"
import { useEffect } from "react"
const Tournois=()=>{
    useEffect(()=>{
        (async()=>{
 const data=await axios.get("http://localhost:5000/tournois")
    console.log(data.data)
    for(var i=0;i<data.data.length;i++){
        let div=document.getElementById('div')
        
        let divChild=document.createElement('div')
        let h2=document.createElement('h2')
        let p=document.createElement('p')
        h2.innerText=data.data[i].name
        p.innerText=data.data[i].description
        divChild.appendChild(h2)
        divChild.appendChild(p)
        console.log(divChild)
        div.appendChild(divChild)
    }
        }) ()
    })
   
return(
    <>
    <div  id="div">

    </div></>
)
}
export default Tournois