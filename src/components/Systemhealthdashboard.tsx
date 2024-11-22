import Buttons1 from "./buttons1";
import { useNavigate } from "react-router-dom"
function Systemhealthdashboard() {
  var navigate=useNavigate();

  return (
  <div style={{marginLeft:"50px"}}>
    <Buttons1/>
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"30px",marginTop:"10px"}}>
      
    <div className="disp1">
      <div style={{borderBottom:"3px solid #2c4255",padding:"10px"}}>DISK UTILIZATION</div>
      <div style={{width:"300px",height:"240px",marginTop:"10px",borderRadius:"30px"}}>
      <div id="wrapper">
    
    <div className="profile-main-loader">
      <div className="loader">
        <svg className="circular-loader"viewBox="25 25 50 50" >
          <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#c3c9c0" stroke-width="2" />
        </svg>
      </div>
    </div>
        
    </div>
    
  
      </div>
    </div>



    <div className="disp2">
      <div style={{borderBottom:"3px solid #2c4255",padding:"10px"}}>MEMORY UTILIZATION</div>
      <div style={{width:"300px",height:"240px",marginTop:"10px",borderRadius:"30px"}}>
      <div id="wrapper">
    
    <div className="profile-main-loader">
      <div className="loader">
        <svg className="circular-loader"viewBox="25 25 50 50" >
          <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#c3c9c0" stroke-width="2" />
        </svg>
      </div>
    </div>
        
    </div>
    
  
      </div>
    </div>


   
    <div className="disp3">
      <div style={{borderBottom:"3px solid #2c4255",padding:"10px"}}>CPU UTILIZATION</div>
      <div style={{width:"300px",height:"240px",marginTop:"10px",borderRadius:"30px"}}>
      <div id="wrapper">
    
    <div className="profile-main-loader">
      <div className="loader">
        <svg className="circular-loader"viewBox="25 25 50 50" >
          <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#c3c9c0" stroke-width="2" />
        </svg>
      </div>
    </div>
        
    </div>
    
  
      </div>
    </div> 


    
    <div className="disp4">
      <div style={{borderBottom:"3px solid #2c4255",padding:"10px"}}>COMPONENTS</div>
      <div style={{width:"300px",height:"240px",marginTop:"10px",borderRadius:"30px"}}>
      <div id="wrapper">
    
    <div className="profile-main-loader">
      <div className="loader">
        <svg className="circular-loader"viewBox="25 25 50 50" >
          <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#c3c9c0" stroke-width="2" />
        </svg>
      </div>
    </div>
        
    </div>
    
  
      </div>
    </div>


    </div>
    
</div>
  )
}

export default Systemhealthdashboard