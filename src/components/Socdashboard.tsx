import React, { useState, useEffect } from 'react';
import Buttons1 from "./buttons1";
import './Socdashboard.css';
import user from "../images/TimelineIcons/USER.svg";
import ip from "../images/TimelineIcons/IP.svg";
import host from "../images/TimelineIcons/HOST.svg";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import DashboardService from './services/dashboardservices';  // Importing the service

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const alertData = {
  labels: ["Total Alerts", "Risky Alerts", ["Noisy", "Alerts(auto", "-suppressed)"], ["Noisy", "Alerts(Manually", "-suppressed)"]],
  datasets: [
    {
      barThickness: 15,
      categoryPercentage: 0.1,
      data: [48300, 16400, 30400, 11111],
      backgroundColor: ['red', 'blue', 'green', 'yellow'],
      borderWidth: 1,
    },
  ],
};

const incidentData = {
  labels: [["Open", "Alerts"], ["True", "Positives"], ["False", "Positives"], ["Wrong", "Detections"]],
  datasets: [
    {
      barThickness: 15,
      categoryPercentage: 0.1,
      data: [24, 30, 102, 229],
      backgroundColor: ['red', 'blue', 'green', 'yellow'],
      borderWidth: 1,
    },
  ],
};

const chartOptions: any = {
  indexAxis: 'y',
  plugins: {
    legend: { display: false },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { color: "lightgrey", tickColor: false },
      min: 0,
      max: 55600,
      beginAtZero: true,
      ticks: { color: "lightgrey", count: 7, font: { size: 8 } },
    },
    y: {
      grid: { display: false },
      ticks: { font: { size: 10 } },
    },
  },
};

function Socdashboard() {
  const navigate = useNavigate();
  const [entityData, setEntityData] = useState({
    highRiskUsers: 0,
    highRiskIPs: 0,
    highRiskHosts: 0,
  });

  useEffect(() => {
    DashboardService.getDashboardCounts('all')
      .then((data) => {
        console.log(data);
        // setEntityData({
        //   highRiskUsers: data.highRiskUsers || 0,
        //   highRiskIPs: data.highRiskIPs || 0,
        //   highRiskHosts: data.highRiskHosts || 0,
        // });
      })
      .catch((error: unknown) => {
        console.error("Error fetching entity overview data:", error);
      });
  }, []);

  return (
    <div style={{ padding: "30px 0px 0px 80px", margin: "0px" }}>
      <Buttons1 />
      <div className="main-pannel" style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "auto auto", gridRowGap: "90px", padding: "0px" }}>
        {/* Alert Overview */}
        <div className="alert-overview" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <div style={{ fontWeight: "bold", padding: "30px 0px 10px 0px", textTransform: "uppercase", borderBottom: "3px solid #2c5551" }}>ALERT OVERVIEW</div>
          <div style={{ fontSize: "1px", margin: "30px 0px 0px 0px", width: "200px", height: "450px", borderRadius: "20px", backgroundColor: "#171728" }}>
            <Bar data={alertData} options={chartOptions} />
          </div>
        </div>

        {/* Incident Overview */}
        <div className="incident-overview" style={{ paddingLeft: "20px", paddingRight: "0px", display: "flex", columnGap: "10px" }}>
          <div>
            <div style={{ fontWeight: "bold", padding: "30px 0px 10px 0px", width: "380px", textTransform: "uppercase", maxWidth: "1000px", borderBottom: "3px solid #2c5551" }}>
              INCIDENT OVERVIEW
            </div>
            <div style={{ width: "230px", margin: "30px 0px 0px 0px", height: "450px", backgroundColor: "#171728", borderRadius: "20px" }}>
              <Bar data={incidentData} options={chartOptions} />
            </div>
          </div>

          {/* Entity Overview */}
          <div>
            <div style={{ fontWeight: "bold", padding: "30px 0px 10px 0px", textTransform: "uppercase", borderBottom: "3px solid #2c5551", width: "380px" }}>ENTITY OVERVIEW</div>
            <svg height={480} width={190} viewBox="0 0 190 480" style={{ margin: "20px 0px 0px 0px", padding: "10px" }}>
              <rect fill="lightgrey" opacity={0.1} height={440} width={190} rx={20} ry={20}></rect>
              <g>
                <rect height={130} width={150} x={20} y={10} rx={20} ry={20}></rect>
                <text fill="red" x={90} y={70} style={{ fontSize: "40px" }}>{entityData.highRiskUsers}</text>
                <text fill="white" x={30} y={100} fontSize={13}>
                  <tspan dx={0}>High-Risk</tspan>
                  <tspan dx={-55.8} dy={20}>Users</tspan>
                </text>
                <image href={user} width={50} height={50} x={30} y={25} />
              </g>
              <g>
                <rect height={130} width={150} x={20} y={150} rx={20} ry={20}></rect>
                <text fill="red" x={90} y={215} style={{ fontSize: "40px" }}>{entityData.highRiskIPs}</text>
                <text fill="white" x={30} y={245} fontSize={13}>
                  <tspan dx={0}>High-Risk</tspan>
                  <tspan dx={-55.8} dy={20}>IPs</tspan>
                </text>
                <image href={ip} width={50} height={50} x={30} y={170} />
              </g>
              <g>
                <rect height={130} width={150} x={20} y={290} rx={20} ry={20}></rect>
                <text fill="red" x={90} y={355} style={{ fontSize: "40px" }}>{entityData.highRiskHosts}</text>
                <text fill="white" x={30} y={385} fontSize={13}>
                  <tspan dx={0}>High-Risk</tspan>
                  <tspan dx={-55.8} dy={20}>Hosts</tspan>
                </text>
                <image href={host} width={50} height={50} x={30} y={310} />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socdashboard;
