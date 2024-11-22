import { NavLink } from 'react-router-dom';
import "./datatrends.css"
import Buttons from '../buttons/buttons';
function Datatrend() {
  return (
    <div style={{marginLeft:"50px"}}>
        <Buttons/>
             
             <p >choose dataset</p>
             <div className='choosedataset'>
                 <NavLink to={"/#"} >Windows AD Activity</NavLink>
                 <NavLink to={"/#"} >Palo Alto traffic Activity </NavLink>
                 <NavLink to={"/#"} >Okta Activity </NavLink>
                 <NavLink to={"/#"} >Sophos Activity</NavLink>
                 <NavLink to={"/#"} >CrowdStrike Activity </NavLink>
                 <NavLink to={"/#"} >Zscaler Activty</NavLink>
                 <NavLink to={"/#"} >SAP Security</NavLink>
                 <NavLink to={"/#"} >Honeywell Activity </NavLink>
                 <NavLink to={"/#"} >Lenel Activity</NavLink>
                 <NavLink to={"/#"} >ASA Activity</NavLink>
                 <NavLink to={"/#"} >Duo Activity</NavLink>
                 <NavLink to={"/#"} >Proxy Activity</NavLink>
                 <NavLink to={"/#"} >AWS_Cloudtrail Activity</NavLink>
                 <NavLink to={"/#"} >AWS_GuardDuty Activity </NavLink>
                 <NavLink to={"/#"} >HealthCareClaim Activity</NavLink>
                 <NavLink to={"/#"} > CreditCard Activity </NavLink>
                 <NavLink to={"/#"} >VPN Activity </NavLink>
                 <NavLink to={"/#"} >PAM Activity </NavLink>
                 <NavLink to={"/#"} >O365 Activity</NavLink>
                 <NavLink to={"/#"} >O365 Message Trace </NavLink>
                 <NavLink to={"/#"} >Beyond Trust</NavLink>
                 <NavLink to={"/#"} >Azure AD Activity</NavLink>
                 <NavLink to={"/#"} >Zoom Activity </NavLink>
                 <NavLink to={"/#"} >Linux </NavLink>
                 <NavLink to={"/#"} >CustomDataset</NavLink>
                 <NavLink to={"/#"} >Code42</NavLink>
                 <NavLink to={"/#"} >Force_Point </NavLink>
                 <NavLink to={"/#"} >Qualys</NavLink>
                 <NavLink to={"/#"} >Financial Data </NavLink>
                 <NavLink to={"/#"} >AM activity</NavLink>
                 <NavLink to={"/#"} >Oracle Data </NavLink>
                 <NavLink to={"/#"} >SIEMENS Data</NavLink>
                 <NavLink to={"/#"} >Ping Data </NavLink>
                 <NavLink to={"/#"} >Cloudera Data </NavLink>
                 <NavLink to={"/#"} >SailPoint Data</NavLink>
                 <NavLink to={"/#"} >Traceable</NavLink>
                 <NavLink to={"/#"} >Tenable Host Activity </NavLink>
                 <NavLink to={"/#"} >Tenable Vulnarability Activity</NavLink>
                 <NavLink to={"/#"} >AWS Cloudtrail</NavLink>
                 <NavLink to={"/#"} >Tripwire Data</NavLink>
                 <NavLink to={"/#"} >Active Directory Activity </NavLink>
                 <NavLink to={"/#"} >CSalesforce Activity </NavLink>
                 <NavLink to={"/#"} >Application Logs </NavLink>
                 <NavLink to={"/#"} >AWS Cloudfront Logs </NavLink>
                 <NavLink to={"/#"} >okta Test  </NavLink>
                 <NavLink to={"/#"} >Demo Test Data  </NavLink>
                 <NavLink to={"/#"} >Web Interface Portal </NavLink>
                 <NavLink to={"/#"} >OpenVPN  </NavLink>
                 <NavLink to={"/#"} >Net Banking </NavLink>
                 <NavLink to={"/#"} >Teradata-CSR </NavLink>
                 <NavLink to={"/#"} >TeraData-2  </NavLink>
                 <NavLink to={"/#"} >DocVault Cloud  </NavLink>
                 <NavLink to={"/#"} >AWS WAF  </NavLink>
             </div>

             
             <p >Windows AD Activity Trend</p>
              
             
            <div style={{border:"3px solid #0992ad5c",borderRadius:"10px",zIndex:"10"}}>
               <div className='graphbtn' >
                   <NavLink to={"/*"} >Event Date </NavLink>
                   <NavLink to={"/*"} >Ingestion Date</NavLink>

               </div>

              <svg width={800} height={250} viewBox='0 0 800 100 ' transform='translate(20,30)'>
                  <path d='M 250 -200 V170' strokeWidth="2" stroke='yellow' transform='translate(0,-40)'></path>

                  <g>
                    <text x={40} y={-20} fill='grey' fontSize={50}>0.78M</text>
                    <text  x={40} y={20}> 
                      <tspan fill='#0066b8' dx={-10} >Start Date:</tspan>
                      <tspan fill='white' dx={30} >Jan 1 2000</tspan>
                    </text>
                    <text  x={40} y={50}> 
                      <tspan fill='#0066b8' dx={-10} >End Date:</tspan>
                      <tspan fill='white' dx={30} >Jun 20 2000 </tspan>
                    </text>
                    <text  x={40} y={80}> 
                      <tspan fill='#0066b8' dx={-10} >Attributes:</tspan>
                      <tspan fill='white' dx={30} >53 </tspan>
                    </text>
                  </g>

                  <g transform='translate(260,-30)'>
                    <g stroke='gray'strokeWidth={1}>
                      <path d='M80 20 H500'></path>
                      <path d='M80 80 H500'></path>
                      
                    </g>
                    <g fill='lightgrey' opacity={0.8} fontSize={12}>
                      <text x={40} y={25}>250</text>
                      <text x={40} y={85}>50</text>
                    </g>
                    <g fill='lightgrey' fontSize={10} fontFamily='Arial, Helvetica, sans-serif'>
                      <text x={-76} y={140} transform="rotate(-55)">May 22, 2022</text>
                      <text x={-62} y={160} transform="rotate(-55)">May 24, 2022</text>
                      <text x={-47} y={180} transform="rotate(-55)">May 26, 2022</text>
                      <text x={-33} y={200} transform="rotate(-55)">May 29, 2022</text>
                      <text x={-19} y={220} transform="rotate(-55)">May 31, 2022</text>
                      <text x={2} y={240} transform="rotate(-55)">Jun 2, 2022</text>
                      <text x={14} y={260} transform="rotate(-55)">Jun 4, 2022</text>
                      <text x={28} y={280} transform="rotate(-55)">Jun 6, 2022</text>
                      <text x={40} y={300} transform="rotate(-55)">Jun 8, 2022</text>
                      <text x={49} y={320} transform="rotate(-55)">Jun 10, 2022</text>
                      <text x={62} y={340} transform="rotate(-55)">Jun 12, 2022</text>
                      <text x={76} y={360} transform="rotate(-55)">Jun 15, 2022</text>
                      <text x={89} y={380} transform="rotate(-55)">Jun 18, 2022</text>
                      <text x={102} y={400} transform="rotate(-55)">Jun 20, 2022</text>
                    </g>
                  </g>
              </svg>

            </div>
    </div>
  )
}

export default Datatrend
