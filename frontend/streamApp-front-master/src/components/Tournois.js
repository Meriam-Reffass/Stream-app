import axios from "axios"
import { useEffect } from "react"
import "./Tournois.css"
const Tournois=()=>{
    useEffect(()=>{
        (async()=>{
 const data=await axios.get("http://localhost:5000/tournois")
    console.log(data.data)
    
    for(var i=0;i<data.data.length;i++){
        let divChild=document.createElement('div')
        let divg=document.createElement('div')
        let div=document.getElementById('div')
        div.appendChild(divg)
        divg.className="grid"
        divChild.className="card"
        let img=document.createElement('img')
        img.src="./images/logo192.png"
        img.className="card-img-top"
        divChild.appendChild(img)
        let h2=document.createElement('h2')
        let p=document.createElement('p')
        console.log(divChild)
        h2.innerText=data.data[i].name
        p.innerText=data.data[i].description
        divChild.appendChild(h2)
        divChild.appendChild(p)
        divg.appendChild(divChild)
        
        
    }
        }) ()
    })
   
return(
    <>         

                  <div className="item" id="div">
                  </div>
                 
    </>
)
}
export default Tournois