"use client"

import * as React from "react"
import { BarChart3, Brain, MessageSquare, Search, Shield, TrendingUp, Users, Headphones } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { GrowthOverview } from "@/components/sections/growth-overview"
import { CampaignPerformance } from "@/components/sections/campaign-performance"
import { CustomerFeedback } from "@/components/sections/customer-feedback"
import { CompetitorMonitoring } from "@/components/sections/competitor-monitoring"
import { DataQuality } from "@/components/sections/data-quality"
import { AIInsights } from "@/components/sections/ai-insights"
import { CustomerServiceChat } from "@/components/sections/customer-service-chat"

const navigationItems = [
  {
    id: "growth",
    title: "Growth Overview",
    icon: TrendingUp,
    component: GrowthOverview,
  },
  {
    id: "campaigns",
    title: "Campaign Performance",
    icon: BarChart3,
    component: CampaignPerformance,
  },
  {
    id: "feedback",
    title: "Customer Feedback",
    icon: MessageSquare,
    component: CustomerFeedback,
  },
  {
    id: "competitors",
    title: "Competitor Monitoring",
    icon: Search,
    component: CompetitorMonitoring,
  },
  {
    id: "quality",
    title: "Data Quality",
    icon: Shield,
    component: DataQuality,
  },
  {
    id: "insights",
    title: "AI Insights",
    icon: Brain,
    component: AIInsights,
  },
  {
    id: "chat",
    title: "Customer Service AI",
    icon: Headphones,
    component: CustomerServiceChat,
  },
]

export function BusinessIntelligenceDashboard() {
  const [activeSection, setActiveSection] = React.useState("growth")

  const ActiveComponent = navigationItems.find((item) => item.id === activeSection)?.component || GrowthOverview
  const activeTitle = navigationItems.find((item) => item.id === activeSection)?.title || "Growth Overview"

  return (
    <SidebarProvider>
      <Sidebar className="bg-background dark:bg-kemin-gray-900">
        <SidebarHeader className="border-b border-border dark:bg-kemin-gray-950 bg-[rgba(58,58,58,1)]">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kemin-red text-white shadow-lg">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[rgba(229,62,62,1)]">Kemin Analytics</span>
              <span className="text-xs text-muted-foreground">Business Intelligence Hub</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="dark:bg-kemin-gray-900 bg-[rgba(221,221,221,1)] border-[rgba(58,58,58,1)] text-white">
          <SidebarGroup>
            <SidebarGroupLabel className="text-muted-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2">
              Analytics Dashboard
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="px-2">
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={activeSection === item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full justify-start gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-kemin-red text-white shadow-lg"
                          : "text-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="font-medium">{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-background">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-6 shadow-sm bg-[rgba(221,221,221,1)]">
          <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-kemin-red" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-border" />
          <div className="flex items-center gap-3 flex-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-kemin-red/10">
              <Users className="h-4 w-4 text-kemin-red" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-foreground">{activeTitle}</h1>
              <span className="text-xs text-muted-foreground">Real-time business insights</span>
            </div>
          </div>
          <ThemeToggle />
        </header>
        <div className="flex-1 space-y-6 p-6 md:p-8 bg-background">
          <ActiveComponent />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default BusinessIntelligenceDashboard
