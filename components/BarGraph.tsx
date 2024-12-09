"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const chartConfig: ChartConfig = {
  tooltip: {
    label: <ChartTooltipContent />,
  },
  legend: {
    label: <ChartLegend />,
  },
};

const colors = [
  "#f35757",
  "#f0d916",
  "#ca1407",
  "#ffd966",
  "#b2170d",
  "#f1c232",
  "#e24034",
];
type ChartData = {
  day: string;
  number_cons: number;
};

interface IChart {
  chartData: ChartData[];
}

export function Component({ chartData }: IChart) {
  return (
    <Card className="flex flex-col">
    <CardHeader className="items-center pb-0">
      <CardTitle>Traffic Status</CardTitle>
      <CardDescription>Traffic Status for last 7 days </CardDescription>
    </CardHeader>
    <ChartContainer className="h-[220px]  " config={{}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend content={<ChartLegendContent />} />

          <Bar
            dataKey="number_cons"
            radius={[4, 2, 0, 0]}
            animationBegin={0} 
            animationDuration={1500} 
            animationEasing="ease-out"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
    </Card>
  );
}
