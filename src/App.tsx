import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './styles/App.css'; 

function App() {
  const [theme, setTheme] = useState<string>('dark');
  const navigate = useNavigate();
  const location = useLocation();

  const accessToken = localStorage.getItem('accessToken');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Initialize authentication state when component mounts
  useEffect(() => {
    // Check if accessToken exists in localStorage to verify if the user is authenticated
    if (accessToken) {
      setIsAuthenticated(true);
      // Redirect to dashboard if already authenticated
      if (location.pathname === '/') {
        navigate('/dashboard'); // Or any default route like dashboard
      }
    } else {
      setIsAuthenticated(false);
      // Redirect to login page if not authenticated and the route isn't login
      if (location.pathname !== '/') {
        navigate('/');
      }
    }
  }, [accessToken, navigate, location.pathname]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const userID = (document.getElementById("userID") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    if (userID === "admin" && password === "password") {
      // On successful login, store access token and user info in localStorage
      localStorage.setItem("accessToken", "mockedAccessToken");
      localStorage.setItem("username", userID); // Optional: Store username or other user info

      setIsAuthenticated(true);
      navigate("/dashboard"); // Redirect to the dashboard after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Remove access token and clear localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username"); // Optionally remove other stored user info

    setIsAuthenticated(false);
    navigate("/"); // Redirect to login page
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}-theme`}>
      <div className="main-div">
        {/* Logo and Welcome Text */}
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

        {/* Login Form (Visible only if not authenticated) */}
        {!isAuthenticated && (
          <div className="subdiv2">
            <img className="cetasLogo" src="./images/CetasLogo.png" alt="Cetas Logo" />
            <form className="formPart" onSubmit={handleLogin}>
              <div className="userInput-div">
                <input id="userID" className="input1" type="text" placeholder="UserID" required />
              </div>
              <br />
              <div className="userInput-div">
                <input id="password" className="input1" type="password" placeholder="Password" required />
              </div>
              <br />
              <button className="buto" style={{ alignItems: 'center' }} type="submit">
                SIGN IN
              </button>
            </form>
          </div>
        )}

        {/* If authenticated, show the dashboard or a welcome message */}
        {isAuthenticated && (
          <div className="subdiv2">
            <h2>Welcome to the Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      {/* Theme Toggle Switch */}
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
