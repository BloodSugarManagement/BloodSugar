import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  XKey: string;
  YKey: string;
}

export default function ChartGraph({ XKey, YKey }: Props) {
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
        <XAxis dataKey="날짜" tickFormatter={formatX} dy={10} />
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
  return `${xTick.substring(2, 4)}/${xTick.substring(4, 6)}`;
};

const data = [
  {
    날짜: "231031",
    공복: 98,
    아침: 98,
    점심: 98,
    저녁: 98,
  },
  {
    날짜: "231101",
    공복: 120,
    아침: 130,
    점심: 140,
    저녁: 150,
  },
  {
    날짜: "231102",
    공복: 128,
    아침: 168,
    점심: 150,
    저녁: 137,
  },
  {
    날짜: "231103",
    공복: 140,
    아침: 147,
    점심: 159,
    저녁: 147,
  },
  {
    날짜: "231104",
    공복: 158,
    아침: 159,
    점심: 158,
    저녁: 158,
  },
  {
    날짜: "231105",
    공복: 165,
    아침: 186,
    점심: 170,
    저녁: 176,
  },
];
