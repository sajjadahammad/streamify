"use client"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart,Cell } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    total: {
        label: "Revenue",
    },
    "Premium Subscriptions": {
        label: "Premium Subscriptions",
        color: "hsl(var(--chart-1))",
    },
    "Family Plans": {
        label: "Family Plans",
        color: "hsl(var(--chart-2))",
    },
    "Audio Advertisements": {
        label: "Audio Ads",
        color: "hsl(var(--chart-3))",
    },
    "Display Advertisements": {
        label: "Display Ads",
        color: "hsl(var(--chart-4))",
    },
    "One-time Purchases": {
        label: "One-time Purchases",
        color: "hsl(var(--chart-5))",
    },
}

export default function RevenueDistributionChart({ revenue }) {

    const chartData = revenue?.distribution || []


    const totalRevenue = revenue?.total || 0


    const monthlyTrend = revenue?.monthlyTrend || []
    const growthPercentage = monthlyTrend.length > 1 
        ? ((monthlyTrend[0].amount - monthlyTrend[1].amount) / monthlyTrend[1].amount * 100).toFixed(1)
        : 0

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Revenue Distribution</CardTitle>
                <CardDescription>Revenue Sources</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                {chartData.length > 0 ? (
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[310px]"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                                data={chartData}
                                dataKey="amount"
                                nameKey="source"
                                innerRadius={60}
                                strokeWidth={5}
                            >
                               {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={chartConfig[entry.source]?.color || "gray"} />
        ))}
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
                                                        ${(totalRevenue / 1000000).toFixed(1)}M
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        Total Revenue
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                ) : (
                    <div className="text-center text-muted-foreground">
                        No revenue distribution data available
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Revenue Growth: {growthPercentage}% <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing revenue distribution for the last month
                </div>
            </CardFooter>
        </Card>
    )
}