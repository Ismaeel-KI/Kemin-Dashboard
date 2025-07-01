"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ArrowUpIcon, ArrowDownIcon, DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Filter } from "lucide-react"
import React from "react" // Import React to use useState

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#ef4444", // red-500
  },
  users: {
    label: "Users",
    color: "#0ea5e9", // sky-500
  },
}

const allTimeData = {
  week: {
    all: {
      kpi: [
        { title: "Total Revenue", value: "$67,392", change: "+5.2%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "1,847", change: "+12.1%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "3.8%", change: "+0.3%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "8.2%", change: "+1.1%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Mon", revenue: 8500, users: 245 },
        { period: "Tue", revenue: 9200, users: 267 },
        { period: "Wed", revenue: 10100, users: 289 },
        { period: "Thu", revenue: 11300, users: 312 },
        { period: "Fri", revenue: 12800, users: 334 },
        { period: "Sat", revenue: 8900, users: 201 },
        { period: "Sun", revenue: 6500, users: 199 },
      ],
    },
    "animal-nutrition": {
      kpi: [
        { title: "Total Revenue", value: "$24,150", change: "+8.3%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "642", change: "+15.2%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "4.2%", change: "+0.5%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "12.1%", change: "+2.3%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Mon", revenue: 3200, users: 89 },
        { period: "Tue", revenue: 3800, users: 95 },
        { period: "Wed", revenue: 4100, users: 102 },
        { period: "Thu", revenue: 4500, users: 108 },
        { period: "Fri", revenue: 4800, users: 115 },
        { period: "Sat", revenue: 2900, users: 67 },
        { period: "Sun", revenue: 1850, users: 66 },
      ],
    },
    "animal-vaccine": {
      kpi: [
        { title: "Total Revenue", value: "$18,920", change: "+3.1%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "523", change: "+7.8%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "3.1%", change: "-0.2%", trend: "down", icon: ShoppingCart },
        { title: "Growth Rate", value: "6.4%", change: "+0.8%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Mon", revenue: 2800, users: 72 },
        { period: "Tue", revenue: 2950, users: 78 },
        { period: "Wed", revenue: 3100, users: 81 },
        { period: "Thu", revenue: 3200, users: 85 },
        { period: "Fri", revenue: 3400, users: 89 },
        { period: "Sat", revenue: 2100, users: 58 },
        { period: "Sun", revenue: 1370, users: 60 },
      ],
    },
    aquaculture: {
      kpi: [
        { title: "Total Revenue", value: "$12,480", change: "+6.7%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "387", change: "+11.3%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "3.9%", change: "+0.4%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "9.8%", change: "+1.5%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Mon", revenue: 1800, users: 52 },
        { period: "Tue", revenue: 1950, users: 58 },
        { period: "Wed", revenue: 2100, users: 61 },
        { period: "Thu", revenue: 2200, users: 65 },
        { period: "Fri", revenue: 2300, users: 68 },
        { period: "Sat", revenue: 1400, users: 42 },
        { period: "Sun", revenue: 730, users: 41 },
      ],
    },
    "food-technology": {
      kpi: [
        { title: "Total Revenue", value: "$8,642", change: "+2.9%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "198", change: "+5.4%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "2.8%", change: "-0.1%", trend: "down", icon: ShoppingCart },
        { title: "Growth Rate", value: "4.2%", change: "+0.3%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Mon", revenue: 1200, users: 28 },
        { period: "Tue", revenue: 1350, users: 31 },
        { period: "Wed", revenue: 1450, users: 33 },
        { period: "Thu", revenue: 1500, users: 35 },
        { period: "Fri", revenue: 1600, users: 37 },
        { period: "Sat", revenue: 980, users: 19 },
        { period: "Sun", revenue: 562, users: 15 },
      ],
    },
    "textile-auxiliaries": {
      kpi: [
        { title: "Total Revenue", value: "$3,200", change: "+1.8%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "97", change: "+3.2%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "2.1%", change: "+0.1%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "2.7%", change: "+0.2%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Mon", revenue: 500, users: 14 },
        { period: "Tue", revenue: 550, users: 15 },
        { period: "Wed", revenue: 580, users: 16 },
        { period: "Thu", revenue: 600, users: 17 },
        { period: "Fri", revenue: 620, users: 18 },
        { period: "Sat", revenue: 220, users: 9 },
        { period: "Sun", revenue: 130, users: 8 },
      ],
    },
  },
  month: {
    all: {
      kpi: [
        { title: "Total Revenue", value: "$2,847,392", change: "+12.5%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "24,847", change: "+8.2%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "3.24%", change: "-0.4%", trend: "down", icon: ShoppingCart },
        { title: "Growth Rate", value: "18.7%", change: "+2.1%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Jan", revenue: 186000, users: 12400 },
        { period: "Feb", revenue: 205000, users: 13200 },
        { period: "Mar", revenue: 237000, users: 14800 },
        { period: "Apr", revenue: 273000, users: 16200 },
        { period: "May", revenue: 209000, users: 15100 },
        { period: "Jun", revenue: 284000, users: 17800 },
      ],
    },
    "animal-nutrition": {
      kpi: [
        { title: "Total Revenue", value: "$1,024,587", change: "+15.8%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "8,642", change: "+12.3%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "4.1%", change: "+0.2%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "22.4%", change: "+3.1%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Jan", revenue: 68000, users: 4200 },
        { period: "Feb", revenue: 75000, users: 4600 },
        { period: "Mar", revenue: 89000, users: 5100 },
        { period: "Apr", revenue: 102000, users: 5800 },
        { period: "May", revenue: 78000, users: 5200 },
        { period: "Jun", revenue: 112587, users: 6400 },
      ],
    },
    "animal-vaccine": {
      kpi: [
        { title: "Total Revenue", value: "$798,234", change: "+9.2%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "6,891", change: "+6.8%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "2.9%", change: "-0.3%", trend: "down", icon: ShoppingCart },
        { title: "Growth Rate", value: "14.6%", change: "+1.2%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Jan", revenue: 52000, users: 3100 },
        { period: "Feb", revenue: 58000, users: 3400 },
        { period: "Mar", revenue: 67000, users: 3800 },
        { period: "Apr", revenue: 78000, users: 4200 },
        { period: "May", revenue: 59000, users: 3900 },
        { period: "Jun", revenue: 84234, users: 4600 },
      ],
    },
    aquaculture: {
      kpi: [
        { title: "Total Revenue", value: "$542,891", change: "+18.3%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "4,523", change: "+14.7%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "3.7%", change: "+0.5%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "25.1%", change: "+4.2%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Jan", revenue: 35000, users: 2000 },
        { period: "Feb", revenue: 42000, users: 2300 },
        { period: "Mar", revenue: 51000, users: 2700 },
        { period: "Apr", revenue: 62000, users: 3100 },
        { period: "May", revenue: 48000, users: 2800 },
        { period: "Jun", revenue: 74891, users: 3400 },
      ],
    },
    "food-technology": {
      kpi: [
        { title: "Total Revenue", value: "$324,567", change: "+7.1%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "2,891", change: "+4.9%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "2.6%", change: "-0.2%", trend: "down", icon: ShoppingCart },
        { title: "Growth Rate", value: "11.8%", change: "+0.9%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Jan", revenue: 21000, users: 1200 },
        { period: "Feb", revenue: 24000, users: 1400 },
        { period: "Mar", revenue: 28000, users: 1600 },
        { period: "Apr", revenue: 32000, users: 1800 },
        { period: "May", revenue: 26000, users: 1500 },
        { period: "Jun", revenue: 38567, users: 2100 },
      ],
    },
    "textile-auxiliaries": {
      kpi: [
        { title: "Total Revenue", value: "$157,113", change: "+4.6%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "1,900", change: "+2.8%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "1.9%", change: "+0.1%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "6.3%", change: "+0.4%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "Jan", revenue: 10000, users: 900 },
        { period: "Feb", revenue: 12000, users: 1000 },
        { period: "Mar", revenue: 14000, users: 1100 },
        { period: "Apr", revenue: 17000, users: 1200 },
        { period: "May", revenue: 13000, users: 1000 },
        { period: "Jun", revenue: 21113, users: 1300 },
      ],
    },
  },
  year: {
    all: {
      kpi: [
        { title: "Total Revenue", value: "$28,473,920", change: "+24.8%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "248,470", change: "+18.9%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "3.45%", change: "+0.8%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "32.4%", change: "+8.7%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "2019", revenue: 1860000, users: 124000 },
        { period: "2020", revenue: 2050000, users: 132000 },
        { period: "2021", revenue: 2370000, users: 148000 },
        { period: "2022", revenue: 2730000, users: 162000 },
        { period: "2023", revenue: 2890000, users: 178000 },
        { period: "2024", revenue: 3240000, users: 195000 },
      ],
    },
    "animal-nutrition": {
      kpi: [
        { title: "Total Revenue", value: "$10,245,870", change: "+28.3%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "86,420", change: "+22.1%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "4.2%", change: "+1.1%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "38.7%", change: "+12.4%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "2019", revenue: 620000, users: 42000 },
        { period: "2020", revenue: 780000, users: 48000 },
        { period: "2021", revenue: 950000, users: 56000 },
        { period: "2022", revenue: 1200000, users: 65000 },
        { period: "2023", revenue: 1450000, users: 74000 },
        { period: "2024", revenue: 1680000, users: 82000 },
      ],
    },
    "animal-vaccine": {
      kpi: [
        { title: "Total Revenue", value: "$7,982,340", change: "+19.8%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "68,910", change: "+15.2%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "3.1%", change: "+0.3%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "26.4%", change: "+6.8%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "2019", revenue: 480000, users: 35000 },
        { period: "2020", revenue: 580000, users: 38000 },
        { period: "2021", revenue: 720000, users: 44000 },
        { period: "2022", revenue: 890000, users: 52000 },
        { period: "2023", revenue: 1050000, users: 58000 },
        { period: "2024", revenue: 1280000, users: 65000 },
      ],
    },
    aquaculture: {
      kpi: [
        { title: "Total Revenue", value: "$5,428,910", change: "+35.2%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "45,230", change: "+28.7%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "3.8%", change: "+1.2%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "42.1%", change: "+15.3%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "2019", revenue: 280000, users: 18000 },
        { period: "2020", revenue: 350000, users: 22000 },
        { period: "2021", revenue: 480000, users: 28000 },
        { period: "2022", revenue: 650000, users: 35000 },
        { period: "2023", revenue: 820000, users: 41000 },
        { period: "2024", revenue: 1100000, users: 48000 },
      ],
    },
    "food-technology": {
      kpi: [
        { title: "Total Revenue", value: "$3,245,670", change: "+16.4%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "28,910", change: "+12.8%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "2.7%", change: "+0.2%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "21.3%", change: "+4.7%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "2019", revenue: 180000, users: 12000 },
        { period: "2020", revenue: 220000, users: 14000 },
        { period: "2021", revenue: 280000, users: 17000 },
        { period: "2022", revenue: 350000, users: 20000 },
        { period: "2023", revenue: 420000, users: 24000 },
        { period: "2024", revenue: 520000, users: 28000 },
      ],
    },
    "textile-auxiliaries": {
      kpi: [
        { title: "Total Revenue", value: "$1,571,130", change: "+8.9%", trend: "up", icon: DollarSign },
        { title: "Active Users", value: "19,000", change: "+6.2%", trend: "up", icon: Users },
        { title: "Conversion Rate", value: "2.1%", change: "+0.1%", trend: "up", icon: ShoppingCart },
        { title: "Growth Rate", value: "12.7%", change: "+2.1%", trend: "up", icon: TrendingUp },
      ],
      chart: [
        { period: "2019", revenue: 90000, users: 8000 },
        { period: "2020", revenue: 110000, users: 9000 },
        { period: "2021", revenue: 140000, users: 11000 },
        { period: "2022", revenue: 180000, users: 13000 },
        { period: "2023", revenue: 220000, users: 16000 },
        { period: "2024", revenue: 280000, users: 19000 },
      ],
    },
  },
}

export function GrowthOverview() {
  const [timeFilter, setTimeFilter] = React.useState<"week" | "month" | "year">("month")
  const [selectedMonth, setSelectedMonth] = React.useState("2024-06")
  const [selectedYear, setSelectedYear] = React.useState("2024")
  const [selectedWeek, setSelectedWeek] = React.useState("2024-W26")
  const [selectedProduct, setSelectedProduct] = React.useState("all")

  const currentData = allTimeData[timeFilter][selectedProduct] || allTimeData[timeFilter].all

  const getProgressData = (filter: string) => {
    const baseProgress = [
      { label: `${filter.charAt(0).toUpperCase() + filter.slice(1)} Target`, current: 85, target: 100 },
      { label: "User Acquisition", current: 72, target: 100 },
      { label: "Revenue Goal", current: 94, target: 100 },
      { label: "Market Share", current: 67, target: 100 },
    ]

    if (filter === "week") {
      baseProgress[0].current = 78
      baseProgress[1].current = 65
    } else if (filter === "year") {
      baseProgress[0].current = 92
      baseProgress[1].current = 88
    }

    return baseProgress
  }

  const progressData = getProgressData(timeFilter)

  return (
    <div className="space-y-6 border-[rgba(58,58,58,1)]">
      {/* Filter Controls */}
      <Card className="">
        <CardHeader className="border-[rgba(58,58,58,1)] border-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <CardTitle className="text-lg">Growth Overview</CardTitle>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Tabs value={timeFilter} onValueChange={(value) => setTimeFilter(value as "week" | "month" | "year")}>
                  <TabsList>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex items-center gap-2">
                  <label htmlFor="product-filter" className="text-sm font-medium">
                    Product:
                  </label>
                  <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="animal-nutrition">Animal Nutrition and Health</SelectItem>
                      <SelectItem value="animal-vaccine">Animal Vaccine</SelectItem>
                      <SelectItem value="aquaculture">Aquaculture</SelectItem>
                      <SelectItem value="food-technology">Food Technology</SelectItem>
                      <SelectItem value="textile-auxiliaries">Textile Auxiliaries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {timeFilter === "month" && (
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="w-40">
                      <Calendar className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-01">January 2024</SelectItem>
                      <SelectItem value="2024-02">February 2024</SelectItem>
                      <SelectItem value="2024-03">March 2024</SelectItem>
                      <SelectItem value="2024-04">April 2024</SelectItem>
                      <SelectItem value="2024-05">May 2024</SelectItem>
                      <SelectItem value="2024-06">June 2024</SelectItem>
                    </SelectContent>
                  </Select>
                )}

                {timeFilter === "year" && (
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-32">
                      <Calendar className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                    </SelectContent>
                  </Select>
                )}

                {timeFilter === "week" && (
                  <Select value={selectedWeek} onValueChange={setSelectedWeek}>
                    <SelectTrigger className="w-40">
                      <Calendar className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Select week" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-W22">Week 22, 2024</SelectItem>
                      <SelectItem value="2024-W23">Week 23, 2024</SelectItem>
                      <SelectItem value="2024-W24">Week 24, 2024</SelectItem>
                      <SelectItem value="2024-W25">Week 25, 2024</SelectItem>
                      <SelectItem value="2024-W26">Week 26, 2024</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {currentData.kpi.map((kpi) => (
          <Card key={kpi.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center space-x-1 text-xs">
                {kpi.trend === "up" ? (
                  <ArrowUpIcon className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownIcon className="h-3 w-3 text-red-500" />
                )}
                <span className={kpi.trend === "up" ? "text-green-500" : "text-red-500"}>{kpi.change}</span>
                <span className="text-muted-foreground">from last {timeFilter}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Growth Trends Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Growth Trends - {timeFilter.charAt(0).toUpperCase() + timeFilter.slice(1)}ly View</CardTitle>
            <CardDescription>
              Revenue and user growth over{" "}
              {timeFilter === "week" ? "days of the week" : timeFilter === "month" ? "months" : "years"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={currentData.chart}>
                  <XAxis dataKey="period" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
                  <Bar dataKey="users" fill="var(--color-users)" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Progress Indicators */}
        <Card>
          <CardHeader>
            <CardTitle>Target Progress</CardTitle>
            <CardDescription>Progress against quarterly targets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {progressData.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.label}</span>
                  <Badge variant={item.current >= 80 ? "default" : "secondary"}>{item.current}%</Badge>
                </div>
                <Progress value={item.current} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default GrowthOverview
