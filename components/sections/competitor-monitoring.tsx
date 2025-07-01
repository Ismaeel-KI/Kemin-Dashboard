"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus, CheckCircle, AlertTriangle } from "lucide-react"

function CompetitorMonitoring() {
  const competitors = [
    {
      name: "Competitor A",
      marketShare: "23%",
      trend: "up",
      change: "+2.1%",
      pricing: "Higher",
      activity: "High",
      dataQuality: "reliable",
    },
    {
      name: "Competitor B",
      marketShare: "18%",
      trend: "down",
      change: "-1.5%",
      pricing: "Similar",
      activity: "Medium",
      dataQuality: "questionable",
    },
    {
      name: "Competitor C",
      marketShare: "15%",
      trend: "stable",
      change: "0%",
      pricing: "Lower",
      activity: "Low",
      dataQuality: "reliable",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Market Position</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#2</div>
            <p className="text-xs text-muted-foreground">In your category</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Market Share</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28%</div>
            <p className="text-xs text-muted-foreground">+3% from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Competitive Advantage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Strong</div>
            <p className="text-xs text-muted-foreground">Product quality & service</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Competitor Analysis</CardTitle>
          <CardDescription>Key metrics and insights about your main competitors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitors.map((competitor, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h4 className="font-medium">{competitor.name}</h4>
                  <div className="flex items-center gap-2">
                    {competitor.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {competitor.trend === "down" && <TrendingDown className="h-4 w-4 text-red-500" />}
                    {competitor.trend === "stable" && <Minus className="h-4 w-4 text-gray-500" />}
                    <span className="text-sm text-muted-foreground">{competitor.change}</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Market Share</p>
                    <p className="font-medium">{competitor.marketShare}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Pricing</p>
                    <Badge variant="outline">{competitor.pricing}</Badge>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Activity</p>
                    <Badge
                      variant={
                        competitor.activity === "High"
                          ? "default"
                          : competitor.activity === "Medium"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {competitor.activity}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Data Quality</p>
                    {competitor.dataQuality === "reliable" && (
                      <div className="flex items-center gap-1 text-green-500">
                        <CheckCircle className="h-4 w-4" />
                        Reliable
                      </div>
                    )}
                    {competitor.dataQuality === "questionable" && (
                      <div className="flex items-center gap-1 text-yellow-500">
                        <AlertTriangle className="h-4 w-4" />
                        Questionable
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export { CompetitorMonitoring }
export default CompetitorMonitoring
