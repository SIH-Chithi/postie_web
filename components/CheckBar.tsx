"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type ChartData = {
  date: string;
  check: number;
  
};

interface ICheckBar {
  data: ChartData[];
  heading: string;

}
interface ICheckBar {
  dataType: "monthly" | "weekly" | "yearly"; 
}

export function CheckBar({ data ,heading,dataType }: ICheckBar) {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Daily {heading} </CardTitle>
        <CardDescription>Chart showing last 7 days {heading}.</CardDescription>
      </CardHeader>
      <CardContent className="mx-auto">
        <ChartContainer className="mx-auto " config={{ /* your config here */ }}>
          <BarChart width={500} height={300} data={data}>
            <XAxis
              dataKey={dataType}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <Bar
              dataKey="check"
              fill="#ff5754"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="line" />}
              cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
              defaultIndex={0}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}



