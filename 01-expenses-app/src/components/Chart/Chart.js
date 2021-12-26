import ChartBar from './ChartBar.js';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(({ value }) => value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          key={dataPoint.id}
        />
      ))}
    </div>
  );
};

export default Chart;
