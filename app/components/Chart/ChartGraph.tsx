import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
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
        <YAxis type="number" tickCount={10} domain={["dataMin", "auto"]} />
        <Tooltip />
        <Legend verticalAlign="top" formatter={formatLgd} />
        <Line
          type="stepAfter"
          dot={{ fill: "red", stroke: "red" }}
          dataKey={YKey[0]}
          stroke="#ff0000"
          activeDot={{ r: 6 }}
        />
        {YKey.length > 1 && (
          <Line
            type="stepAfter"
            dot={{ fill: "blue", stroke: "blue" }}
            dataKey={YKey[1]}
            stroke="#0000ff"
            activeDot={{ r: 6 }}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}

const formatX = (xTick: string) => {
  return `${xTick.substring(5, 7)}/${xTick.substring(8, 10)}`;
};

const formatLgd = (value: string) => {
  const pre = value.split("_")[0];
  if (pre === "empty") return "공복";
  else if (pre === "before") return "식전";
  else if (pre === "after") return "식후";
  else return null;
};
