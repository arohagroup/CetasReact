import React, { useState, useEffect } from 'react';
import Buttons1 from "./buttons1";
import './Socdashboard.css';
import user from "../images/TimelineIcons/USER.svg";
import ip from "../images/TimelineIcons/IP.svg";
import host from "../images/TimelineIcons/HOST.svg";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { environment } from '../core/services/environment';
import DashboardService from './API/dashboardservices';  // Importing the service

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Type definition for alert data
interface AlertData {
  labels: (string | string[])[];  // Allow labels to be either strings or arrays of strings
  datasets: Array<{
    barThickness: number;
    categoryPercentage: number;
    data: number[];  // Data for the graph
    backgroundColor: string[];  // Array of colors
    borderWidth: number;
  }>;
}

// Chart options (customize as needed)
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

// Incident data (hardcoded for now)
interface IncidentData {
  labels: (string | string[])[];  // Labels for the bar chart
  datasets: Array<{
    barThickness: number;
    categoryPercentage: number;
    data: number[];  // Data for the graph
    backgroundColor: string[];  // Array of colors
    borderWidth: number;
  }>;
}

// Socdashboard Component (main dashboard)
function Socdashboard() {
  const navigate = useNavigate();
  const [entityData, setEntityData] = useState({
    highRiskUsers: 10,
    highRiskIPs: 0,
    highRiskHosts: 0,
  });

  // State to store alert data (coming from the DashboardService)
  const [alertData, setAlertData] = useState<AlertData>({
    labels: [],
    datasets: [
      {
        barThickness: 15,
        categoryPercentage: 0.1,
        data: [0, 0, 0, 0],  // Default values for data
        backgroundColor: ['red', 'blue', 'green', 'yellow'],
        borderWidth: 1,
      },
    ],
  });
  const [incidentData, setIncidentData] = useState<IncidentData>({
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
  });
  


  useEffect(() => {
    getAlertCounts();
    getIncidentCounts();
    getEntityCounts();
  }, []);

  // Fetch alert details from DashboardService
  const getAlertCounts = () => {

   DashboardService.getAlertDetails()
      .then((res: any) => {
        const {totalAlertCount, riskAlertCount, autoAlertCount, manualAlertCount}=res.data;
        // const totalAlerts = res.data.totalAlertCount;
        // const riskyAlerts = res.data.riskAlertCount;
        // const noisyAutoSuppressed = res.data.autoAlertCount;
        // const noisyManuallySuppressed = res.data.manualAlertCount;
    //     "manualAlertCount": 111,
    // "autoAlertCount": 30269,
    // "riskAlertCount": 16211,
    // "totalAlertCount": 46591
    console.log(totalAlertCount, riskAlertCount, autoAlertCount, manualAlertCount)

        const newAlertData = {
          labels: [
            'Total Alerts',
            'Risky Alerts',
            ['Noisy', 'Alerts(auto', '-suppressed)'],
            ['Noisy', 'Alerts(Manually', '-suppressed)'],
          ],
          datasets: [
            {
              barThickness: 15,
              categoryPercentage: 0.1,
              data: [totalAlertCount, riskAlertCount, autoAlertCount, manualAlertCount],
              backgroundColor: ['red', 'blue', 'green', 'yellow'],
              borderWidth: 1,
            },
          ],
        };

        // Log to check data
        console.log('Alert Data:', newAlertData); // Log data to check
        setAlertData(newAlertData);
      })
      .catch((error: unknown) => {
        console.error('Error fetching alert details:', error);
      });
  }


  const getIncidentCounts = () => {

    DashboardService.getDashboardCounts('ALL')
    // "totalTruePositivesCount": 102,
    // "totalFalsePositivesCount": 30,
    // "totalWrongDetectionsCount": 24,
    // "actions": 229,

      .then((res: any) => {
        const { totalTruePositivesCount, totalFalsePositivesCount, totalWrongDetectionsCount, actions } = res.data;
        console.log(actions, totalTruePositivesCount, totalFalsePositivesCount, totalWrongDetectionsCount)

        const newIncidentData = {
          labels: [
            ['Open', 'Alerts'],
            ['True', 'Positives'],
            ['False', 'Positives'],
            ['Wrong', 'Detections'],
          ],
          datasets: [
            {
              barThickness: 15,
              categoryPercentage: 0.1,
              data: [actions, totalTruePositivesCount, totalFalsePositivesCount, totalWrongDetectionsCount],
              backgroundColor: ['red', 'blue', 'green', 'yellow'],
              borderWidth: 1,
            },
          ],
        };
        setIncidentData(newIncidentData);
      })
      .catch((error: unknown) => {
        console.error('Error fetching incident details:', error);
      });
  }


  // Fetch entity data (e.g., high-risk users, IPs, hosts)
  const getEntityCounts = () => {

    DashboardService.getDashboardCounts('ALL')
      .then((res: any) => {
        
        setEntityData({
          highRiskUsers: res.data.highRiskUserCount,
          highRiskIPs: res.data.highRiskIPCount,
          highRiskHosts: res.data.highRiskHostnameCount,

        });
        
      })
      


      .catch((error: unknown) => {
        console.error("Error fetching entity overview data:", error);
      });
      
  }
  

  return (
    <div style={{ padding: "30px 0px 0px 80px", margin: "0px" }}>
      <Buttons1 />
      <div className="main-pannel" style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "auto auto", gridRowGap: "90px", padding: "0px" }}>
        {/* Alert Overview */}
        <div className="alert-overview" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <div>
            <div style={{ fontWeight: "bold", padding: "30px 0px 10px 0px", textTransform: "uppercase", borderBottom: "3px solid #2c5551" }}>
              ALERT OVERVIEW
            </div>
            <div style={{ fontSize: "1px", margin: "30px 0px 0px 0px", width: "200px", height: "450px", borderRadius: "20px", backgroundColor: "#171728" }}>
              {alertData.datasets[0].data.length > 0 ? (
                <Bar data={alertData} options={chartOptions} />
              ) : (
                <div>Loading...</div>
              )}
            </div>
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
            <div style={{ fontWeight: "bold", padding: "30px 0px 10px 0px", textTransform: "uppercase", borderBottom: "3px solid #2c5551", width: "380px" }}>
              ENTITY OVERVIEW
            </div>
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
                <image href={host} width={50} height={50} x={30} y={300} />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socdashboard;
