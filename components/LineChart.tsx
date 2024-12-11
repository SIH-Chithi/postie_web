"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend } from "recharts"

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
  day: string
  parcel: number
  document: number,
express: number,
  letter: number
}

interface IChart {
  chartData: ChartData[]
}

const chartConfig: ChartConfig = {
  tooltip: {
    label: <ChartTooltipContent />,
  },
}

export function Linechart({ chartData }: IChart) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-10">
        <CardTitle>Line Graph - Parcel Type </CardTitle>
        <CardDescription>Parcel type status for the last 7 days</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e3e3e3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} 
            />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend />
            <Line
              dataKey="parcel"
              name="Parcels"
              type="monotone"
              stroke="#f35757" 
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="document"
              name="Documents"
              type="monotone"
              stroke="#f1c232" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              dataKey="express"
              name="Express Parcel"
              type="monotone"
              stroke="#008000" 
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="letter"
              name="Letters"
              type="monotone"
              stroke="#0000FF" 
              strokeWidth={2}
              dot={false}
            />

          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
