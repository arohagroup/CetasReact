 import { NavLink } from "react-router-dom";
 import "./buttons2.css";
 function Buttons2(){
    return(
     <div>
        <div className="btns2" style={{marginTop:"30px",border:"1px solid white"}}>
             <NavLink to="/comp7">User Types</NavLink>
             <NavLink to="*">Entitlements</NavLink>
             <NavLink to="*">Access Outliers</NavLink>
        </div>
        <div className="btns3" style={{marginTop:"30px"}}>
        <NavLink to="/comp7">Service</NavLink>
        <NavLink to="*">Previlaged</NavLink>
        <NavLink to="*">Flight Risk</NavLink>
        <NavLink to="*">Dormant</NavLink>
        <NavLink to="*">new user</NavLink>
        <NavLink to="*">external</NavLink>
        <NavLink to="*">disabled</NavLink>
        <NavLink to="*">discovered</NavLink>
        <NavLink to="*">Watchlist</NavLink>
   </div>
   </div>
)




 }
 export default Buttons2