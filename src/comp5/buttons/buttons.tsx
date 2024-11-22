

import { NavLink } from 'react-router-dom';
import "./buttons.css"
function Buttons() {

  return (
 
        <div className="toolbar1">
            <NavLink to={"/dataops"} >insights</NavLink> 
            <div><input className="searcher" type="text" placeholder="search" style={{marginLeft:"600px"}} /></div>   
        </div>
  )
}

export default Buttons