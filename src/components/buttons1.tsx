
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./toolbar.css"
function Buttons1() {
    var navigate =useNavigate();
  return (

    <div className="toolbar">
    <NavLink to={"/"}>SOC Dashboard</NavLink>            
    <NavLink to={"/Riskdashboard"}>Risk Dashboard</NavLink>   
    <NavLink to={"/Cisodashboard"}>CISO Dashboard</NavLink>     
    <NavLink to={"/Identity360dashboard"}>identity 360 Dashboard</NavLink>
    <NavLink to={"/Threathunting"}>ThreatHunting</NavLink>
    <NavLink to={"/Systemhealthdashboard"}>System Health Dashboard</NavLink>
    <NavLink to={"/Customizeddashboard"}>Customized Dashboard</NavLink>
    <NavLink to={"/Addcomponent"}>+</NavLink>       
    </div> 


  )
}

export default Buttons1