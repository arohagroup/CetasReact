import Buttons1 from "./buttons1";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Customizeddashboard() {
  var navigate=useNavigate();

  var [data,setdata]=useState<any>([]); 


  function adder(e:any,id:any){
    
    e.preventDefault();
    setdata([...data,{id}])
   
  }

  function deleters(id:any){

   
    let neww1=data.filter((each:any)=>
       {return each.id!==id}
       )
       setdata(neww1)
    console.log(neww1)

  }
  return (
    <div style={{marginLeft:"50px"}}>
      <Buttons1/>
      <form action="" style={{display:"flex"}}>
        <p style={{backgroundColor:"white",color:"black"}}>ADD:</p>
        <button type="submit" onClick={(e)=>{adder(e,new Date().getMilliseconds())}}><FaPlus /></button>
      </form>

   <div className="mainlist"  style={{display:"grid",gridTemplateColumns:"auto auto ",gap:"3px"}}>
     {
     data.map((val:any)=>{
      return( 
      <div key={val.id} className="sublist" style={{padding:"10px",opacity:"1",color:"black"}}>
      <button   onClick={()=>{deleters(val.id)}}  style={{position:"absolute"}}><ImCross /></button>
      <svg height={480} width={210} viewBox="0 0 210 480"  style={{ marginTop:"0px",marginLeft:"0px"}} >
       <rect fill="lightgrey" opacity={0.1} height={465} width={210} x={0} y={0} rx={40} ry={40}></rect>
       
      
       <g style={{fontSize:"12px"}}>
       <text x={15} y={95} fill="#888EA8" >Total Alerts</text>
       <rect x={90} y={81} width={100} height={20} fill="rgba(255, 0, 0, 1)"></rect>
       <text x={160} y={95} fill="white" >48.3k</text>

       <text x={15} y={155} fill="#888EA8" >Risky Alerts</text>
       <rect x={90} y={141} width={60} height={20} fill="blue" opacity={1} ></rect>
       <text x={120} y={155} fill="white" >16.4k</text>

       <text x={15} y={215}  fill="#888EA8"> 
         <tspan >Noisy Alerts</tspan> 
         <tspan dx={-30} dy={10}>(auto-</tspan>
         <tspan dx={-55}dy={10}>suppressed)</tspan>
       </text>
       <rect x={90} y={201} width={80} height={20} fill="rgba(8, 95, 8, 1)"  ></rect>
       <text x={140} y={215} fill="white" >30.4k</text>

       <text x={15} y={280} fill="#888EA8"><tspan >Noisy Alerts</tspan> 
         <tspan dx={-50} dy={10}>(manually-</tspan>
         <tspan dx={-55}dy={10}>suppressed)</tspan>
         </text></g>
       <rect x={90} y={271} width={80} height={20} fill="yellow"  ></rect>
       <text x={140} y={285} fill="rgba(39, 41, 39, 1)" >111</text>

       <g  stroke="white" strokeWidth={1} style={{zIndex:"revert-layer"}} opacity={0.1}>
         <path d="M95 20 V400" ></path>
         <path d="M110 20 V400" ></path>
         <path d="M125 20 V400" ></path>
         <path d="M140 20 V400" ></path>
         <path d="M155 20 V400" ></path>
         <path d="M170 20 V400" ></path>
         <path d="M185 20 V400" ></path>
       </g>
       
       
       <g className="textrot" style={{fontSize:"9px"}} >

       <text x={-230} y={360} fill="#888EA8"  transform="rotate(-45)" >0</text>
       <text x={-233} y={373} fill="#888EA8" transform=" rotate(-45)">9 264</text>
       <text x={-224} y={383} fill="#888EA8"  transform=" rotate(-45)">18 528 </text>
       <text x={-214} y={395} fill="#888EA8"  transform=" rotate(-45)">27 792 </text>
       <text x={-203} y={405} fill="#888EA8"  transform=" rotate(-45)">37 056</text>
       <text x={-193} y={416} fill="#888EA8"  transform=" rotate(-45)">46 320</text>
       <text x={-183} y={426} fill="#888EA8"  transform=" rotate(-45)">55 584 </text>
       </g>
     </svg>
    </div> 
    )
      
     }

     )
     }
   </div>
     

    </div>
  )
}

export default Customizeddashboard