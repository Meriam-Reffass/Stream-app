import { useNavigate } from "react-router-dom"
const Admin=()=>{
    const navigate=useNavigate()
    return(
        <>
        <button onClick={()=>{navigate("/adminTour", { replace: true });}}>Create new tournoi</button>
        </>
    )
}
export default Admin