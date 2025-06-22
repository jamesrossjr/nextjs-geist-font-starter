"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Target, TrendingUp, MessageSquare } from "lucide-react"

export function CoachingHub() {
  const coachingAreas = [
    {
      id: 1,
      title: "Deal Velocity",
      score: 85,
      insight: "Your deal closure time is 15% faster than average",
      status: "Excellent",
      icon: TrendingUp,
    },
    {
      id: 2,
      title: "Pipeline Quality",
      score: 72,
      insight: "Opportunity qualification needs attention",
      status: "Good",
      icon: Target,
    },
    {
      id: 3,
      title: "Customer Engagement",
      score: 90,
      insight: "Strong meeting-to-opportunity conversion",
      status: "Excellent",
      icon: MessageSquare,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent":
        return "bg-black text-white"
      case "Good":
        return "bg-gray-800 text-white"
      default:
        return "bg-gray-700 text-white"
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-satoshi text-2xl font-bold mb-2">Coaching Hub</h2>
          <p className="text-gray-500">AI-powered performance insights</p>
        </div>
        <Badge variant="outline" className="bg-white hover:bg-gray-50 transition-colors">
          <Sparkles className="h-4 w-4 mr-1" />
          AI Coach Active
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coachingAreas.map((area) => {
          const Icon = area.icon
          return (
            <div 
              key={area.id} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gray-50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-satoshi font-bold text-lg">{area.title}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold font-satoshi">{area.score}</span>
                  <Badge className={getStatusColor(area.status)}>
                    {area.status}
                  </Badge>
                </div>
                <Progress 
                  value={area.score} 
                  className="h-2 [&>div]:bg-black bg-gray-100" 
                />
                <p className="text-sm text-gray-600 leading-relaxed">{area.insight}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8">
        <h3 className="font-satoshi text-xl font-bold mb-6">
          Personalized Coaching Recommendations
        </h3>
        <div className="space-y-6">
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <h4 className="font-medium text-lg mb-3">Focus Area: Pipeline Quality</h4>
            <p className="text-gray-200 leading-relaxed">
              Consider implementing the MEDDIC qualification framework in your discovery calls. 
              This could improve your qualification accuracy by up to 25%.
            </p>
          </div>
          
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <h4 className="font-medium text-lg mb-3">Strength: Deal Velocity</h4>
            <p className="text-gray-200 leading-relaxed">
              Your streamlined proposal process is working well. Share your approach 
              with team members to help improve overall team performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
