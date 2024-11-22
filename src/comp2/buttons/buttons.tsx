
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./buttons.css"
function Buttons() {
    var navigate =useNavigate();
  return (
 
        <div className="toolbar1">
            
             <NavLink to={"/dataops"} >DATA-OPS</NavLink>
          
            
              <NavLink to={"/datatrend"}>DATA TREND</NavLink>
              
              <NavLink to={"/dataqualityscan"}>DATA QUALITY SCAN</NavLink>
            
            <NavLink to={"/dataqualityrules"}>DATA QUALITY RULES</NavLink>

            <NavLink to={"/dataqualityalerts"}>DATA QUALITY ALERTS</NavLink>
                    
        </div>
  )
}

export default Buttons