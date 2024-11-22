 import { NavLink } from "react-router-dom";
 import "./buttons2.css";
 function Buttons2(){
    return(
        <div className="btns2" style={{marginTop:"30px",border:"1px solid white"}}>
             <NavLink to="/comp5">identity 360</NavLink>
             <NavLink to="*">Analytics</NavLink>
             <NavLink to="*">Attributes</NavLink>
             <NavLink to="*">Threat Intelligence</NavLink>
              <NavLink to="*">Peer Groups</NavLink>
                   <NavLink to="*">Notifications</NavLink>
                   <NavLink to="*">Active Ingestion</NavLink>
                   <NavLink to="*">User Ingestion</NavLink>
                   <NavLink to="*">Data Sources</NavLink>
        </div>
   
)




 }
 export default Buttons2