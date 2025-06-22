"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, Clock, Trophy } from "lucide-react"

export function LearningTracker() {
  const learningModules = [
    {
      id: 1,
      title: "Advanced Sales Techniques",
      progress: 85,
      completed: 6,
      total: 7,
      timeLeft: "2 hours",
      status: "In Progress",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "MEDDIC Sales Framework",
      progress: 100,
      completed: 5,
      total: 5,
      timeLeft: "Completed",
      status: "Completed",
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Enterprise Negotiation",
      progress: 60,
      completed: 3,
      total: 5,
      timeLeft: "4 hours",
      status: "In Progress",
      icon: Trophy,
    },
  ]

  const skills = [
    { name: "Discovery Calls", level: 90 },
    { name: "Objection Handling", level: 85 },
    { name: "Deal Qualification", level: 75 },
    { name: "Contract Negotiation", level: 80 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-satoshi text-2xl font-bold mb-2">Learning Tracker</h2>
          <p className="text-gray-500">Track your skill development progress</p>
        </div>
        <Badge variant="outline" className="bg-white hover:bg-gray-50 transition-colors">
          <Trophy className="h-4 w-4 mr-1" />
          Level 3 Sales Pro
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {learningModules.map((module) => {
          const Icon = module.icon
          return (
            <div 
              key={module.id} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gray-50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-satoshi font-bold text-lg">{module.title}</h3>
              </div>
              
              <div className="space-y-4">
                <Progress 
                  value={module.progress} 
                  className="h-2 [&>div]:bg-black bg-gray-100" 
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{module.completed}/{module.total} Units</span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    {module.timeLeft}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="font-satoshi text-xl font-bold mb-6">Skill Assessment</h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded-md">
                    {skill.level}%
                  </span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2 [&>div]:bg-black bg-gray-100" 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8">
          <h3 className="font-satoshi text-xl font-bold mb-6">AI Learning Insights</h3>
          <div className="space-y-6">
            <p className="text-gray-200 leading-relaxed">
              Based on your recent performance, focusing on Deal Qualification 
              could have the highest impact on your success rate. Consider 
              completing the MEDDIC framework practice scenarios.
            </p>
            <div className="space-y-4">
              <h4 className="font-medium text-lg">Recommended Next Steps</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="h-5 w-5 text-gray-400" />
                  Complete Enterprise Negotiation module
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="h-5 w-5 text-gray-400" />
                  Practice MEDDIC qualification scenarios
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
