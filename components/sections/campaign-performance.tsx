"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

function CampaignPerformance() {
  const campaigns = [
    {
      name: "Summer Product Launch",
      status: "Active",
      impressions: "125K",
      clicks: "3.2K",
      ctr: "2.56%",
      spend: "$2,450",
    },
    {
      name: "Brand Awareness Q4",
      status: "Completed",
      impressions: "89K",
      clicks: "1.8K",
      ctr: "2.02%",
      spend: "$1,890",
    },
    {
      name: "Holiday Promotion",
      status: "Scheduled",
      impressions: "0",
      clicks: "0",
      ctr: "0%",
      spend: "$0",
    },
    {
      name: "Winter Campaign",
      status: "Active",
      impressions: "200K",
      clicks: "5K",
      ctr: "2.5%",
      spend: "$4,000",
    },
    {
      name: "Spring Sale",
      status: "Completed",
      impressions: "75K",
      clicks: "1.5K",
      ctr: "2.0%",
      spend: "$1,500",
    },
  ]

  const data = campaigns.map((campaign) => ({
    name: campaign.name,
    impressions: Number.parseInt(campaign.impressions.replace("K", "")) * 1000,
    clicks: Number.parseFloat(campaign.clicks.replace("K", "")) * 1000 || 0,
    spend: Number.parseInt(campaign.spend.replace("$", "").replace(",", "")),
  }))

  const underperformingCampaigns = campaigns.filter((campaign) => Number.parseFloat(campaign.ctr.replace("%", "")) < 2)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Campaign Overview</CardTitle>
          <CardDescription>Performance metrics for your marketing campaigns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Scheduled">Scheduled</SelectItem>
                <SelectItem value="All">All</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Filter by Performance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High">High (CTR &gt; 2.5%)</SelectItem>
                <SelectItem value="Medium">Medium (CTR &gt;= 2.0% &amp; &lt;= 2.5%)</SelectItem>
                <SelectItem value="Low">Low (CTR &lt; 2.0%)</SelectItem>
                <SelectItem value="All">All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableCaption>A comprehensive overview of campaign performance.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Campaign</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Impressions</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>CTR</TableHead>
                <TableHead>Spend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        campaign.status === "Active"
                          ? "default"
                          : campaign.status === "Completed"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{campaign.impressions}</TableCell>
                  <TableCell>{campaign.clicks}</TableCell>
                  <TableCell>{campaign.ctr}</TableCell>
                  <TableCell>{campaign.spend}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Performance Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="impressions" fill="#8884d8" />
                <Bar dataKey="clicks" fill="#82ca9d" />
                <Bar dataKey="spend" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {underperformingCampaigns.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2 text-red-500">Underperforming Campaigns</h3>
              <ul>
                {underperformingCampaigns.map((campaign, index) => (
                  <li key={index} className="text-red-500">
                    {campaign.name} - CTR: {campaign.ctr}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
export { CampaignPerformance }
export default CampaignPerformance
