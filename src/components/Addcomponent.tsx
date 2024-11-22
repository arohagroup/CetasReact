import Buttons1 from './buttons1';
import { useNavigate } from 'react-router-dom'
function Addcomponent() {
  var navigate = useNavigate();
  return (
    <div style={{marginLeft:"50px"}}>
         <Buttons1/>
       <h1 style={{width:"500px",height:"200px", backgroundColor:"red", textAlign:"center"}}>Addcomponent</h1> 
    </div>
  )
}

export default Addcomponent