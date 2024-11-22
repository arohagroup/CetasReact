
import "./comp7.css";

import Buttons2 from "./buttons/buttons2";
import Buttons from "./buttons/buttons";
function comp7() {
  return (
    <div style={{marginLeft:"50px",marginTop:"70px"}}>
         
         <Buttons/>
         

         
          
      
        
        <Buttons2/>
            
       
        
     
     <table className="records-table" style={{textAlign:'center',marginTop:"30px"}}>
        <tr style={{background:"#0d1726",borderBottom:"0px"}}>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"10px"}}>ACCOUNT ID </th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"50px"}}>RISK SCORE </th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"50px"}}>DEPARTMENT </th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"50px"}}>TITLE </th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"50px"}}>CITY</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"50px"}}>USER TYPE</th>
        </tr>
       
        <tr className="rows" style={{padding:"30px"}} >
          <td className="jobname" style={{color:"#0165b6"}}>svcdmatrix</td>
          <td style={{color:"green"}}>0</td>
          <td className="lastexecuted" style={{color:"lightgrey"}}></td>
          <td style={{color:"green"}}> </td>
          <td style={{color:"lightgrey"}}> </td>
          <td style={{color:"lightgrey"}}>Imported  </td>
        </tr>
        <tr className="rows" style={{padding:"10px"}}>
          <td className="jobname" style={{color:"#0165b6"}}>sccm_svc</td>
          <td style={{color:"green"}}>0</td>
          <td className="lastexecuted" style={{color:"lightgrey"}}></td>
          <td style={{color:"green"}}> </td>
          <td style={{color:"lightgrey"}}> </td>
          <td style={{color:"lightgrey"}}>Imported  </td>
        </tr>
          
        <tr className="rows" style={{padding:"10px"}} >
          <td className="jobname" style={{color:"#0165b6"}}>skopesvc</td>
          <td style={{color:"green"}}>0</td>
          <td className="lastexecuted" style={{color:"lightgrey"}}></td>
          <td style={{color:"green"}}> </td>
          <td style={{color:"lightgrey"}}> </td>
          <td style={{color:"lightgrey"}}>Imported  </td>
        </tr>


      </table>
    </div>
    
  )
}

export default comp7
