import Chart from '../Chart/Chart.js';

const ExpensesChart = ({ expenses }) => {
  const getMonthName = (idx) =>
    new Date(null, idx).toLocaleString('en', { month: 'short' });

  const chartDataPoints = [...Array(12).keys()].map((i) => ({
    id: i,
    label: getMonthName(i),
    value: 0,
  }));

  expenses.forEach(({ date, amount }) => {
    const expenseMonth = date.getMonth();
    chartDataPoints[expenseMonth].value += amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
