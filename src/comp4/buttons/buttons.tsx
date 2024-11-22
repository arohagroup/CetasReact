
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./buttons.css"
function Buttons() {
    var navigate =useNavigate();
  return (
 
        <div className="toolbar1">
            
             <NavLink to={"/dataops"} >MODEL X</NavLink>
          
            
              <NavLink to={"/datatrend"}>MODEL COVERAGE</NavLink>
              
              
                    
        </div>
  )
}

export default Buttons