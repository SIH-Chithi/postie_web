"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend
} from "@/components/ui/chart"



type ChartData = {
  name: string;
  value: number;
  fill: string;
};

type ChartConfig = {
  tooltip: {
    label: React.ReactNode;
  };
  legend: {
    label: React.ReactNode;
  };
};

const chartConfig: ChartConfig = {
  tooltip: {
    label: <ChartTooltipContent />,
  },
  legend: {
    label: <ChartLegend />,
  },
};

interface IChart {
  chartData: ChartData[];
}

export function ComplaintPiechart({ chartData }: IChart) {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0)
  }, [chartData]);

  return (
    <Card className="flex w-full flex-col">
      <CardHeader className="items-center pb-6">
        <CardTitle>Type Complaint</CardTitle>
        <CardDescription>Total Complaint Type for today</CardDescription>
      </CardHeader>
      <CardContent className="">
        <ChartContainer config={chartConfig} className="mx-auto w-full aspect-square max-h-[200px]">
          <PieChart className="h-full w-full">
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
            
              data={chartData}
              dataKey="value"  
              nameKey="name"  
              innerRadius={80}
              outerRadius={100}
              strokeWidth={8}
              paddingAngle={1}
            
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Complaint
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
