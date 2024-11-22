
import "./comp6.css";

import Buttons2 from "./buttons/buttons2";
import Buttons from "./buttons/buttons";
function comp6() {
  return (
    <div style={{marginLeft:"50px",marginTop:"70px"}}>
         
         <Buttons/>
         

         
          
      
        
        <Buttons2/>
            
       
        
     
     <table className="records-table" style={{textAlign:'center',marginTop:"30px"}}>
        <tr style={{background:"#0d1726",borderBottom:"0px"}}>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"50px"}}>Job Name</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"50px",width:"90px"}}>Job Description</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"50px"}}>Last Executed</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"50px"}}>Status</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"100px"}}>Actions</th>
          
        </tr>
       
        <tr className="rows" >
          <td className="jobname" style={{color:"#0165b6"}}>Dormant Users</td>
          <td >This job labels Users with No Activity in Last X days as Dormant</td>
          <td className="lastexecuted" style={{color:"lightgrey"}}>Oct 18 2022</td>
          <td style={{color:"green"}}>SUCCESS </td>
          <td style={{color:"lightgrey",display:"flex",gap:"2px",justifyContent:"center"}}>
            <div style={{backgroundColor:"green",padding:"5px",marginTop:"4px"}}>Run Now</div>
            <div className="configure">Configure</div>
          </td>
          
        </tr>
        <tr className="rows" >
          <td className="jobname" style={{color:"#0165b6"}}>Flight Risk Users </td>
          <td >This job labels Users who are going to depart in next X days as Flight Riskt</td>
          <td className="lastexecuted" style={{color:"lightgrey"}}>Oct 18 2022</td>
          <td style={{color:"RED"}}>FAILED </td>
          <td style={{color:"lightgrey",display:"flex",gap:"2px",justifyContent:"center"}}>
            <div style={{backgroundColor:"green",padding:"5px",marginTop:"4px"}}>Run Now</div>
            <div className="configure">Configure</div>
          </td>
          
        </tr>
        <tr className="rows" >
          <td className="jobname" style={{color:"#0165b6"}}>Privileged Users </td>
          <td >This job labels Privileged Users</td>
          <td className="lastexecuted" style={{color:"lightgrey"}}>Oct 17 2022</td>
          <td style={{color:"lightgrey"}}>	RUNNING </td>
          <td style={{color:"lightgrey",display:"flex",gap:"2px",justifyContent:"center"}}>
            <div style={{backgroundColor:"green",padding:"5px",marginTop:"4px"}}>Run Now</div>
            <div className="configure">Configure</div>
          </td>
          
        </tr>

        
        

        


      </table>
    </div>
    
  )
}

export default comp6
