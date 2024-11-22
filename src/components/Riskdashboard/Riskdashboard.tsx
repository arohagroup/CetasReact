import user from "../../images/TimelineIcons/USER.svg";
import host from "../../images/TimelineIcons/HOST.svg";
import ip from "../../images/TimelineIcons/IP.svg";
import grey from "../../images/cetas_Gray_logo.svg";
import "./Riskdashboard.css";
import { useNavigate } from "react-router-dom";
import Buttons1 from "../buttons1";
function Riskdashboard() {
  var navigate=useNavigate();
  return (
    <div style={{marginLeft:"50px"}}>
     <Buttons1/>
     <div className="sub1"style={{ display:"flex",gap:"1rem",marginTop:"10px"}}>
     
     <div className="separatordiv">
     <div  style={{borderBottom:"3px solid #2c4255",padding:"3px",marginBottom:"5px"}}>USERS WITH MOST ALERTS</div>
     <div  style={{zIndex:"-1",overflow:"auto",width:"300px",height:"400px",backgroundColor:"#0d1726",borderRadius:"30px"}}>
        <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"1px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>amctest0074 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>53</div>
       </div>


       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>tara-909089</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>39</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>abhishek-2897329873</div>
        <div style={{fontSize:"40px"}}>37</div>
       </div>


       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>test-0908978</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>33</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>ravi01</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>24</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>rithvi01</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>23</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>rs28732</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>22</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>rarity_entity9</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>21</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>bdin78 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>20</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={user} width={50} height={50} />
        <div style={{marginTop:"10px"}}>john_hazelwood9</div>
        <div style={{fontSize:"40px"}}>20</div>
       </div>
       
     </div>

     </div>


     <div className="separatordiv">
     <div  style={{borderBottom:"3px solid #2c4255",padding:"3px",marginBottom:"5px"}}>USERS WITH MOST ALERTS</div>
     <div  style={{zIndex:"-1",overflow:"auto",width:"300px",height:"400px",backgroundColor:"#0d1726",borderRadius:"30px"}}>
        <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"1px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>210.82.88.118</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>15</div>
       </div>


       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>10.151.64.152 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>11</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>104.207.83.63 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>7</div>
       </div>


       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>10.82.88.118</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>7</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>192.111.3.230</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>6</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>192.111.2.230</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>6</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>192.111.1.230 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>6</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>152.168.1.212 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>5</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>152.168.2.201</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>5</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={ip} width={50} height={50} />
        <div style={{marginTop:"10px"}}>192.168.1.230 </div>
        <div style={{fontSize:"40px"}}>5</div>
       </div>
       
     </div>

     </div>


     <div className="separatordiv">
     <div  style={{borderBottom:"3px solid #2c4255",padding:"3px",marginBottom:"5px"}}>USERS WITH MOST ALERTS</div>
     <div  style={{zIndex:"-1",overflow:"auto",width:"300px",height:"400px",backgroundColor:"#0d1726",borderRadius:"30px"}}>
        <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"1px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>PC-avi01  </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>24</div>
       </div>


       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>PC-rithvi01</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>22</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>PC-inci02</div>
        <div style={{fontSize:"40px"}}>17</div>
       </div>


       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>AB-klick02 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>9</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>LAP1 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>8</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>AMC1-DESK1 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>7</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>DK-2908904 </div>
        <div style={{fontSize:"40px", textAlign:"center"}}>7</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>CETAS-DESK1</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>7</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>DK-2329874</div>
        <div style={{fontSize:"40px", textAlign:"center"}}>7</div>
       </div>

       <div style={{display:"grid",padding:'15px',fontSize:"1rem",gridTemplateColumns:"auto auto auto",gap:"2px"}}>
        <img src={host} width={50} height={50} />
        <div style={{marginTop:"10px"}}>jDK-2972987 </div>
        <div style={{fontSize:"40px"}}>7</div>
       </div>
       
     </div>

     </div>

</div>

<div className="sub2" style={{display:'flex',gap:"30px"}}>
  <div className="Notifications" >
        <div style={{textTransform:"uppercase",borderBottom:"3px solid #2c4255",padding:"10px"}}>Notifications</div>
        <svg width={350} height={440} viewBox="0 0 350 440" style={{padding:"10px"}}>
          <rect width={350} height={440} fill="none" opacity={1} rx={20} ry={20}></rect>
          <image href={grey} opacity={0.4} width={70} height={70} x={130} y={150}></image>
          <text fill="lightgrey" opacity={0.4} x={110} y={250}>No Notifications</text>
        </svg>
  </div>

    <div>
      <div style={{borderBottom:"3px solid #2c4255",padding:"10px"}}>RISK BY LOCATION</div>
      <div style={{width:"200px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
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


   <div >
    <div style={{borderBottom:"3px solid #2c4255",padding:"10px"}}>RISK BY DATASET</div>
    <div style={{overflow:"auto",width:"280px",height:"420px",backgroundColor:"#0d1726",padding:"10px",borderRadius:"30px",marginTop:"10px"}}>
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Windows AD Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>298</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Okta Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>273</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>VPN Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>43</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Sophos Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>39</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>AWS_Cloudtrail Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>32</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>HealthCareClaim Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>20</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>SIEMENS Data</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>18</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Palo Alto traffic Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>16</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}> Cloudera Data</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>14</div>
      </div>
      <hr />

      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}> Symantec Data</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>14</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>CreditCard Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>10</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>PAM Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>10</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Zscaler Activty</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>7</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Teradata-CSR</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>7</div>
      </div>
      <hr />

      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Ping Data</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>7</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>CrowdStrike Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>5</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Qualys</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>5</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Centrify Data</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>5</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Duo Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>4</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Demo Test Data</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>4</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>O365 Message Trace</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>4</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Beyond Trust</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>4</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Azure AD Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>4</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Okta RT</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>4</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>AMC</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>3</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>AMC testing</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>3</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Net Banking</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>3</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>O365 Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>3</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Oracle Data</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>3</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}> SailPoint Data </div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>2</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Palo Alto VPN Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>2</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>AWS Cloudfront Logs</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>2</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Web Interface Portal</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>2</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>TeraData-2</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>2</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>AWS Cloudtrail</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>1</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Salesforce Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>1</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Application Logs</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>1</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Honeywell Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>1</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Proxy Activity</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>1</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>DocVault Cloud</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>1</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Linux</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>1</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>CustomDataset</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>1</div>
      </div>
      <hr />
      <div style={{display:"flex",padding:"10px",gap:"50px"}}>
        <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"5px",textAlign:"center"}}>Code42</div>
        <div style={{fontSize:"25px",paddingLeft:"5px",paddingRight:"20px"}}>1</div>
      </div>
      <hr />


    </div>
    
  </div> 
</div>


</div>
  )
}

export default Riskdashboard