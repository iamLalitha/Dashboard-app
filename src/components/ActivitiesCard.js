import './ActivitiesCard.css';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);


const ActivitiesCard = () => {
  // Dummy data
  const option = {
    responsive: true,
    plugins: {
      legend: {display:false },
      title: {
        display: true,
        text: "",
      },
    },
    scales: {
        x: {
            beginAtZero: true, 
            max: 500, 
            stepSize: 100,
          },
          y: {
            beginAtZero: true, 
          }, 
    },
    legend: {
        display: true,
        position: 'top', // Display legend at the top
      },
  };

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'User',
        backgroundColor: '#A8E4A0',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [500, 350, 200, 400],
      },
      {
        label: 'Guest',
        backgroundColor: '#EA3C53', 
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [400, 450, 300, 350],
      },
    ],
  };

  return (
    <div className="activities-card">
      <div className="card-header">
        <div className="card-header-left">
          <h3>Activities</h3>
          <span className="card-subtitle">May-Jun 2021</span>
        </div>
        <div className="legend">
          <div className="legend-dot user"></div>
          <span>User</span>
          <div className="legend-dot guest"></div>
          <span>Guest</span>
        </div>
      </div>
      <div className="chart-container">
        <Bar data={data} options={option} />
      </div>
    </div>
  );
};


export default ActivitiesCard;

