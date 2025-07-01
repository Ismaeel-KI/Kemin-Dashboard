"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { AlertTriangle, CheckCircle, Database, Shield, XCircle, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React from "react"

const dataQualityMetrics = [
  {
    metric: "Completeness",
    score: 94,
    target: 95,
    status: "good",
    customerScore: 98,
    salesScore: 89,
    marketingScore: 92,
    supportScore: 85,
    analyticsScore: 96,
    inventoryScore: 91,
    financialScore: 99,
    activityScore: 88,
  },
  {
    metric: "Accuracy",
    score: 87,
    target: 90,
    status: "warning",
    customerScore: 92,
    salesScore: 78,
    marketingScore: 85,
    supportScore: 72,
    analyticsScore: 89,
    inventoryScore: 88,
    financialScore: 95,
    activityScore: 81,
  },
  {
    metric: "Consistency",
    score: 92,
    target: 95,
    status: "good",
    customerScore: 96,
    salesScore: 85,
    marketingScore: 90,
    supportScore: 88,
    analyticsScore: 94,
    inventoryScore: 93,
    financialScore: 97,
    activityScore: 89,
  },
  {
    metric: "Timeliness",
    score: 78,
    target: 85,
    status: "critical",
    customerScore: 85,
    salesScore: 65,
    marketingScore: 82,
    supportScore: 58,
    analyticsScore: 88,
    inventoryScore: 75,
    financialScore: 92,
    activityScore: 79,
  },
  {
    metric: "Validity",
    score: 96,
    target: 95,
    status: "excellent",
    customerScore: 99,
    salesScore: 91,
    marketingScore: 95,
    supportScore: 89,
    analyticsScore: 98,
    inventoryScore: 96,
    financialScore: 99,
    activityScore: 93,
  },
  {
    metric: "Uniqueness",
    score: 91,
    target: 93,
    status: "good",
    customerScore: 95,
    salesScore: 83,
    marketingScore: 88,
    supportScore: 79,
    analyticsScore: 94,
    inventoryScore: 92,
    financialScore: 98,
    activityScore: 86,
  },
]

const dataSourceHealth = [
  { source: "Customer Database", health: 98, issues: 0, records: "2.4M" },
  { source: "Sales System", health: 85, issues: 3, records: "890K" },
  { source: "Marketing Platform", health: 92, issues: 1, records: "1.2M" },
  { source: "Support Tickets", health: 76, issues: 8, records: "156K" },
  { source: "Analytics Data", health: 89, issues: 2, records: "3.1M" },
  { source: "Inventory System", health: 94, issues: 1, records: "450K" },
  { source: "Financial Records", health: 97, issues: 0, records: "1.8M" },
  { source: "User Activity", health: 83, issues: 4, records: "5.2M" },
]

const anomalies = [
  {
    type: "Missing Data",
    severity: "high",
    count: 12,
    description: "Customer records missing email addresses",
    detected: "2 hours ago",
    source: "customer",
  },
  {
    type: "Duplicate Records",
    severity: "medium",
    count: 45,
    description: "Potential duplicate customer entries detected",
    detected: "4 hours ago",
    source: "customer",
  },
  {
    type: "Format Inconsistency",
    severity: "low",
    count: 8,
    description: "Phone number format variations in customer data",
    detected: "6 hours ago",
    source: "customer",
  },
  {
    type: "Data Drift",
    severity: "medium",
    count: 23,
    description: "Schema changes detected in sales system",
    detected: "5 hours ago",
    source: "sales",
  },
  {
    type: "Outlier Values",
    severity: "low",
    count: 15,
    description: "Statistical outliers in sales revenue data",
    detected: "3 hours ago",
    source: "sales",
  },
  {
    type: "Stale Data",
    severity: "high",
    count: 7,
    description: "Sales data not updated for over 48 hours",
    detected: "1 hour ago",
    source: "sales",
  },
  {
    type: "Missing Data",
    severity: "medium",
    count: 18,
    description: "Marketing campaign data missing conversion metrics",
    detected: "3 hours ago",
    source: "marketing",
  },
  {
    type: "Invalid Format",
    severity: "high",
    count: 9,
    description: "Marketing platform API returning malformed data",
    detected: "1 hour ago",
    source: "marketing",
  },
  {
    type: "Duplicate Records",
    severity: "low",
    count: 32,
    description: "Duplicate entries in marketing contact lists",
    detected: "8 hours ago",
    source: "marketing",
  },
  {
    type: "Response Delay",
    severity: "high",
    count: 14,
    description: "Support ticket system experiencing delays",
    detected: "30 minutes ago",
    source: "support",
  },
  {
    type: "Missing Data",
    severity: "medium",
    count: 21,
    description: "Support tickets missing priority classification",
    detected: "2 hours ago",
    source: "support",
  },
  {
    type: "Data Quality Issue",
    severity: "low",
    count: 6,
    description: "Support ticket descriptions contain formatting errors",
    detected: "5 hours ago",
    source: "support",
  },
  {
    type: "Processing Error",
    severity: "medium",
    count: 11,
    description: "Analytics data pipeline processing errors",
    detected: "4 hours ago",
    source: "analytics",
  },
  {
    type: "Missing Data",
    severity: "low",
    count: 5,
    description: "Analytics events missing user session data",
    detected: "7 hours ago",
    source: "analytics",
  },
  {
    type: "Inventory Mismatch",
    severity: "high",
    count: 8,
    description: "Inventory counts don't match physical stock",
    detected: "2 hours ago",
    source: "inventory",
  },
  {
    type: "Sync Error",
    severity: "medium",
    count: 13,
    description: "Inventory system sync issues with warehouse",
    detected: "6 hours ago",
    source: "inventory",
  },
  {
    type: "Validation Error",
    severity: "low",
    count: 4,
    description: "Financial transaction validation warnings",
    detected: "9 hours ago",
    source: "financial",
  },
  {
    type: "Session Timeout",
    severity: "medium",
    count: 19,
    description: "User activity tracking session timeouts",
    detected: "1 hour ago",
    source: "activity",
  },
  {
    type: "Missing Data",
    severity: "low",
    count: 12,
    description: "User activity logs missing geolocation data",
    detected: "4 hours ago",
    source: "activity",
  },
  {
    type: "Data Corruption",
    severity: "high",
    count: 3,
    description: "User activity data showing corrupted entries",
    detected: "45 minutes ago",
    source: "activity",
  },
]

const chartConfig = {
  score: {
    label: "Current Score",
    color: "#E53E3E", // Kemin red
  },
  target: {
    label: "Target",
    color: "#38A169", // Kemin green
  },
}

export function DataQuality() {
  const [severityFilter, setSeverityFilter] = React.useState("all")
  const [sourceFilter, setSourceFilter] = React.useState("all")
  const [timeFilter, setTimeFilter] = React.useState("24h")

  const criticalIssues = anomalies.filter((anomaly) => anomaly.severity === "high")

  // Helper function to map source filter to keywords
  const getSourceKeyword = (source: string) => {
    const sourceMap = {
      customer: "customer",
      sales: "sales",
      marketing: "marketing",
      support: "support",
      analytics: "analytics",
      inventory: "inventory",
      financial: "financial",
      activity: "activity",
    }
    return sourceMap[source] || ""
  }

  // Filter anomalies based on selected filters
  const filteredAnomalies = anomalies.filter((anomaly) => {
    const severityMatch = severityFilter === "all" || anomaly.severity === severityFilter
    const sourceMatch = sourceFilter === "all" || anomaly.source === sourceFilter
    return severityMatch && sourceMatch
  })

  // Generate chart data based on source filter
  const getChartData = () => {
    if (sourceFilter === "all") {
      return dataQualityMetrics.map((metric) => ({
        metric: metric.metric,
        score: metric.score,
        target: metric.target,
      }))
    } else {
      // Show source-specific scores
      const sourceKey = `${sourceFilter}Score` as keyof (typeof dataQualityMetrics)[0]
      return dataQualityMetrics.map((metric) => ({
        metric: metric.metric,
        score: (metric[sourceKey] as number) || metric.score,
        target: metric.target,
      }))
    }
  }

  const chartData = getChartData()

  // Calculate filtered metrics
  const filteredIssueCount = filteredAnomalies.length
  const highSeverityCount = filteredAnomalies.filter((a) => a.severity === "high").length
  const mediumSeverityCount = filteredAnomalies.filter((a) => a.severity === "medium").length
  const lowSeverityCount = filteredAnomalies.filter((a) => a.severity === "low").length

  return (
    <div className="space-y-6">
      {/* Critical Issues Alert */}
      {criticalIssues.length > 0 && (
        <Alert className="border-kemin-red/20 bg-kemin-red/5 dark:border-kemin-red/30 dark:bg-kemin-red/10">
          <AlertTriangle className="h-4 w-4 text-kemin-red" />
          <AlertTitle className="text-kemin-red font-semibold">Critical Data Issues</AlertTitle>
          <AlertDescription className="text-foreground/80 dark:text-foreground/70">
            {criticalIssues.length} critical data quality issue(s) require immediate attention.
          </AlertDescription>
        </Alert>
      )}

      {/* Filter Controls */}
      <Card className="bg-background border-border shadow-sm dark:bg-card">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-kemin-red/10 dark:bg-kemin-red/20">
                <Filter className="h-4 w-4 text-kemin-red" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-foreground">Data Quality Filters</CardTitle>
                <Badge variant="outline" className="mt-1 border-kemin-red/20 text-kemin-red">
                  {filteredIssueCount} issues found
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="severity-filter" className="text-sm font-medium text-foreground/80">
                  Severity:
                </label>
                <Select value={severityFilter} onValueChange={setSeverityFilter}>
                  <SelectTrigger className="w-32 border-border focus:border-kemin-red focus:ring-kemin-red/20">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All ({anomalies.length})</SelectItem>
                    <SelectItem value="high">High ({anomalies.filter((a) => a.severity === "high").length})</SelectItem>
                    <SelectItem value="medium">
                      Medium ({anomalies.filter((a) => a.severity === "medium").length})
                    </SelectItem>
                    <SelectItem value="low">Low ({anomalies.filter((a) => a.severity === "low").length})</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="source-filter" className="text-sm font-medium text-foreground/80">
                  Source:
                </label>
                <Select value={sourceFilter} onValueChange={setSourceFilter}>
                  <SelectTrigger className="w-40 border-border focus:border-kemin-red focus:ring-kemin-red/20">
                    <SelectValue placeholder="All Sources" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="customer">Customer Database</SelectItem>
                    <SelectItem value="sales">Sales System</SelectItem>
                    <SelectItem value="marketing">Marketing Platform</SelectItem>
                    <SelectItem value="support">Support Tickets</SelectItem>
                    <SelectItem value="analytics">Analytics Data</SelectItem>
                    <SelectItem value="inventory">Inventory System</SelectItem>
                    <SelectItem value="financial">Financial Records</SelectItem>
                    <SelectItem value="activity">User Activity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="time-filter" className="text-sm font-medium text-foreground/80">
                  Time Range:
                </label>
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger className="w-32 border-border focus:border-kemin-red focus:ring-kemin-red/20">
                    <SelectValue placeholder="24h" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1h">Last Hour</SelectItem>
                    <SelectItem value="24h">Last 24h</SelectItem>
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Data Quality Overview - Dark mode compatible cards */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <Card className="bg-gradient-to-br from-kemin-red/5 to-kemin-red/10 border-kemin-red/20 dark:from-kemin-red/10 dark:to-kemin-red/20 dark:border-kemin-red/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-kemin-red flex items-center gap-2">
              <Shield className="h-3 w-3" />
              Overall Score
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl font-bold text-foreground">
              {sourceFilter === "all"
                ? "89%"
                : `${Math.round(chartData.reduce((sum, item) => sum + item.score, 0) / chartData.length)}%`}
            </div>
            <p className="text-xs text-muted-foreground">
              {sourceFilter === "all" ? "+2% from last week" : `${sourceFilter} source`}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-kemin-green-50 to-kemin-green-100 border-kemin-green-500/20 dark:from-kemin-green-600/10 dark:to-kemin-green-600/20 dark:border-kemin-green-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-kemin-green-600 flex items-center gap-2">
              <Database className="h-3 w-3" />
              Data Sources
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl font-bold text-foreground">{sourceFilter === "all" ? "8" : "1"}</div>
            <p className="text-xs text-muted-foreground">{sourceFilter === "all" ? "All monitored" : "Selected"}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 dark:from-orange-600/10 dark:to-orange-600/20 dark:border-orange-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-orange-600 flex items-center gap-2">
              <AlertTriangle className="h-3 w-3" />
              Active Issues
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl font-bold text-foreground">{filteredIssueCount}</div>
            <p className="text-xs text-muted-foreground">
              {highSeverityCount} critical, {mediumSeverityCount + lowSeverityCount} minor
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 dark:from-purple-600/10 dark:to-purple-600/20 dark:border-purple-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-purple-600 flex items-center gap-2">
              <CheckCircle className="h-3 w-3" />
              Records Processed
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl font-bold text-foreground">12.3M</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 dark:from-red-600/10 dark:to-red-600/20 dark:border-red-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-red-600 flex items-center gap-2">
              <XCircle className="h-3 w-3" />
              Failed Checks
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl font-bold text-foreground">127</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 dark:from-teal-600/10 dark:to-teal-600/20 dark:border-teal-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-teal-600 flex items-center gap-2">
              <Database className="h-3 w-3" />
              Avg Quality
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl font-bold text-foreground">91.2%</div>
            <p className="text-xs text-muted-foreground">Across all metrics</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content - Full Width Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Enhanced Chart - Takes 2 columns */}
        <Card className="lg:col-span-2 bg-background border-border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-foreground">
              Data Quality Metrics Performance
              {sourceFilter !== "all" && (
                <Badge variant="outline" className="ml-2 text-xs border-kemin-red/20 text-kemin-red">
                  {sourceFilter.charAt(0).toUpperCase() + sourceFilter.slice(1)} Source
                </Badge>
              )}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {sourceFilter === "all"
                ? "Current scores vs targets with trend analysis"
                : `Quality metrics for ${sourceFilter} data source`}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 30 }} barCategoryGap="15%">
                  <XAxis dataKey="metric" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} interval={0} />
                  <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="score" fill="var(--color-score)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="target" fill="var(--color-target)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Data Source Health - Compact */}
        <Card className="bg-background border-border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-foreground">Source Health Status</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Real-time monitoring of all data sources
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 space-y-3">
            {dataSourceHealth.map((source) => (
              <div key={source.source} className="p-3 rounded-lg border border-border bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm text-foreground truncate">{source.source}</span>
                  <Badge
                    variant={
                      source.health >= 95
                        ? "default"
                        : source.health >= 85
                          ? "secondary"
                          : source.health >= 75
                            ? "outline"
                            : "destructive"
                    }
                    className="text-xs px-2 py-1"
                  >
                    {source.health}%
                  </Badge>
                </div>
                <Progress value={source.health} className="h-2 mb-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{source.records}</span>
                  {source.issues > 0 && <span className="text-kemin-red font-medium">{source.issues} issues</span>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Data Anomalies - Full Width Grid */}
      <Card className="bg-background border-border shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-foreground">Data Anomalies & Issues</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Recent anomalies detected across all data sources - Showing {filteredAnomalies.length} of {anomalies.length}{" "}
            issues
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          {filteredAnomalies.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-lg font-medium">No anomalies match the selected filters.</p>
              <p className="text-sm">Try adjusting your filter criteria to see more results.</p>
            </div>
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredAnomalies.map((anomaly, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg border border-border bg-muted/20 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {anomaly.severity === "high" && <XCircle className="h-4 w-4 text-kemin-red" />}
                    {anomaly.severity === "medium" && <AlertTriangle className="h-4 w-4 text-orange-500" />}
                    {anomaly.severity === "low" && <AlertTriangle className="h-4 w-4 text-blue-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-foreground truncate">{anomaly.type}</span>
                      <Badge
                        variant={
                          anomaly.severity === "high"
                            ? "destructive"
                            : anomaly.severity === "medium"
                              ? "outline"
                              : "secondary"
                        }
                        className="text-xs px-2 py-1 ml-2"
                      >
                        {anomaly.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{anomaly.description}</p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="font-medium text-foreground/80">{anomaly.count} cases</span>
                      <span>{anomaly.detected}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
export default DataQuality
