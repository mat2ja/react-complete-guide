import React from 'react';

import './ChartBar.css';

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeightValue = 0;

  if (maxValue && maxValue > 0) {
    barFillHeightValue = Math.round((value / maxValue) * 100) / 100;
  }

  const barFillHeight = `scaleY(${barFillHeightValue})`;

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ transform: barFillHeight }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
