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

type ChartData = {
  date: string
  speedpost: number
  expressparcel: number
  mediapost: number
  logisticpost: number
}

interface ItemTypeDashBoardProps {
  chartData: ChartData[]
}

interface ItemTypeDashBoardProps {
  dataType: "monthly" | "weekly" | "yearly"; 
}

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

export function ItemTypeDashBoard(
  { chartData ,dataType }: ItemTypeDashBoardProps

) {
  return (
    <Card className="w-full">
      <CardContent>
        <ChartContainer className="w-[80%] justify-center mx-auto" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey={dataType}
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
