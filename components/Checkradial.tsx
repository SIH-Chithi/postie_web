"use client";

import { PolarGrid, RadialBar, RadialBarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

type ServiceType = {
  name: string;
  value: number;
  fill: string; // Added fill property for colors
};

interface IChart {
  chartData: ServiceType[];
}

export function CheckRadial({ chartData }: IChart) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Service Type</CardTitle>
        <CardDescription>Different types of services </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          className="mx-auto aspect-square max-h-[250px]"
          config={{ /* Add your ChartConfig properties here */ }}
        >
          <RadialBarChart
            data={chartData}
            innerRadius={70}
            outerRadius={120}
            startAngle={90}
          >
            <PolarGrid gridType="circle" />
            <RadialBar dataKey="value" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="name" />}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
