
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cisodashboard.css"
import Buttons1 from "../buttons1";
function Cisodashboard() {
  var navigate=useNavigate()
  var [val,changeval]=useState(false);
  var [btnval,changebtnval]=useState("Last 30 Days")
  return (
   <div style={{marginLeft:"50px"}}>
    <Buttons1/>
    <div className="row 1" style={{display:"flex",gap:"10px",marginTop:"10px"}}>
        <div className="metersvg">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px"}}>DATA QUALITY</div> 
           <svg height={440} width={150} style={{marginTop:"10px"}}>
              <rect height={400} width={150} fill="#0d1726" rx={20} ry={20}></rect>
  
              <g transform="translate(-25,55)">
                <g className="meterpart"transform="translate(100,72.4)">
      
                <g fill="#dc143c" fill-opacity="1" style={{pointerEvents: "none"}}>
       
                  <path d=" M-24.8,0  L-45,0  a45,45,0,0,1,22.4959,-38.9688 L-12.4022,-21.4761  a24.8,24.8,0,0,0,-12.3978,21.4761 L-24.8,0 "></path>
                </g>
                <g fill="#ff8c00" fill-opacity="1" style={{pointerEvents: "none"}}>
                 <path d=" M-12.4022,-21.4761  L-22.5041,-38.9688  a45,45,0,0,1,44.9959,-0.0071 L12.3955,-21.48  a24.8,24.8,0,0,0,-24.7978,0.0039 L-12.4022,-21.4761 ">
                 </path>
                </g>

                <g fill="#2a7111" fill-opacity="1" style={{pointerEvents: "none"}}>
                 <path d=" M12.3955,-21.48  L22.4918,-38.9759  a45,45,0,0,1,22.5082,38.9759 L24.8,0  a24.8,24.8,0,0,0,-12.4045,-21.48 L12.3955,-21.48 ">
                 </path>
                </g>
     
              </g>
              <g className="meternob">     
               <g  fill="#2d93ad" transform="translate(97,72)">
                 <circle r="5"></circle>
               </g>
               <g fill="#2d93ad"  transform="translate(100,68) rotate(-30)" >
                 <path d=" M0,0  L24.8,2  L24.8,3  L0,5 "></path>
               </g>
               </g>
              </g>

           <text fill="lightgrey" fontSize={40} x={40} y={200}>90%</text>
           <g >
                <rect width={60} height={60} rx={10} ry={10} x={5} y={230}></rect>
                <text fill="lightgrey" fontSize={40} x={15} y={270}>53</text>
                <rect width={75} height={60} rx={10} ry={10} x={70} y={230}></rect>
                <text fill="lightgrey" fontSize={30} x={75} y={270}>9.4M</text>
           </g>
           <g >
                
                <text fill="lightgrey" fontSize={14} x={10} y={310}>
                  <tspan>Integrated</tspan>
                  <tspan dx={-55} dy={15}>Datasets</tspan>
                </text>
               
                <text fill="lightgrey" fontSize={14} x={80} y={310}>
                  <tspan>Collected</tspan>
                  <tspan dx={-52} dy={15}>Events</tspan>
                </text>
           </g>

           </svg>
        </div>




        <div className="metersvg">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px"}}>MODEL COVERAGE</div> 
           <svg height={440} width={150} style={{marginTop:"10px"}}>
              <rect height={400} width={150} fill="#0d1726" rx={20} ry={20}></rect>
              
              <g className="meterpart" transform="translate(70,125)"> 
              
              <g fill="#1ca3de" fill-opacity="1" >
              
                <path d=" M-24.8,0  L-45,0  a45,45,0,0,1,8.5942,-26.4503 L-20.0636,-14.5771  a24.8,24.8,0,0,0,-4.7364,14.5771 L-24.8,0 "></path><path d=" M-20.0636,-14.5771  L-36.4058,-26.4503  a45,45,0,0,1,22.5,-16.3472 L-7.6636,-23.5862  a24.8,24.8,0,0,0,-12.4,9.0091 L-20.0636,-14.5771 ">

                </path></g>
                
                <g fill="#0d85d8" fill-opacity="1" >
                <path d=" M-7.6636,-23.5862  L-13.9058,-42.7975  a45,45,0,0,1,27.8115,0 L7.6636,-23.5862  a24.8,24.8,0,0,0,-15.3272,0 L-7.6636,-23.5862 ">

                </path></g><g fill="#0160c9" fill-opacity="1" >
                <path d=" M7.6636,-23.5862  L13.9058,-42.7975  a45,45,0,0,1,22.5,16.3472 L20.0636,-14.5771  a24.8,24.8,0,0,0,-12.4,-9.0091 L7.6636,-23.5862 "></path></g><g fill="#0041c7" fill-opacity="1" >
                  
                <path d=" M20.0636,-14.5771  L36.4058,-26.4503  a45,45,0,0,1,8.5942,26.4503 L24.8,0  a24.8,24.8,0,0,0,-4.7364,-14.5771 L20.0636,-14.5771 ">
                </path></g>
               
              </g>


              <g className="meternob">     
               <g  fill="#2d93ad" transform="translate(70,125)">
                 <circle r="5"></circle>
               </g>
               <g fill="#2d93ad"  transform="translate(69,123) rotate(-64)" >
                 <path d=" M0,0  L24.8,2  L24.8,3  L0,5 "></path>
               </g>
              
              </g>

           <text fill="lightgrey" fontSize={40} x={40} y={200}>59%</text>
           <g >
                <rect width={60} height={60} rx={10} ry={10} x={5} y={230}></rect>
                <text fill="lightgrey" fontSize={30} x={13} y={270}>895</text>
                <rect width={70} height={60} rx={10} ry={10} x={70} y={230}></rect>
                <text fill="lightgrey" fontSize={30} x={80} y={270}>592</text>
           </g>

           <g >
                
                <text fill="lightgrey" fontSize={14} x={10} y={310}>
                  <tspan>Integrated</tspan>
                  <tspan dx={-55} dy={15}>Datasets</tspan>
                </text>
               
                <text fill="lightgrey" fontSize={14} x={80} y={310}>
                  <tspan>Collected</tspan>
                  <tspan dx={-52} dy={15}>Events</tspan>
                </text>
           </g>

           </svg>
        </div>





      <div className="metersvg">
          <div style={{borderBottom:"3px solid #0d1726",width:"130px",padding:"10px"}}>FALSE POSITIVE REDUCTION</div> 
           <svg height={440} width={150} style={{marginTop:"10px"}}>
              <rect height={400} width={150} fill="#0d1726" rx={20} ry={20}></rect>
              
              <g className="meterpart" transform="translate(70,125)"> 
              
              <g  fill-opacity="1" >
              
                <path fill="#9cc88b" d=" M-24.8,0  L-45,0  a45,45,0,0,1,8.5942,-26.4503 L-20.0636,-14.5771  a24.8,24.8,0,0,0,-4.7364,14.5771 L-24.8,0 ">

                </path>
                <path fill="#79b065" d=" M-20.0636,-14.5771  L-36.4058,-26.4503  a45,45,0,0,1,22.5,-16.3472 L-7.6636,-23.5862  a24.8,24.8,0,0,0,-12.4,9.0091 L-20.0636,-14.5771 ">

                </path></g>
                
                <g fill="#65a047" fill-opacity="1" >
                <path d=" M-7.6636,-23.5862  L-13.9058,-42.7975  a45,45,0,0,1,27.8115,0 L7.6636,-23.5862  a24.8,24.8,0,0,0,-15.3272,0 L-7.6636,-23.5862 ">

                </path></g>
                <g fill="#4d8c2d" fill-opacity="1" >
                <path d=" M7.6636,-23.5862  L13.9058,-42.7975  a45,45,0,0,1,22.5,16.3472 L20.0636,-14.5771  a24.8,24.8,0,0,0,-12.4,-9.0091 L7.6636,-23.5862 ">
                </path></g>
                <g fill="#2a7111" fill-opacity="1" >
                 <path d=" M20.0636,-14.5771  L36.4058,-26.4503  a45,45,0,0,1,8.5942,26.4503 L24.8,0  a24.8,24.8,0,0,0,-4.7364,-14.5771 L20.0636,-14.5771 ">
                 </path>
                </g>
              </g>


              <g className="meternob">     
               <g  fill="#2d93ad" transform="translate(70,125)">
                 <circle r="5"></circle>
               </g>
               <g fill="#2d93ad"  transform="translate(69,123) rotate(-64)" >
                 <path d=" M0,0  L24.8,2  L24.8,3  L0,5 "></path>
               </g>
              
              </g>

           <text fill="lightgrey" fontSize={40} x={40} y={200}>59%</text>
           <g >
                <rect width={60} height={60} rx={10} ry={10} x={5} y={230}></rect>
                <text fill="lightgrey" fontSize={30} x={13} y={270}>895</text>
                <rect width={70} height={60} rx={10} ry={10} x={70} y={230}></rect>
                <text fill="lightgrey" fontSize={30} x={80} y={270}>592</text>
           </g>

           <g >
                
                <text fill="lightgrey" fontSize={14} x={10} y={310}>
                  <tspan>Integrated</tspan>
                  <tspan dx={-55} dy={15}>Datasets</tspan>
                </text>
               
                <text fill="lightgrey" fontSize={14} x={80} y={310}>
                  <tspan>Collected</tspan>
                  <tspan dx={-52} dy={15}>Events</tspan>
                </text>
           </g>

           </svg>
        </div>




        <div className="metersvg">
          <div style={{borderBottom:"3px solid #0d1726",padding:"10px"}}> TRUE POSITIVES</div> 
           <svg height={440} width={150} style={{marginTop:"10px"}}>
              <rect height={400} width={150} fill="#0d1726" rx={20} ry={20}></rect>
              
              <g className="meterpart" transform="translate(70,125)"> 
              
              <g  fill-opacity="1" >
              
                <path fill="#f6bdc0" d=" M-24.8,0  L-45,0  a45,45,0,0,1,8.5942,-26.4503 L-20.0636,-14.5771  a24.8,24.8,0,0,0,-4.7364,14.5771 L-24.8,0 ">

                </path>
                <path fill="#f1959b" d=" M-20.0636,-14.5771  L-36.4058,-26.4503  a45,45,0,0,1,22.5,-16.3472 L-7.6636,-23.5862  a24.8,24.8,0,0,0,-12.4,9.0091 L-20.0636,-14.5771 ">

                </path></g>
                
                <g fill="#f07470" fill-opacity="1" >
                <path d=" M-7.6636,-23.5862  L-13.9058,-42.7975  a45,45,0,0,1,27.8115,0 L7.6636,-23.5862  a24.8,24.8,0,0,0,-15.3272,0 L-7.6636,-23.5862 ">

                </path></g>
                <g fill="#ea4c46" fill-opacity="1" >
                <path d=" M7.6636,-23.5862  L13.9058,-42.7975  a45,45,0,0,1,22.5,16.3472 L20.0636,-14.5771  a24.8,24.8,0,0,0,-12.4,-9.0091 L7.6636,-23.5862 ">
                </path></g>
                <g fill="#dc1c13" fill-opacity="1" >
                 <path d=" M20.0636,-14.5771  L36.4058,-26.4503  a45,45,0,0,1,8.5942,26.4503 L24.8,0  a24.8,24.8,0,0,0,-4.7364,-14.5771 L20.0636,-14.5771 ">
                 </path>
                </g>
              </g>


              <g className="meternob">     
               <g  fill="#2d93ad" transform="translate(70,125)">
                 <circle r="5"></circle>
               </g>
               <g fill="#2d93ad"  transform="translate(69,123) rotate(-64)" >
                 <path d=" M0,0  L24.8,2  L24.8,3  L0,5 "></path>
               </g>
              
              </g>

           <text fill="lightgrey" fontSize={40} x={40} y={200}>59%</text>
           <g >
                <rect width={60} height={60} rx={10} ry={10} x={5} y={230}></rect>
                <text fill="lightgrey" fontSize={30} x={13} y={270}>895</text>
                <rect width={70} height={60} rx={10} ry={10} x={70} y={230}></rect>
                <text fill="lightgrey" fontSize={30} x={80} y={270}>592</text>
           </g>

           <g >
                
                <text fill="lightgrey" fontSize={14} x={10} y={310}>
                  <tspan>Integrated</tspan>
                  <tspan dx={-55} dy={15}>Datasets</tspan>
                </text>
               
                <text fill="lightgrey" fontSize={14} x={80} y={310}>
                  <tspan>Collected</tspan>
                  <tspan dx={-52} dy={15}>Events</tspan>
                </text>
           </g>

           </svg>
        </div>


        
      <div className="soc kpi metrics">
        <div style={{borderBottom:"3px solid #0d1726",padding:"10px"}}>SOC KPI METRICS</div>
        <div style={{width:"300px", height:"430px",marginTop:"10px",backgroundColor:"#0d1726",borderRadius:"20px",padding:"10px"}}>
              <div className="dropdown" >
                <button className="dropbtn" style={{marginLeft:"100px",marginTop:"8px"}} onClick={()=>changeval(!val)}>{btnval} <IoIosArrowDown /></button>
                   { val && <div className="dropdown-content" >
                      <p  onClick={()=>{changebtnval("Last 30 Days"); changeval(false)}}>Last 30 days avg</p>
                      <p  onClick={()=>{changebtnval("Last 60 Days"); changeval(false)}}>Last 60 days avg</p>
                      <p  onClick={()=>{changebtnval("Last 90 Days"); changeval(false)}} >Last 90 days avg</p>
                    </div>}
              </div> 
              
           <div style={{position:"relative",display:"flex",gap:"50px"}}> 
               <div style={{width:"20px",padding:"30px",marginLeft:"20px"}}>MTTD AVERAGE</div>
               <div style={{width:"90px",height:"50px",padding:"10px",borderRadius:"20px",border:"1px solid grey",marginLeft:"20px",marginTop:"10px",fontSize:"23px",backgroundColor:"#060818"}}>undefines mins</div>
           </div>
           <div style={{position:"relative",display:"flex",gap:"50px"}}> 
               <div style={{width:"20px",padding:"30px",marginLeft:"20px"}}>MTTD AVERAGE</div>
               <div style={{width:"90px",height:"50px",padding:"10px",borderRadius:"20px",border:"1px solid grey",marginLeft:"20px",marginTop:"10px",fontSize:"23px",backgroundColor:"#060818"}}>undefines mins</div>
           </div>
           <div style={{position:"relative",display:"flex",gap:"50px"}}> 
               <div style={{width:"20px",padding:"30px",marginLeft:"20px"}}>MTTD AVERAGE</div>
               <div style={{width:"90px",height:"50px",padding:"10px",borderRadius:"20px",border:"1px solid grey",marginLeft:"20px",marginTop:"10px",fontSize:"23px",backgroundColor:"#060818"}}>undefines mins</div>
           </div>
           <div style={{position:"relative",display:"flex",gap:"50px"}}> 
               <div style={{width:"20px",padding:"30px",marginLeft:"20px"}}>MTTD AVERAGE</div>
               <div style={{width:"90px",height:"50px",padding:"10px",borderRadius:"20px",border:"1px solid grey",marginLeft:"20px",marginTop:"10px",fontSize:"23px",backgroundColor:"#060818"}}>undefines mins</div>
           </div>
          
        </div>
        
      </div>
     
      
      </div>

      <div className="row 2" style={{display:"flex",gap:"30px"}}>
        <div>
           <div style={{borderBottom:"3px solid #0d1726",width:"570px",padding:"10px"}}>RISK OVERVIEW</div>
           <div style={{backgroundColor:"#0d1726",width:"600px",height:"420px",borderRadius:"20px",marginTop:"10px"}}>
           <div style={{display:"flex",gap:"0", width:"400px"}}>
            
            <div className="barchart" style={{marginTop:"30px"}}>
            <button className="risk-overview-btn">Top Risky Dataset</button>
             <svg style={{position:"relative",top:"0px"}} width={320} height={200}>
              <g stroke="lightgrey" strokeWidth={1}>
                <path d="M150 10 V120 "></path>
                <path d="M160 10 V120 "></path>
                <path d="M170 10 V120 "></path>
                <path d="M180 10 V120 "></path>
                <path d="M190 10 V120 "></path>
                <path d="M200 10 V120 "></path>
                <path d="M210 10 V120 "></path>
                <path d="M220 10 V120 "></path>
                <path d="M230 10 V120 "></path>
                <path d="M240 10 V120 "></path>            
                <path d="M250 10 V120 "></path>
                <path d="M260 10 V120 "></path>
                <path d="M270 10 V120 "></path>
                <path d="M280 10 V120 "></path>
                <path d="M290 10 V120 "></path>
                <path d="M300 10 V120 "></path>
                <path d="M310 10 V120 "></path>
      

              </g>
              <g>
                <text fill="lightgrey" x={30} y={24} fontSize={12}> Windows AD Activity</text>
                <text fill="lightgrey" x={70} y={44} fontSize={12}> Okta Activity</text>
                <text fill="lightgrey" x={70} y={64} fontSize={12}> VPN Activity</text>
                <text fill="lightgrey" x={60} y={84} fontSize={12}> Sophos Activity</text>
                <text fill="lightgrey" x={20} y={104} fontSize={12}>AWS cloud-trail activity</text>
              </g>
              <g>
                <rect fill="#8b0001" width={149} height={8}  x={149} y={16} ></rect>
                <rect fill="#9e1711" width={130} height={8}  x={149} y={36} ></rect>
                <rect fill="#b12e21" width={24} height={8}  x={149} y={56} ></rect>
                <rect fill="#c34632" width={20} height={8}  x={149} y={76} ></rect>
                <rect fill="#d65d42" width={14} height={8}  x={149} y={96} ></rect>
              </g>
              <g>
                <text fill="lightgrey"  fontSize={9} transform="translate(150,135) rotate(-60)">0</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(158,138) rotate(-60)">20</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(169,138) rotate(-60)">40</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(179,138) rotate(-60)">60</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(189,138) rotate(-60)">80</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(199,142) rotate(-60)">100</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(209,142) rotate(-60)">120</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(219,142) rotate(-60)">140</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(229,142) rotate(-60)">160</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(239,142) rotate(-60)">180</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(249,142) rotate(-60)">200</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(259,142) rotate(-60)">220</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(269,142) rotate(-60)">240</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(279,142) rotate(-60)">260</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(289,142) rotate(-60)">280</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(299,142) rotate(-60)">300</text>
                <text fill="lightgrey"  fontSize={8} transform="translate(309,142) rotate(-60)">320</text>              
              </g>
              <g>
                <text x={280}y={25} fill="lightgrey" fontSize={12} fontWeight={"bolder"}>298</text>
                <text x={280}y={45} fill="lightgrey" fontSize={12} fontWeight={"bolder"}>273</text>
                <text x={170}y={65} fill="lightgrey" fontSize={12} fontWeight={"bolder"}>43</text>
                <text x={160}y={85} fill="lightgrey" fontSize={12} fontWeight={"bolder"}>39</text>
                <text x={155}y={105} fill="lightgrey" fontSize={12} fontWeight={"bolder"}>32</text>
              </g>
            </svg>
          </div>
     <hr style={{color:"yellow",height:"290px",marginTop:"30px"}} />     
    
    
    <div className="pie chart" style={{width:"150px",height:"100px",marginTop:"30px"}}>
    <button className="risk-overview-btn" >Top Risky Dataset</button>
        <svg version="1.1" style={{fontFamily:"Roboto", fontSize:"12px" ,width:"210px",height:"200px",marginLeft:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 250" aria-hidden="false" aria-label="Interactive chart">
           <g className="chart part" data-z-index="3" aria-hidden="false" transform="translate(-200,-60) " >
           <g data-z-index="0.1" opacity="1" transform="translate(0,0) scale(1 1)" style={{cursor: "pointer"}} aria-hidden="false" clip-path="none">

            <g data-z-index="31416026.53589793" z="0"    stroke-width="1" stroke-linejoin="round"  style={{outline: "none"}} role="img" aria-label="Item 1, 80."></g>

           <g data-z-index="31416026.53589793" z="0"  stroke-width="1" stroke-linejoin="round"  style={{outline: "none"}} role="img" aria-label="Item 2, 60.">

                 <g className="full-green">
                 <path className="green part" d="M 314.97678125477876 69.38982861670038 C 377.9372414296019 69.3807611326675 428.98717427658596 105.46381353156036 428.99999763548186 149.9835818678034 C 429.00877509066106 180.45689812857893 407.14089532678025 206.40612330803077 369.23447845962374 220.9035307520458 L 315 150 C 315 150 315 150 315 150 C 315 150 315 150 315 150 Z" data-z-index="314160.2653589793" transform="translate(0,0)" opacity="1" ></path>
                 <path className="green curve"  d="M 429 150 C 429 180.4675443531735 407.1337147400546 206.4088695420474 369.23447845962374 220.9035307520458 L 369.23447845962374 244.76838461709178 C 407.1337147400546 230.27372340709337 429 204.33239821821948 429 173.86485386504597 Z" data-z-index="264578.6326794896" transform="translate(0,0)" opacity="1"></path>
                 </g>
                 <g className="full-purple" >
                 <path className="purple part"  d="M 369.2334757295639 220.90391424417555 C 313.854073944365 242.08340394267321 244.67904442630467 227.50800899605923 214.72672285054804 188.34885845569067 C 206.84784666412358 178.0481511167696 202.75517623318618 168.3219181703516 201.38870121678286 156.6510446093289 L 315 150 C 315 150 315 150 315 150 C 315 150 315 150 315 150 Z" data-z-index="314160.2653589793" transform="translate(0,0)" opacity="1" ></path>
                 <path className="purple curve" d="M 369.2334757295639 220.90391424417555 C 313.854073944365 242.08340394267321 244.67904442630467 227.50800899605923 214.72672285054804 188.34885845569067 C 206.84784666412358 178.0481511167696 202.75517623318618 168.3219181703516 201.38870121678286 156.6510446093289 L 201.38870121678286 180.51589847437486 C 206.5834901877114 224.8838704666327 261.6602097640207 257.8734441622464 324.40599749046135 254.20017365406977 C 340.91110516520126 253.233929903649 354.6660757088256 250.33997488877148 369.2334757295639 244.76876810922153 Z" data-z-index="264579.6326794897" transform="translate(0,0)" opacity="1"></path>
                 </g>
                 
            </g>
            <g className="darkblue-part" data-z-index="31416026.53589793" z="0"   stroke-linejoin="round"  style={{outline: "none"}} role="img" aria-label="Item 3, 30.">

                <path  d="M 201.38860716248854 156.65024125579845 C 198.10838795699325 128.63093651074593 213.60215348738552 103.65671873166174 244.97875637929758 86.3877942458751 L 315 150 C 315 150 315 150 315 150 Z" data-z-index="314160.2653589793" transform="translate(0,0)" opacity="1" ></path>

            </g>

            <g  className="ligh-blue-part"data-z-index="31416026.53589793" z="0"   stroke-linejoin="round"  style={{outline: "none"}} role="img" aria-label="Item 4, 20.">

              <path  d="M 244.97965599523968 86.38729912409383 C 265.886905232749 74.88069145262062 288.4608000171834 69.39730781431115 314.9545162373521 69.38983336071269 L 315 150 C 315 150 315 150 315 150 Z" data-z-index="314160.2653589793" transform="translate(0,0)" opacity="1" ></path>

               </g>
          </g>
        
          </g>

        <g className="textpart" data-z-index="7" aria-hidden="true" transform="translate(-54,200)"><g data-z-index="1">
          <g>
            <g data-z-index="1" transform="translate(10,3)">
                 <text font-family='Roboto-Regular,Roboto' x="30" fill="white"  style={{ cursor: "pointer", fontSize:"12px", fontWeight: "bold"}} text-anchor="start" data-z-index="2" y="15">
                  <tspan>account</tspan> <tspan dx={-50} dy={10}>compromise</tspan> 
                  </text>
                 <rect x="22" y="4" width="12" height="12" fill="rgb(127, 0, 0)" rx="6" ry="6" data-z-index="3">
                 </rect></g>
              <g data-z-index="1" transform="translate(90,3)">
                 <text font-family='Roboto-Regular,Roboto' x="29" y="15"  fill="white"  style={{ cursor: "pointer", fontSize:"12px", fontWeight: "bold"}} text-anchor="start" data-z-index="2">
                 <tspan>Initail</tspan> <tspan dx={-35} dy={10}>Access</tspan> 
                 </text>
                 <rect x="12" y="4" width="12" height="12" fill="#ac0101" rx="6" ry="6" data-z-index="3">
                 </rect></g>
              <g data-z-index="1" transform="translate(160,3)">
                <text font-family='Roboto-Regular,Roboto' x="16" y="15" fill="white"  style={{ cursor: "pointer", fontSize:"12px", fontWeight: "bold"}} text-anchor="start" data-z-index="2">
                <tspan>Data</tspan> <tspan dx={-30} dy={10}>Exfiltration</tspan> 
                </text>
                <rect x="2" y="4" width="12" height="12" fill="#c71515" rx="6" ry="6" data-z-index="3">
                </rect>
              </g>
              <g data-z-index="1" transform="translate(35,35)">
                <text font-family='Roboto-Regular,Roboto' x="15" y="15" fill="white"  style={{ cursor: "pointer", fontSize:"12px", fontWeight: "bold"}} text-anchor="start" data-z-index="2">
                Lateral Movement
                </text>
                <rect  y="4" width="12" height="12" fill="#d65d42" rx="6" ry="6" data-z-index="3">
                </rect>
              </g>
            </g>
            </g>
            </g><g style={{cursor: "default", whiteSpace:" nowrap", pointerEvents: "none"}} data-z-index="8" transform="translate(207,120)" opacity="0" aria-hidden="true">
            </g><g stroke-linejoin="round" data-z-index="1000" aria-hidden="true">
            </g><g stroke-linejoin="round" data-z-index="1000" aria-hidden="true">
            </g>
       </svg>
      </div>

            
      </div>
            
           </div>
        </div>
      <div  className="risk trend"> 
           <div style={{borderBottom:"3px solid #0d1726",width:"290px",padding:"10px"}}>RISK TREND</div>
           <div style={{backgroundColor:"#0d1726",width:"320px",height:"420px",borderRadius:"20px",marginTop:"10px"}}>
           <svg width={300} height={200}>
            <g>
            <path d="M40 20 H 220" stroke="lightgrey" strokeWidth={1}></path>
            <path d="M40 60 H 220" stroke="lightgrey" strokeWidth={1}></path>
            <path d="M40 100 H 220" stroke="lightgrey" strokeWidth={1}></path>
            <path  d="M40 140 H 220" stroke="lightgrey" strokeWidth={1}></path>
        
            </g>
            <g fill="lightgrey" fontSize={10}>
              <text x={30} y={25}>6</text>
              <text x={30} y={65}>4</text>
              <text x={30} y={105}>2</text>
              <text x={30} y={145}>0</text>
            </g>
            <g fill="lightgrey" fontSize={10}>
              <text x={40} y={155}>november</text>
              <text x={85} y={155}>december</text>
              <text x={130} y={155}>january</text>
              <text x={165} y={155}>february</text>
              <text x={205} y={155}>march</text>
            </g>
            <g>
              <rect x={55} y={40} fill="red" height="100" width="10"></rect>
              <rect x={95} y={40} fill="red" height="100" width="10"></rect>
              <rect x={135} y={40} fill="red" height="100" width="10"></rect>
              <rect x={175} y={40} fill="red" height="100" width="10"></rect>
              <rect x={215} y={40} fill="red" height="100" width="10"></rect>
            </g>
            
                       
           </svg>
           <svg width={300} height={200}>
            <g>
            <path d="M50 20 H 220" stroke="lightgrey" strokeWidth={1}></path>
            <path d="M50 70 H 220" stroke="lightgrey" strokeWidth={1}></path>
            <path d="M50 120 H 220" stroke="lightgrey" strokeWidth={1}></path>
            
        
            </g>
            <g fill="lightgrey" fontSize={10}>
              <text x={30} y={25}>200</text>
              <text x={30} y={75}>100</text>
              <text x={40} y={125}>0</text>
        
            </g>
            <g fill="lightgrey" fontSize={10}>
              <text x={50} y={155}>august</text>
              <text x={80} y={155}>september</text>
              <text x={125} y={155}>january</text>
              <text x={160} y={155}>november</text>
              <text x={205} y={155}>june</text>
            </g>
            <g fill="blue">
              <rect x={55} y={40}  height="100" width="20"></rect>
              <rect x={90} y={40}  height="100" width="20"></rect>
              <rect x={130} y={40}  height="100" width="20"></rect>
              <rect x={165} y={40}  height="100" width="20"></rect>
              <rect x={200} y={40}  height="100" width="20"></rect>
            </g>
            
                       
           </svg>

           </div>
      </div>
      </div>



</div>        
  )
}

export default Cisodashboard