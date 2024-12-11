"use client"

import { Bar, BarChart, XAxis } from "recharts"

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
} from "@/components/ui/chart"

const chartData = [
  { date: "2024-01", speedpost: 450, expressparcel: 300, mediapost: 200, logisticpost: 100 },
  { date: "2024-02", speedpost: 300, expressparcel: 200, mediapost: 100, logisticpost: 50 },
  { date: "2024-03", speedpost: 200, expressparcel: 150, mediapost: 100, logisticpost: 50 },
  { date: "2024-04", speedpost: 400, expressparcel: 250, mediapost: 150, logisticpost: 50 },
  { date: "2024-05", speedpost: 200, expressparcel: 150, mediapost: 100, logisticpost: 50 },
  { date: "2024-06", speedpost: 300, expressparcel: 200, mediapost: 100, logisticpost: 50 },
  { date: "2024-07", speedpost: 500, expressparcel: 350, mediapost: 200, logisticpost: 150 },
  { date: "2024-08", speedpost: 400, expressparcel: 250, mediapost: 150, logisticpost: 100 },
  { date: "2024-09", speedpost: 300, expressparcel: 200, mediapost: 100, logisticpost: 50 },
  { date: "2024-10", speedpost: 600, expressparcel: 450, mediapost: 300, logisticpost: 200 },
  { date: "2024-11", speedpost: 700, expressparcel: 500, mediapost: 400, logisticpost: 250 },
  { date: "2024-12", speedpost: 800, expressparcel: 600, mediapost: 500, logisticpost: 300 },
]

const chartConfig = {
  activities: {
    label: "Activities",
  },
  running: {
    label: "Running",
    color: "hsl(var(--chart-1))",
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-2))",
  },
}

export function ItemTypeDashBoard() {
  return (
    <Card className="w-full">
      <CardHeader className="items-center">
        <CardTitle>Service Usage Dashboard</CardTitle>
        <CardDescription>Overview of service usage by month.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-[80%] justify-center mx-auto" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                const date = new Date(value + "-01"); 
                return date.toLocaleString("en-US", { month: "short" }); 
              }}
              angle={-45} 
              textAnchor="end" 
            />
            <Bar
              dataKey="running"
              stackId="a"
              fill="#cd314f"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill="var(--color-swimming)"
              radius={[0, 0, 0, 0]}
            />
            
            {/* Bars */}
            <Bar
              dataKey="speedpost"
              stackId="a"
              fill="#ff5754"
              radius={[0, 0, 0, 0]}
              name="Speed Post"
            />
            <Bar
              dataKey="expressparcel"
              stackId="a"
              fill="#ff7976"
              radius={[0, 0, 0, 0]}
              name="Express Parcel"
            />
            <Bar
              dataKey="mediapost"
              stackId="a"
              fill="#F7C2C1"
              radius={[0, 0, 0, 0]}
              name="Media Post"
            />
            <Bar
              dataKey="logisticpost"
              stackId="a"
              fill="#fbe1e1"
              radius={[4, 4, 0, 0]}
              name="Logistic Post"
            />
            <ChartTooltip
              content={
                <ChartTooltipContent labelKey="activities" indicator="line" />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
