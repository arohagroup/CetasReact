import React, { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './styles/App.css'; 

function App() {
  const [theme, setTheme] = useState<string>('dark'); 
  const navigate = useNavigate();

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

 
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}-theme`}>
      <div className="main-div">
        
        <div className="subdiv1">
          <img className="main-logo" src="./images/cetas-logo-animation.gif" alt="Logo" style={{ width: "120px" }} />
          <p style={{ lineHeight: "56px", marginTop: "0px" }}>
            Extended <br />
            Security Intelligence <br />
            and <br />
            automation <br />
            management
          </p>
        </div>

       
        <div className="subdiv2">
          <img className="cetasLogo" src="./images/CetasLogo.png" alt="Cetas Logo" />
          <form className="formPart">
            <div className="userInput-div">
              <FaUser className="icon" />
              <input className="input1" type="text" placeholder="UserID" />
            </div>
            <br />
            <div className="userInput-div">
              <FaLock className="icon" />
              <input className="input1" type="password" placeholder="Password" />
            </div>
            <br />
            <button className="buto" style={{ alignItems: 'center' }} onClick={() => { navigate("/") }}>
              SIGN IN
            </button>
          </form>
        </div>
      </div>


      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
