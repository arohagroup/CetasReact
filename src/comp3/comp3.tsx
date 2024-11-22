import { useNavigate } from "react-router-dom"
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,LinearScale, BarElement, layouts, plugins, Scale, scales } from 'chart.js'
import { Bar} from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);

const data = {
  labels: ["Customer", "Business", "class        ", "employee"],
  datasets: [
    { 
      data: [12, 29,14,22],
      backgroundColor: [
        'red',
        'blue',
        'green',
        'yellow'
      ],
      
      borderWidth: 1,
    },
  ],
};
const option1:any={indexAxis:'y',
  plugins: { 
   legend: { 
     display:false }},
 maintainAspectRatio:false,
 scales:{
   x:{
     grid:{
       color:"lightgrey",
       tickColor:false}},
   y:{
     grid:{
       display:false
     }
   },
 }
}

 

function Comp3() {
  var navigate=useNavigate();
  return (
    <div style={{width:"200px",height:"400px",marginLeft:"40px",borderRadius:"20px",marginTop:"60px",padding:"10px",backgroundColor:"#171728"}}>
<Bar data={data} options={option1}/>
    </div>
  )
}

export default Comp3