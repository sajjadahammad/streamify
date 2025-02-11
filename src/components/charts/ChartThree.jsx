"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis,YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"

 
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#fd643a",
    },
  }  

  const formatStreams = (streams) => {
    return `${(streams / 1000000).toFixed(1)}M`
  }
export default function ChartThree({ data }) {
  const formattedData = data?.map(song => ({
    name: `${song.name} - ${song.artistName}`,
    streams: song.streams
  })) || []
  return (
    <Card>
    <CardHeader>
    <CardTitle>Top 5 Songs</CardTitle>
    <CardDescription>Most Streamed Songs</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={formattedData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            
          />
          <YAxis
              tickFormatter={formatStreams}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
          <ChartTooltip
            cursor={false}
            formatter={(value) => [formatStreams(value), 'Streams']}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="streams" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col items-start gap-2 text-sm">
    <div className="leading-none text-muted-foreground">
          Showing top 5 most streamed songs
        </div>
    </CardFooter>
  </Card>
  )
}
