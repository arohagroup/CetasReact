 import { NavLink } from "react-router-dom";
 import "./buttons2.css";
 function Buttons2(){
    return(
        <div className="btns2" style={{marginTop:"30px"}}>
             <NavLink to="/comp5">Risky Alerts</NavLink>

             <NavLink to="*">Incedents</NavLink>

             <NavLink to="*">Alerts</NavLink>
             <NavLink to="*">KPI METRICS</NavLink>
                 <NavLink to="*">THREAT CATEGORIES</NavLink>
                   <NavLink to="*">PREDICTION</NavLink>

        </div>
   
)




 }
 export default Buttons2