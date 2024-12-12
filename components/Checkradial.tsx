"use client"

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ServiceChartProps {
  data: {
    browser: string;
    visitors: number;
    fill: string;
  }[];
  config: ChartConfig;
  title: string;
  description: string;
  footerText: string;
  trendText: string;
}

export function ServiceChart({
  data,
  config,
  title,
  description,
  footerText,
  trendText,
}: ServiceChartProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={data}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background>
              <LabelList
                position="insideStart"
                dataKey="browser"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {trendText} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">{footerText}</div>
      </CardFooter>
    </Card>
  );
}

// Example Usage
const serviceUsageData = [
  {
    browser: "Service A",
    visitors: 275,
    fill: "var(--color-chrome)",
  },
  {
    browser: "Service B",
    visitors: 200,
    fill: "var(--color-safari)",
  },
  {
    browser: "Service C",
    visitors: 187,
    fill: "var(--color-firefox)",
  },
  {
    browser: "Service D",
    visitors: 173,
    fill: "var(--color-edge)",
  },
  {
    browser: "Other Services",
    visitors: 90,
    fill: "var(--color-other)",
  },
];

const serviceChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Service A",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Service B",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Service C",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Service D",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other Services",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Example() {
  return (
    <ServiceChart
      data={serviceUsageData}
      config={serviceChartConfig}
      title="Service Usage"
      description="January - June 2024"
      footerText="Showing total usage for the last 6 months"
      trendText="Trending up by 5.2% this month"
    />
  );
}