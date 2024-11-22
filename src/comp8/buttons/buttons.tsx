

import { NavLink } from 'react-router-dom';
import "./buttons.css"
function Buttons() {

  return (
 
        <div className="toolbar1">
            <NavLink to={"/dataops"} >ROLES</NavLink> 
            <div><input className="searcher" type="text" placeholder="search By Role" style={{marginLeft:"600px",padding:"5px"}} /></div>
             <div style={{backgroundColor:"#0aadc8",padding:"4px",width:"20px",height:"20px",marginTop:"8px"}}>0</div>
        </div>
  )
}

export default Buttons