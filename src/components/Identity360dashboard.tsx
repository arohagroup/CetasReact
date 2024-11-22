import Buttons1 from "./buttons1";
import prevuser from "../images/privilegedUser.png";
import termuser from "../images/terminatedUser.png";
import extuser from "../images/externalUser.png"
import service from "../images/ServiceAccount.png"
import discover from "../images/discovered.png"
import { useNavigate } from "react-router-dom";
function Identity360dashboard() {
  var navigate=useNavigate();
  return (
    <div  style={{marginLeft:"50px"}}>
       <Buttons1/>
       <div style={{display:'grid',gridTemplateColumns:"auto auto auto"}}>
        <div className="comp1">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px",width:"270px"}}>RISK BY DEPARTMENT</div>
          <div style={{width:"300px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
            <svg width={300} height={150}transform="translate(28,2)">
              <g stroke="lightgrey" strokeWidth={1}>
                 <path d="M50 20 V110" ></path>
                 <path d="M65 20 V110" ></path>
                 <path d="M80 20 V110" ></path>
                 <path d="M95 20 V110" ></path>
                 <path d="M110 20 V110" ></path>
                 <path d="M125 20 V110" ></path>
                 <path d="M140 20 V110" ></path>
                 <path d="M155 20 V110" ></path>
                 <path d="M170 20 V110" ></path>
                 <path d="M185 20 V110" ></path>
                 <path d="M200 20 V110" ></path>
                 <path d="M215 20 V110" ></path>
                 <path d="M230 20 V110" ></path>
                 <path d="M245 20 V110" ></path>
              </g>
              <g fill="lightgrey" fontSize={12}>
                <text x={-103} y={93} transform="rotate(-70)">0</text>
                <text x={-107} y={105} transform="rotate(-70)">291</text>
                <text x={-104} y={120} transform="rotate(-70)">582</text>
                <text x={-100} y={136} transform="rotate(-70)">873</text>
                <text x={-100} y={148} transform="rotate(-70)">1164</text>
                <text x={-95} y={163} transform="rotate(-70)">1455</text>
                <text x={-90} y={178} transform="rotate(-70)">1746</text>
                <text x={-85} y={194} transform="rotate(-70)">2037</text>
                <text x={-80} y={209} transform="rotate(-70)">2328</text>
                <text x={-75} y={222} transform="rotate(-70)">2619</text>
                <text x={-70} y={234} transform="rotate(-70)">2910</text>
                <text x={-65} y={249} transform="rotate(-70)">2910</text>
                <text x={-60} y={265} transform="rotate(-70)">2910</text>
                <text x={-55} y={279} transform="rotate(-70)">2910</text>
              </g>
              <g fill="lightgrey" fontSize={10}>
                <text x={34}y={30}>IT</text>
                <text x={10}y={50}>Security</text>
                <text x={1}y={70} fontSize={6}>Sales and Marketing</text>
                <text x={2}y={90}fontSize={7}>Human Resources</text>
                <text x={3}y={110}>Technology</text>
              </g>
              <g fill="grey">
                <rect  x={50}y={20} height={10} width={160}></rect>
                <rect  x={50}y={42} height={10} width={140}></rect>
                <rect  x={50}y={64} height={10} width={120}></rect>
                <rect  x={50}y={83} height={10} width={100}></rect>
                <rect  x={50}y={104} height={10} width={90}></rect>
              </g>
              <g>
                <text fill="white" x={190} y={28} fontSize={10}>3.7K</text>
                <text fill="white" x={170} y={50} fontSize={10}>3.7K</text>
                <text fill="white" x={150} y={70} fontSize={10}>3.7K</text>
                <text fill="white" x={110} y={90} fontSize={10}>3.7K</text>
                <text fill="white" x={120} y={111} fontSize={10}>3.7K</text>
              </g>
            </svg>
          <div style={{marginTop:"30px",marginLeft:"20px",display:"flex",flexDirection:"column",gap:"20px"}}>
            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>
          </div>
            
            
          </div>
        </div>

        <div className="comp1">
        <div style={{borderBottom:"3px solid #0d1726",padding:"10px",width:"270px"}}>RISK BY TITLE</div>
          <div style={{width:"300px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
            <svg width={300} height={150}transform="translate(28,2)">
              <g stroke="lightgrey" strokeWidth={1}>
                 <path d="M50 20 V110" ></path>
                 <path d="M65 20 V110" ></path>
                 <path d="M80 20 V110" ></path>
                 <path d="M95 20 V110" ></path>
                 <path d="M110 20 V110" ></path>
                 <path d="M125 20 V110" ></path>
                 <path d="M140 20 V110" ></path>
                 <path d="M155 20 V110" ></path>
                 <path d="M170 20 V110" ></path>
                 <path d="M185 20 V110" ></path>
                 <path d="M200 20 V110" ></path>
                 <path d="M215 20 V110" ></path>
                 <path d="M230 20 V110" ></path>
                 <path d="M245 20 V110" ></path>
              </g>
              <g fill="lightgrey" fontSize={12}>
                <text x={-103} y={93} transform="rotate(-70)">0</text>
                <text x={-107} y={105} transform="rotate(-70)">291</text>
                <text x={-104} y={120} transform="rotate(-70)">582</text>
                <text x={-100} y={136} transform="rotate(-70)">873</text>
                <text x={-100} y={148} transform="rotate(-70)">1164</text>
                <text x={-95} y={163} transform="rotate(-70)">1455</text>
                <text x={-90} y={178} transform="rotate(-70)">1746</text>
                <text x={-85} y={194} transform="rotate(-70)">2037</text>
                <text x={-80} y={209} transform="rotate(-70)">2328</text>
                <text x={-75} y={222} transform="rotate(-70)">2619</text>
                <text x={-70} y={234} transform="rotate(-70)">2910</text>
                <text x={-65} y={249} transform="rotate(-70)">2910</text>
                <text x={-60} y={265} transform="rotate(-70)">2910</text>
                <text x={-55} y={279} transform="rotate(-70)">2910</text>
              </g>
              <g fill="lightgrey" fontSize={10}>
                <text x={34}y={30}>IT</text>
                <text x={10}y={50}>Security</text>
                <text x={1}y={70} fontSize={6}>Sales and Marketing</text>
                <text x={2}y={90}fontSize={7}>Human Resources</text>
                <text x={3}y={110}>Technology</text>
              </g>
              <g fill="grey">
                <rect  x={50}y={20} height={10} width={160}></rect>
                <rect  x={50}y={42} height={10} width={140}></rect>
                <rect  x={50}y={64} height={10} width={120}></rect>
                <rect  x={50}y={83} height={10} width={100}></rect>
                <rect  x={50}y={104} height={10} width={90}></rect>
              </g>
              <g>
                <text fill="white" x={190} y={28} fontSize={10}>3.7K</text>
                <text fill="white" x={170} y={50} fontSize={10}>3.7K</text>
                <text fill="white" x={150} y={70} fontSize={10}>3.7K</text>
                <text fill="white" x={110} y={90} fontSize={10}>3.7K</text>
                <text fill="white" x={120} y={111} fontSize={10}>3.7K</text>
              </g>
            </svg>
          <div style={{marginTop:"30px",marginLeft:"20px",display:"flex",flexDirection:"column",gap:"20px"}}>
            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>
          </div>
            
            
          </div>
        </div>

        <div className="comp1">
        <div style={{borderBottom:"3px solid #0d1726",padding:"10px",width:"270px"}}>RISK BY LOCATION</div>
          <div style={{width:"300px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
            <svg width={300} height={150}transform="translate(28,2)">
              <g stroke="lightgrey" strokeWidth={1}>
                 <path d="M50 20 V110" ></path>
                 <path d="M65 20 V110" ></path>
                 <path d="M80 20 V110" ></path>
                 <path d="M95 20 V110" ></path>
                 <path d="M110 20 V110" ></path>
                 <path d="M125 20 V110" ></path>
                 <path d="M140 20 V110" ></path>
                 <path d="M155 20 V110" ></path>
                 <path d="M170 20 V110" ></path>
                 <path d="M185 20 V110" ></path>
                 <path d="M200 20 V110" ></path>
                 <path d="M215 20 V110" ></path>
                 <path d="M230 20 V110" ></path>
                 <path d="M245 20 V110" ></path>
              </g>
              <g fill="lightgrey" fontSize={12}>
                <text x={-103} y={93} transform="rotate(-70)">0</text>
                <text x={-107} y={105} transform="rotate(-70)">291</text>
                <text x={-104} y={120} transform="rotate(-70)">582</text>
                <text x={-100} y={136} transform="rotate(-70)">873</text>
                <text x={-100} y={148} transform="rotate(-70)">1164</text>
                <text x={-95} y={163} transform="rotate(-70)">1455</text>
                <text x={-90} y={178} transform="rotate(-70)">1746</text>
                <text x={-85} y={194} transform="rotate(-70)">2037</text>
                <text x={-80} y={209} transform="rotate(-70)">2328</text>
                <text x={-75} y={222} transform="rotate(-70)">2619</text>
                <text x={-70} y={234} transform="rotate(-70)">2910</text>
                <text x={-65} y={249} transform="rotate(-70)">2910</text>
                <text x={-60} y={265} transform="rotate(-70)">2910</text>
                <text x={-55} y={279} transform="rotate(-70)">2910</text>
              </g>
              <g fill="lightgrey" fontSize={10}>
                <text x={34}y={30}>IT</text>
                <text x={10}y={50}>Security</text>
                <text x={1}y={70} fontSize={6}>Sales and Marketing</text>
                <text x={2}y={90}fontSize={7}>Human Resources</text>
                <text x={3}y={110}>Technology</text>
              </g>
              <g fill="grey">
                <rect  x={50}y={20} height={10} width={160}></rect>
                <rect  x={50}y={42} height={10} width={140}></rect>
                <rect  x={50}y={64} height={10} width={120}></rect>
                <rect  x={50}y={83} height={10} width={100}></rect>
                <rect  x={50}y={104} height={10} width={90}></rect>
              </g>
              <g>
                <text fill="white" x={190} y={28} fontSize={10}>3.7K</text>
                <text fill="white" x={170} y={50} fontSize={10}>3.7K</text>
                <text fill="white" x={150} y={70} fontSize={10}>3.7K</text>
                <text fill="white" x={110} y={90} fontSize={10}>3.7K</text>
                <text fill="white" x={120} y={111} fontSize={10}>3.7K</text>
              </g>
            </svg>
          <div style={{marginTop:"30px",marginLeft:"20px",display:"flex",flexDirection:"column",gap:"20px"}}>
            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>

            <div style={{marginLeft:"40px",display:"flex",gap:"130px"}}>
              <div style={{color:"grey"}}>IT</div>
              <div style={{color:"white",fontWeight:"bolder"}}>3.7K</div>
            </div>
          </div>
            
            
          </div>
        </div>



        <div className="comp1 2">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px",width:"270px"}}>PREVILAGED USERS</div>
          <div className="main-com" style={{display:"flex",flexDirection:"column",width:"300px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
             <div className="imagepart" style={{display:"flex",width:"130px",height:"130px",borderRadius:"100px",marginLeft:"80px",marginTop:"60px",backgroundColor:"grey"}}>
                <img src={prevuser} alt="" width={100} height={100} style={{padding:"16px"}}/>
             </div>
             <div className="text1" style={{display:"flex",marginLeft:"30px",gap:"30px",marginTop:"20px"}}>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{textAlign:"center",padding:"10px",fontSize:"40px"}}>663</div>
                 </div>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{padding:"10px",textAlign:"center",fontSize:"40px",color:"#ff5a5a"}}>10</div>
                 </div>
              </div>

              <div className="text2" style={{display:"flex",marginLeft:"60px",gap:"110px",marginTop:"10px",fontSize:"15px"}}>
                 <div>Total</div>
                 <div>Risky</div>
              </div>

              <div className="text3" style={{display:"flex",flexDirection:"column",marginLeft:"20px",gap:"10px",marginTop:"20px"}}>
                 <div style={{borderRadius:"10px",width:"250px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{textAlign:"center",padding:"10px",fontSize:"15px",color:"grey"}}>Okta - User attempted unauthorized access to application multiple times.
                   </div>
                 </div>
                 <div style={{fontSize:"10px",marginLeft:"100px"}}>top risk</div>
              </div>
           </div>
          
        </div>

        <div className="comp1 2">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px",width:"270px"}}>TERMINATED USERS</div>
          <div style={{display:"flex",flexDirection:"column",width:"300px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
             <div className="imagepart" style={{display:"flex",width:"130px",height:"130px",borderRadius:"100px",marginLeft:"80px",marginTop:"60px",backgroundColor:"grey",backgroundImage:"linear-gradient(#333233, #33323365)"}}>
                <img src={termuser} alt="" width={100} height={100} style={{padding:"16px"}}/>
             </div>
             <div className="text1" style={{display:"flex",marginLeft:"30px",gap:"30px",marginTop:"20px"}}>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{textAlign:"center",padding:"10px",fontSize:"40px"}}>25</div>
                 </div>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{padding:"10px",textAlign:"center",fontSize:"40px",color:"#ff5a5a"}}>10</div>
                 </div>
              </div>

              <div className="text2" style={{display:"flex",marginLeft:"60px",gap:"110px",marginTop:"10px",fontSize:"15px"}}>
                 <div>Total</div>
                 <div>Risky</div>
              </div>

              <div className="text3" style={{display:"flex",flexDirection:"column",marginLeft:"20px",gap:"10px",marginTop:"20px"}}>
                 <div style={{borderRadius:"10px",width:"250px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{textAlign:"center",padding:"10px",fontSize:"15px",color:"grey"}}>Spike in Failed Attempts from Unusual Location - Duo
                   </div>
                 </div>
                 <div style={{fontSize:"10px",marginLeft:"100px"}}>top risk</div>
              </div>
            </div>
        </div>

        <div className="comp1 2">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px",width:"270px"}}>EXTERNAL USERS</div>
          <div className="main-com" style={{display:"flex",flexDirection:"column",width:"300px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
             <div className="imagepart" style={{display:"flex",width:"130px",height:"130px",borderRadius:"100px",marginLeft:"80px",marginTop:"60px",backgroundColor:"grey"}}>
                <img src={extuser} alt="" width={100} height={100} style={{padding:"16px"}}/>
             </div>
             <div className="text1" style={{display:"flex",marginLeft:"30px",gap:"30px",marginTop:"20px"}}>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{textAlign:"center",padding:"10px",fontSize:"40px"}}>4</div>
                 </div>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{padding:"10px",textAlign:"center",fontSize:"40px",color:"#ff5a5a"}}>1</div>
                 </div>
              </div>

              <div className="text2" style={{display:"flex",marginLeft:"60px",gap:"110px",marginTop:"10px",fontSize:"15px"}}>
                 <div>Total</div>
                 <div>Risky</div>
              </div>

              <div className="text3" style={{display:"flex",flexDirection:"column",marginLeft:"20px",gap:"10px",marginTop:"20px"}}>
                 <div style={{borderRadius:"10px",width:"250px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{textAlign:"center",padding:"10px",fontSize:"15px",color:"grey"}}>Okta - Land Speed Violation
                   </div>
                 </div>
                 <div style={{fontSize:"10px",marginLeft:"100px"}}>top risk</div>
              </div>
           </div>
        </div>

        <div className="comp1 3">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px",width:"270px"}}>SERVICE ACCOUNTS</div>
          <div className="main-com" style={{display:"flex",flexDirection:"column",width:"300px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
             <div className="imagepart" style={{display:"flex",width:"130px",height:"130px",borderRadius:"100px",marginLeft:"80px",marginTop:"60px",backgroundColor:"grey"}}>
                <img src={service} alt="" width={100} height={100} style={{padding:"16px"}}/>
             </div>
             <div className="text1" style={{display:"flex",marginLeft:"30px",gap:"30px",marginTop:"20px"}}>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{textAlign:"center",padding:"10px",fontSize:"40px"}}>11</div>
                 </div>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818"}}>
                   <div style={{padding:"10px",textAlign:"center",fontSize:"40px",color:"#ff5a5a"}}>0</div>
                 </div>
              </div>

              <div className="text2" style={{display:"flex",marginLeft:"60px",gap:"110px",marginTop:"10px",fontSize:"15px"}}>
                 <div>Total</div>
                 <div>Risky</div>
              </div>

              <div className="text3" style={{marginLeft:"20px",gap:"10px",marginTop:"20px"}}>
                     <div style={{fontSize:"30px",marginLeft:"80px",color:"grey"}}>No risk</div>
              </div>
           </div>
        </div>

        <div className="comp1 3">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px",width:"270px"}}>USER STATS</div>
          <div style={{display:"flex",flexDirection:"column",width:"300px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
            
             <div className="part-1" style={{display:"flex",marginLeft:"30px",gap:"30px",marginTop:"40px",padding:"10px"}}>
                 <div style={{borderRadius:"100px",width:"120px",height:"120px" ,backgroundColor:"#808080",backgroundImage:"linear-gradient(#333233, #33323365)"}}>
                   <img src={termuser} width={80} height={80} style={{padding:"15px",marginLeft:"7px"}} />
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818",marginTop:"40px"}}>
                   <div style={{padding:"10px",textAlign:"center",fontSize:"40px"}}>0</div>
                 </div>
                 <div style={{marginLeft:"40px",gap:"110px",fontSize:"12px"}}>Risk</div>
                 </div>
             </div>

             <div className="part-2" style={{display:"flex",marginLeft:"30px",gap:"30px",marginTop:"40px",padding:"10px"}}>
                 <div style={{borderRadius:"100px",width:"120px",height:"120px" ,backgroundColor:"#808080",backgroundImage:"linear-gradient(#333233, #33323365)"}}>
                   <img src={discover} width={80} height={80} style={{padding:"15px",marginLeft:"7px"}} />
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                 <div style={{borderRadius:"10px",width:"100px",height:"70px" ,backgroundColor:"#060818",marginTop:"40px"}}>
                   <div style={{padding:"10px",textAlign:"center",fontSize:"40px"}}>59K</div>
                 </div>
                 <div style={{marginLeft:"10px",gap:"110px",fontSize:"12px"}}>Discoverd users</div>
                 </div>
             </div>
                 
              
          </div>
        </div>

        <div className="comp1 3">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px",width:"270px"}}>USER CATEGORIZATION</div>
          <div style={{width:"300px",height:"440px",backgroundColor:"#0d1726",marginTop:"10px",borderRadius:"30px"}}>
          <div className="main-sub" style={{padding:"20px"}}>
            <div style={{display:"flex",gap:"90px",marginLeft:"30px"}}>
              <div style={{fontSize:"14px",paddingTop:"10px"}}>Discoverd</div>
              <div style={{fontSize:"23px",paddingTop:"1px"}}>59219</div>
            </div>
            <hr />
            <div style={{display:"flex",gap:"100px",marginLeft:"30px"}}>
              <div style={{fontSize:"14px",paddingTop:"10px"}}>Dormant</div>
              <div style={{fontSize:"23px",paddingTop:"1px"}}>46390</div>
            </div>
            <hr />
            <div style={{display:"flex",gap:"95px",marginLeft:"30px"}}>
              <div style={{fontSize:"14px",paddingTop:"10px"}}>Previlaged</div>
              <div style={{fontSize:"23px",paddingTop:"1px"}}>663</div>
            </div>
            <hr />
            <div style={{display:"flex",gap:"130px",marginLeft:"30px"}}>
              <div style={{fontSize:"14px",paddingTop:"10px"}}>New</div>
              <div style={{fontSize:"23px",paddingTop:"1px"}}>81</div>
            </div>
            <hr />
            <div style={{display:"flex",gap:"110px",marginLeft:"30px"}}>
              <div style={{fontSize:"14px",paddingTop:"10px"}}>Disabled</div>
              <div style={{fontSize:"23px",paddingTop:"1px"}}>25</div>
            </div>
            <hr />
            <div style={{display:"flex",gap:"120px",marginLeft:"30px"}}>
              <div style={{fontSize:"14px",paddingTop:"10px"}}>Service</div>
              <div style={{fontSize:"23px",paddingTop:"1px"}}>11</div>
            </div>
            <hr />
            <div style={{display:"flex",gap:"120px",marginLeft:"30px"}}>
              <div style={{fontSize:"14px",paddingTop:"10px"}}>External</div>
              <div style={{fontSize:"23px",paddingTop:"12px"}}>4</div>
            </div>
            <hr />
            <div style={{display:"flex",gap:"110px",marginLeft:"30px"}}>
              <div style={{fontSize:"14px",paddingTop:"10px"}}>Fight Risk</div>
              <div style={{fontSize:"23px",paddingTop:"12px"}}>0</div>
            </div>
            <hr />
            </div>
          </div>
        </div>




       </div>
      
      </div>
  )
}

export default Identity360dashboard