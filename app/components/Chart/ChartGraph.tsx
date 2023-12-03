import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartGraph({ data, YKey }: GraphProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
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
        <XAxis dataKey="created_at" tickFormatter={formatX} dy={10} />
        <YAxis
          tickCount={10}
          domain={[20, 200]}
          tickFormatter={(yTick: string) => {
            if (Number(yTick) < 40) return "";
            else return yTick;
          }}
        />
        <Tooltip />
        <Line
          type="stepAfter"
          dot={{ fill: "red", stroke: "red" }}
          dataKey={YKey}
          stroke="#ff0000"
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const formatX = (xTick: string) => {
  return `${xTick.substring(5, 7)}/${xTick.substring(8, 10)}`;
};
