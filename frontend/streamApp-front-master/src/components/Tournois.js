import axios from "axios"
import { useEffect } from "react"
import "./Tournois.css"
import img1 from ".././images/GAMES.jpg"
const Tournois=()=>{
    
    let item=JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{
        (async()=>{
 const data=await axios.get("http://localhost:5002/tournois")
    console.log(data.data)
    
    for(var i=0;i<data.data.length;i++){
        let div=document.getElementById('div')
        let divChild=document.createElement('div')
        let btn= document.createElement('button')
        btn.className="btn"
        btn.textContent="Participer"
          console.log(data.data[i].name)
  
    
        divChild.className="card"
        let img=document.createElement('img')
        img.src=img1
        img.className="card-img-top"
        divChild.appendChild(img)
        let h2=document.createElement('h2')
        let p=document.createElement('p')
        console.log(divChild)
        h2.innerText=data.data[i].name
        p.innerText=data.data[i].description
        divChild.appendChild(h2)
        divChild.appendChild(p)
        div.appendChild(divChild)
        divChild.appendChild(btn)
               
        btn.onclick=async()=>{
        
         console.log(h2.innerText)
       const sal=await axios.post("http://localhost:5002/update",{
           username: item.username,
           name:h2.innerText
         })
         btn.textContent="You've participated!";
   }
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