import { useNavigate } from "react-router-dom"
function Comp11() {
  var navigate=useNavigate();
  return (
    <div>
      <h1 style={{position:"fixed",top:"30%",left:"10%",width:"500px",height:"200px", backgroundColor:"red", textAlign:"center"}}>comp11</h1>
    </div>
  )
}

export default Comp11