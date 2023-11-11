import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartGraph() {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 45,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickCount={8} domain={[0, "dataMax + 100"]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="bs"
          stroke="#ff0000"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const data = [
  {
    date: "231031",
    bs: 78,
  },
  {
    date: "231101",
    bs: 76,
  },
  {
    date: "231102",
    bs: 99,
  },
  {
    date: "231103",
    bs: 98,
  },
  {
    date: "231104",
    bs: 99,
  },
  {
    date: "231105",
    bs: 95,
  },
  {
    date: "231106",
    bs: 98,
  },
];
