import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LineChartDisplay({ data }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-2">
        Water Quality Trends
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#f97316"
            name="Temperature"
          />
          <Line type="monotone" dataKey="ph" stroke="#22c55e" name="pH" />
          <Line type="monotone" dataKey="tds" stroke="#6366f1" name="TDS" />
          <Line
            type="monotone"
            dataKey="turbidity"
            stroke="#14b8a6"
            name="Turbidity"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
