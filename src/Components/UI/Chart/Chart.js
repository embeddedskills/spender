import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartDatapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const item of props.data) {
    const month = item.date.getMonth();
    chartDatapoints[month].value += item.amount;
  }

  const dataPointValues = chartDatapoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = dataPointValues.reduce((prev, next) => +prev + +next, 0);

  return (
    <div className="chart">
      {chartDatapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
