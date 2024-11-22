import "./dataops.css"
import Buttons from '../buttons/buttons'
function Dataops() {
  return (
    <div style={{marginLeft:"50px",marginTop:"10px"}}>
        <Buttons/>
        <div className='eventmanage' style={{padding:"5px",display:"flex",gap:"14px",marginLeft:700,marginTop:"20px"}}>
            <button >Event Date</button>
            <button >Ingestion Date</button>
        </div>
        <svg height={180} width={800} viewBox="0 0 800 180"  >
           
           <g stroke="lightgrey" strokeWidth={1}>
            <path d="M 100 40 H620" />
            <path d="M 100 70 H620" />
            <path d="M 100 100 H620" />
           </g>

           <g>
            <text x={80} y={45} fill="lightgrey" fontSize={10}>50</text>
            <text x={80} y={75} fill="lightgrey" fontSize={10}>25</text>
            <text x={85} y={105} fill="lightgrey" fontSize={10}>0</text>
           </g>

           <g>
            <text x={-107} y={140} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec4,2022</text>
            <text x={-104} y={150} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec5,2022</text>
            <text x={-101} y={160} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec6,2022</text>
            <text x={-97} y={170} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec7,2022</text>
            <text x={-93} y={180} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec8,2022</text>
            <text x={-89} y={190} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec9,2022</text>
            <text x={-90.5} y={200} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec10,2022</text>
            <text x={-86.5} y={210} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec11,2022</text>            
            <text x={-83.5} y={220} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec12,2022</text>
            <text x={-79} y={230} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec13,2022</text>
            <text x={-75.9} y={240} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec14,2022</text>
            <text x={-71.9} y={250} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec15,2022</text>
            <text x={-67.9} y={260} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec16,2022</text>
            <text x={-64.9} y={270} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec17,2022</text>
            <text x={-60.5} y={280} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec18,2022</text>
            <text x={-56.9} y={290} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec19,2022</text>
            <text x={-53.9} y={300} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec20,2022</text>
            <text x={-49.9} y={310} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec21,2022</text>
            <text x={-46.9} y={320} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec22,2022</text>
            <text x={-43.5} y={330} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec23,2022</text>
            <text x={-39.9} y={340} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec24,2022</text>
            <text x={-36} y={350} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec25,2022</text>
            <text x={-33.5} y={360} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec26,2022</text>
            <text x={-29} y={370} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec27,2022</text>
            <text x={-26} y={380} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec28,2022</text>
            <text x={-23} y={390} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec29,2022</text>
            <text x={-19} y={400} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec30,2022</text>
            <text x={-16} y={410} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Dec31,2022</text>
            <text x={-5} y={420} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan1,2022</text>
            <text x={-2} y={430} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan2,2022</text>
            <text x={2} y={440} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan3,2022</text>
            <text x={5} y={450} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan4,2022</text>
            <text x={9} y={460} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan5,2022</text>
            <text x={12} y={470} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan6,2022</text>
            <text x={15} y={480} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan7,2022</text>
            <text x={19} y={490} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan8,2022</text>
            <text x={22} y={500} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan9,2022</text>
            <text x={21} y={510} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan10,2022</text>
            <text x={24} y={520} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan11,2022</text>
            <text x={27} y={530} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan12,2022</text>
            <text x={31} y={540} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan13,2022</text>
            <text x={34} y={550} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan14,2022</text>
            <text x={38} y={560} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan15,2022</text>
            <text x={41} y={570} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan16,2022</text>
            <text x={45} y={580} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan17,2022</text>
            <text x={49} y={590} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan18,2022</text>
            <text x={52} y={600} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan19,2022</text>
            <text x={56} y={610} fill="lightgrey" fontSize={10} style={{transform:"rotate(-70deg)"}}>Jan20,2022</text>
            
           </g>
           <text x={330} y={180} fill="lightgrey" fontSize={12}>Events</text>
        </svg>

        <div style={{display:"flex",gap:"10px",marginLeft:"10px",marginTop:"10px"}}>
          <div style={{background:"#099bb5",padding:"4px" ,color:"lightgrey",borderRadius:"5px"}}>53</div>
          <div style={{padding:"4px" ,color:"lightgrey"}}>Records Found</div>
          <div style={{background:"#099bb5",padding:"4px" ,color:"lightgrey",borderRadius:"5px",marginLeft:"740px"}}>DD</div>
        </div>
     
     <table className="records-table" style={{textAlign:'center',marginTop:"30px"}}>
        <tr style={{background:"#0d1726",borderBottom:"0px"}}>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"73px"}}>Dataset</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"20px"}}>Total Count</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"70px"}}>Start Date</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"70px"}}>End Date</th>
          <th style={{padding:"10px" ,color:"lightgrey",paddingInline:"70px"}}>Attributes</th>
        </tr>
       
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Sophos Activity</td>
          <td style={{color:"lightgrey"}}>2.6M</td>
          <td style={{color:"lightgrey"}}>Oct 10 2002 04:36:06</td>
          <td style={{color:"lightgrey"}}>May 30 2022 16:26:30</td>
          <td style={{color:"#0165b6"}}>14</td>
        </tr>
        
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Active Directory Activity </td>
          <td style={{color:"lightgrey"}}>1.4M </td>
          <td style={{color:"lightgrey"}}>Dec 13 2021 05:30:00</td>
          <td style={{color:"lightgrey"}}>Mar 2 2022 15:20:17</td>
          <td style={{color:"#0165b6"}}>43</td>
        </tr>
        
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Windows AD Activity  </td>
          <td style={{color:"lightgrey"}}>0.78M</td>
          <td style={{color:"lightgrey"}}>Jan 1 2000 06:31:00</td>
          <td style={{color:"lightgrey"}}>Jun 20 2022 13:30:10</td>
          <td style={{color:"#0165b6"}}>53</td>
        </tr>

        <tr >
          <td className="dataset" style={{padding:"10px"}}>Duo Activity</td>
          <td style={{color:"lightgrey"}}>0.57M</td>
          <td style={{color:"lightgrey"}}>Apr 1 2002 08:42:01</td>
          <td style={{color:"lightgrey"}}>Aug 29 2021 06:31:00</td>
          <td style={{color:"#0165b6"}}>53</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Windows AD Activity  </td>
          <td style={{color:"lightgrey"}}>0.57M</td>
          <td style={{color:"lightgrey"}}>Jan 1 2000 06:31:00</td>
          <td style={{color:"lightgrey"}}>Jun 20 2022 13:30:10</td>
          <td style={{color:"#0165b6"}}>26</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>ASA Activity </td>
          <td style={{color:"lightgrey"}}>0.53M</td>
          <td style={{color:"lightgrey"}}>Apr 1 2018 06:31:00</td>
          <td style={{color:"lightgrey"}}>Sep 13 2022 11:39:57</td>
          <td style={{color:"#0165b6"}}>18</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Okta Activity</td>
          <td style={{color:"lightgrey"}}>0.48M</td>
          <td style={{color:"lightgrey"}}>May 2 2002 14:49:29</td>
          <td style={{color:"lightgrey"}}>Jan 4 2023 06:58:12</td>
          <td style={{color:"#0165b6"}}>80</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>AWS Cloudtrail</td>
          <td style={{color:"lightgrey"}}>0.47M</td>
          <td style={{color:"lightgrey"}}>Dec 12 2021 05:23:03</td>
          <td style={{color:"lightgrey"}}>Dec 14 2021 05:29:16</td>
          <td style={{color:"#0165b6"}}>79</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Palo Alto traffic Activity 	</td>
          <td style={{color:"lightgrey"}}>0.38M 	</td>
          <td style={{color:"lightgrey"}}>Jan 11 2012 18:41:00	</td>
          <td style={{color:"lightgrey"}}>Jan 15 2023 09:11:10	</td>
          <td style={{color:"#0165b6"}}>106</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Proxy Activity 	</td>
          <td style={{color:"lightgrey"}}>0.21M 	</td>
          <td style={{color:"lightgrey"}}>Mar 2 1087 21:35:05	</td>
          <td style={{color:"lightgrey"}}>Jan 6 2022 06:11:04	</td>
          <td style={{color:"#0165b6"}}>26</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>HealthCareClaim Activity 	</td>
          <td style={{color:"lightgrey"}}>0.2M 	</td>
          <td style={{color:"lightgrey"}}>Apr 1 2018 06:31:00	</td>
          <td style={{color:"lightgrey"}}>Nov 4 2021 18:13:00	</td>
          <td style={{color:"#0165b6"}}>14</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>AWS_GuardDuty Activity 	</td>
          <td style={{color:"lightgrey"}}>0.2M 	</td>
          <td style={{color:"lightgrey"}}>Apr 1 2018 06:31:00	</td>
          <td style={{color:"lightgrey"}}>May 14 2021 16:30:00	</td>
          <td style={{color:"#0165b6"}}>39</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Honeywell Activity 	</td>
          <td style={{color:"lightgrey"}}>0.19M 	</td>
          <td style={{color:"lightgrey"}}>Apr 1 2018 06:31:00	</td>
          <td style={{color:"lightgrey"}}>Sep 14 2022 15:38:55	</td>
          <td style={{color:"#0165b6"}}>19</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Azure AD Activity 	</td>
          <td style={{color:"lightgrey"}}>0.16M 	</td>
          <td style={{color:"lightgrey"}}>Apr 1 2018 06:31:00	</td>
          <td style={{color:"lightgrey"}}>Nov 24 2021 04:22:00	</td>
          <td style={{color:"#0165b6"}}>25</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>PAM Activity 	</td>
          <td style={{color:"lightgrey"}}>0.16M 	</td>
          <td style={{color:"lightgrey"}}>Jan 14 1900 05:21:10	</td>
          <td style={{color:"lightgrey"}}>Apr 14 2022 15:08:00	</td>
          <td style={{color:"#0165b6"}}>22</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>Lenel Activity 	</td>
          <td style={{color:"lightgrey"}}>0.15M 	</td>
          <td style={{color:"lightgrey"}}>Apr 1 2018 06:31:00	</td>
          <td style={{color:"lightgrey"}}>May 19 2021 10:02:00	</td>
          <td style={{color:"#0165b6"}}>11</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>O365 Message Trace 	</td>
          <td style={{color:"lightgrey"}}>0.14M 	</td>
          <td style={{color:"lightgrey"}}>Apr 1 2018 06:31:00	</td>
          <td style={{color:"lightgrey"}}>Jan 12 2023 07:36:12	</td>
          <td style={{color:"#0165b6"}}>22</td>
        </tr>
        <tr >
          <td className="dataset" style={{padding:"10px"}}>VPN Activity 	</td>
          <td style={{color:"lightgrey"}}>0.14M 	</td>
          <td style={{color:"lightgrey"}}>Apr 1 2004 06:31:00	</td>
          <td style={{color:"lightgrey"}}>Mar 20 2022 06:50:00	</td>
          <td style={{color:"#0165b6"}}>25</td>
        </tr>
        
 

        


      </table>
    </div>
    
  )
}

export default Dataops
