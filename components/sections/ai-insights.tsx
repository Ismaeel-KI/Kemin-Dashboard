"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, AlertCircle, Lightbulb, CheckCircle, BarChart, Activity } from "lucide-react"

function AIInsights() {
  const insights = [
    {
      type: "opportunity",
      title: "Market Expansion Opportunity",
      description:
        "AI analysis suggests a 23% potential increase in market share by targeting the 25-34 demographic in Q2.",
      confidence: 89,
      impact: "High",
      icon: TrendingUp,
    },
    {
      type: "alert",
      title: "Customer Churn Risk",
      description:
        "Machine learning models predict 15% of premium customers are at risk of churning in the next 30 days.",
      confidence: 76,
      impact: "Medium",
      icon: AlertCircle,
    },
    {
      type: "recommendation",
      title: "Pricing Optimization",
      description:
        "Dynamic pricing algorithm recommends a 5-8% price adjustment for Product Line A to maximize revenue.",
      confidence: 92,
      impact: "High",
      icon: Lightbulb,
      roi: "15-20%",
      effort: "Medium",
      timeline: "2 weeks",
    },
  ]

  const aiPerformanceMetrics = [
    {
      title: "AI Models Active",
      value: "7",
      description: "Running predictions",
      icon: Brain,
    },
    {
      title: "Insights Generated",
      value: "24",
      description: "This week",
      icon: Lightbulb,
    },
    {
      title: "Accuracy Rate",
      value: "94%",
      description: "Model performance",
      icon: CheckCircle,
    },
    {
      title: "Data Processed",
      value: "1.2M",
      description: "Data points",
      icon: BarChart,
    },
  ]

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "opportunity":
        return <TrendingUp className="h-5 w-5 text-green-500" />
      case "alert":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case "recommendation":
        return <Lightbulb className="h-5 w-5 text-blue-500" />
      default:
        return <Brain className="h-5 w-5 text-gray-500" />
    }
  }

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "High":
        return <Badge className="bg-red-100 text-red-800">High Impact</Badge>
      case "Medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium Impact</Badge>
      case "Low":
        return <Badge className="bg-green-100 text-green-800">Low Impact</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {aiPerformanceMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <metric.icon className="h-4 w-4" />
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-kemin-red" />
            AI-Generated Insights
          </CardTitle>
          <CardDescription>Machine learning insights and recommendations for your business</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {getInsightIcon(insight.type)}
                    <div>
                      <h4 className="font-medium">{insight.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        {getImpactBadge(insight.impact)}
                        <Badge variant="outline">{insight.confidence}% confidence</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pl-8">{insight.description}</p>
                {insight.roi && insight.effort && insight.timeline && (
                  <div className="pl-8">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <TrendingUp className="h-3 w-3" />
                      ROI: {insight.roi}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Activity className="h-3 w-3" />
                      Effort: {insight.effort}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Lightbulb className="h-3 w-3" />
                      Timeline: {insight.timeline}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export { AIInsights }
export default AIInsights
