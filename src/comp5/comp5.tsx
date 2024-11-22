
import "./comp5.css"

import Buttons2 from "./buttons/buttons2"
import Buttons from "./buttons/buttons"
function comp5() {
  return (
    <div style={{marginLeft:"50px",marginTop:"70px"}}>
         <div >
         <Buttons/>
         

         </div>
          
      
        
        <Buttons2/>
            
       
        <div style={{width:"100%",height:"200px",border:"2px solid lightgrey",textAlign:"center",marginTop:"20px"}}>graph to be added</div>

        <div style={{display:"flex",gap:"10px",marginLeft:"10px",marginTop:"10px"}}>
          <div style={{background:"#099bb5",padding:"4px" ,color:"lightgrey",borderRadius:"5px"}}>53</div>
          <div style={{padding:"4px" ,color:"lightgrey"}}>Records Found</div>
          <div style={{background:"#099bb5",padding:"4px" ,color:"lightgrey",borderRadius:"5px",marginLeft:"550px"}}>DD</div>
          <div className="btn1">Enable All</div>
          <div className="btn2">Disable All</div>
        </div>
     
     <table className="records-table" style={{textAlign:'center',marginTop:"30px"}}>
        <tr style={{background:"#0d1726",borderBottom:"0px"}}>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"10px"}}>Model ID</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"70px"}}>Model Name</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"10px"}}>Model Type</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"10px"}}>Target Entity</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"10px"}}>Risk Score</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"20px"}}>Confidence</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"30px"}}>Dataset</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"20px"}}>Threat Category</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"20px"}}>Status</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"30px"}}>Action</th>
        </tr>
       
        <tr className="rows" >
          <td className="dataset" >10350</td>
          <td className="modelname"style={{color:"#0165b6"}}>Tor communication observed</td>
          <td style={{color:"lightgrey"}}>pattern match</td>
          <td style={{color:"lightgrey"}}>HOST</td>
          <td style={{color:"lightgrey"}}>95</td>
          <td className="confidence" ><div>LOW</div></td>
          <td style={{color:"lightgrey"}}>Teradata-CRS</td>
          <td style={{color:"lightgrey"}}>Exfiltration</td>
          <td className="status" style={{color:"lightgrey"}}>000</td>
          <td className="Action" style={{color:"#0165b6"}}>clone 00 00</td>
        </tr>


        <tr className="rows" >
          <td className="dataset" >10304</td>
          <td className="modelname"style={{color:"#0165b6"}}>Cetas Sandbox - Malicious Executable Launched Tor Communication </td>
          <td style={{color:"lightgrey"}}>pattern match</td>
          <td style={{color:"lightgrey"}}>HOST</td>
          <td style={{color:"lightgrey"}}>85</td>
          <td className="confidence" ><div>LOW</div></td>
          <td style={{color:"lightgrey"}}>Teradata-CRS</td>
          <td style={{color:"lightgrey"}}>Exfiltration</td>
          <td className="status" style={{color:"lightgrey"}}>000</td>
          <td className="Action" style={{color:"#0165b6"}}>clone 00 00</td>
        </tr>
        
        <tr className="rows" >
          <td className="dataset" >10303</td>
          <td className="modelname"style={{color:"#0165b6"}}>Cetas Sandbox - Suspicious Activity Detected </td>
          <td style={{color:"lightgrey"}}>pattern match</td>
          <td style={{color:"lightgrey"}}>HOST</td>
          <td style={{color:"lightgrey"}}>75</td>
          <td className="confidence" ><div style={{backgroundColor:"green"}}>HIGH</div></td>
          <td style={{color:"lightgrey"}}>Teradata-CRS</td>
          <td style={{color:"lightgrey"}}>Exfiltration</td>
          <td className="status" style={{color:"lightgrey"}}>000</td>
          <td className="Action" style={{color:"#0165b6"}}>clone 00 00</td>
        </tr>
        
        

        


      </table>
    </div>
    
  )
}

export default comp5
