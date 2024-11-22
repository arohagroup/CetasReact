import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch, FaMoon, FaSun } from 'react-icons/fa';
import '../styles/layout.css';
import logomain from '../images/CetasLogo.png';
import profile from '../images/headericons/signed-in-user.png';
import data from '../images/headericons/3.png';
import dashboard from '../images/leftnav/dashboard_active.png';
import graphimg from '../images/leftnav/graph@3x.png';
import entityimg from '../images/leftnav/entity.png';
import knowledgeimg from '../images/leftnav/knowledge@3x.png';
import warningimg from '../images/leftnav/insights_new.png';
import gearsimg from '../images/leftnav/cogs-solid.png';
import identityimg from '../images/leftnav/identity.png';
import lockimg from '../images/leftnav/lock.png';
import globeimg from '../images/leftnav/pulse.png';
import userimg from '../images/leftnav/users.png';
import calendarimg from '../images/leftnav/calendar@1.png';
import playbookimg from '../images/leftnav/playbook.png';
import projectimg from '../images/leftnav/project.png';

function Layout() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false); 
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    const body = document.body;
    if (darkTheme) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }, [darkTheme]);

  const navItems = [
    { icon: dashboard, label: 'Dashboard', route: '/' },
    { icon: graphimg, label: 'Data Operations', route: '/dataops' },
    { icon: entityimg, label: 'Entities', route: '/comp3' },
    { icon: knowledgeimg, label: 'Knowledge', route: '/comp4' },
    { icon: warningimg, label: 'Insights', route: '/comp5' },
    { icon: gearsimg, label: 'Settings', route: '/comp6' },
    { icon: identityimg, label: 'Identity', route: '/comp7' },
    { icon: lockimg, label: 'Security', route: '/comp8' },
    { icon: globeimg, label: 'Global', route: '/comp9' },
    { icon: userimg, label: 'Users', route: '/comp10' },
    { icon: calendarimg, label: 'Calendar', route: '/comp11' },
    { icon: playbookimg, label: 'Playbook', route: '/comp13' },
    { icon: projectimg, label: 'Projects', route: '/comp12' },
  ];

  return (
    <div className={`layout-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* Header */}
      <div className="header">
        <GiHamburgerMenu className="menu" onClick={toggleNav} />
        <img
          src={logomain}
          className="mainlogo"
          alt="Logo"
          onClick={() => navigate('/')}
        />
        <p className="searcht"></p>
        <FaSearch className="search" />
        <img
          className="option"
          src={profile}
          alt="Profile"
          onClick={() => navigate('/login')}
          style={{ right: '10px' }}
        />
        <img
          className="option"
          src={data}
          alt="Data"
          onClick={() => navigate('/data')}
          style={{ right: '5%' }}
        />

      
        <div className="theme-toggle">
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={darkTheme}
            />
            <span className="slider"></span>
          </label>
          {darkTheme ? <FaMoon /> : <FaSun />}
        </div>
      </div>

      
      <div className={`leftnav ${isNavExpanded ? 'expanded' : ''}`}>
        {navItems.map((item, index) => (
          <div key={index} className="nav-item" onClick={() => navigate(item.route)}>
            <img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      
      <div className={`main-content ${isNavExpanded ? 'shifted' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
