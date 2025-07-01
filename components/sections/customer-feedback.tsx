"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

function CustomerFeedback() {
  const feedback = [
    {
      customer: "Sarah Johnson",
      rating: 5,
      comment: "Excellent product quality and fast delivery. Highly recommended!",
      date: "2 days ago",
    },
    {
      customer: "Mike Chen",
      rating: 4,
      comment: "Good value for money. Customer service was very helpful.",
      date: "1 week ago",
    },
    {
      customer: "Emily Davis",
      rating: 5,
      comment: "Outstanding experience from start to finish. Will definitely order again.",
      date: "2 weeks ago",
    },
  ]

  const sentimentData = [
    { date: "Jan", positive: 50, negative: 10 },
    { date: "Feb", positive: 60, negative: 15 },
    { date: "Mar", positive: 70, negative: 5 },
    { date: "Apr", positive: 80, negative: 20 },
    { date: "May", positive: 90, negative: 2 },
  ]

  const categoryFeedback = [
    { category: "Quality", rating: 4.5, summary: "High-quality materials and excellent craftsmanship." },
    { category: "Service", rating: 4.8, summary: "Exceptional customer service and support." },
    { category: "Delivery", rating: 4.2, summary: "Fast and reliable delivery service." },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <div className="flex items-center mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+23 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">Within 24 hours</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sentiment Trends</CardTitle>
          <CardDescription>Positive vs. Negative feedback over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={sentimentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="positive" stroke="#82ca9d" fill="#82ca9d" name="Positive" />
              <Area type="monotone" dataKey="negative" stroke="#e48a8a" fill="#e48a8a" name="Negative" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback Categories</CardTitle>
          <CardDescription>Ratings and summaries for different feedback categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryFeedback.map((item, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{item.category}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Rating: {item.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
          <CardDescription>Latest customer reviews and ratings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feedback.map((item, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{item.customer}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.comment}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export { CustomerFeedback }
export default CustomerFeedback
