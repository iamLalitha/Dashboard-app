import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './TopProductCard.css';

const TopProductsCard = () => {
  // Dummy data
  const data = [
    { name: 'Basic Tees', percentage: 55, backgroundColor: '#A8E4A0' },
    { name: 'Custom Short Pants', percentage: 31, backgroundColor: '#FEDC56' },
    { name: 'Super Hoodies', percentage: 14, backgroundColor: '#EA3C53' },
  ];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percentage }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="white" textAnchor="middle">
        {`${percentage}%`}
      </text>
    );
  };

  return (
    <div className="top-products-card">
      <div className="card-header">
        <h3>Top Products</h3>
        <span className="date">May-jun 2021</span>
      </div>
      <div className='chart-legend-container'>
      <div className="piechart-container">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="percentage"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={70}
              innerRadius={40}
              fill="#8884d8"
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.backgroundColor} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="pielegend">
        <div className="pielegend-dot tees"></div>
        <span>Basic Tees</span>
        <div className="pielegend-dot hoodies"></div>
        <span>Super Hoodies</span>
        <div className="pielegend-dot pants"></div>
        <span>Custom Short Pants</span>
      </div>
      </div>
    </div>
  );
};

export default TopProductsCard;



