"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MomentumScorecard } from "./momentum-scorecard"
import { SignalTracker } from "./signal-tracker"
import { CoachingHub } from "./coaching-hub"
import { LearningTracker } from "./learning-tracker"

export interface Opportunity {
  id: number
  company: string
  value: string
  stage: string
  probability: number
  nextStep: string
  closeDate: string
}

interface ContactDetailProps {
  opportunity: Opportunity
}

export function ContactDetail({ opportunity }: ContactDetailProps) {
  return (
    <div className="space-y-8">
      {/* CRM Header */}
      <div className="rounded-xl overflow-hidden relative">
        <img
          src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Header Background"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
          <h2 className="text-3xl text-white font-bold font-satoshi">{opportunity.company}</h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-sm text-gray-200">Stage: {opportunity.stage}</span>
            <span className="text-sm text-gray-200">•</span>
            <span className="text-sm text-gray-200">Value: {opportunity.value}</span>
            <span className="text-sm text-gray-200">•</span>
            <span className="text-sm text-gray-200">Probability: {opportunity.probability}%</span>
          </div>
        </div>
      </div>

      {/* Tabbed CRM Details */}
      <Tabs defaultValue="scorecard" className="w-full">
        <TabsList className="mb-4 w-full justify-start gap-4">
          <TabsTrigger value="scorecard">Momentum Scorecard</TabsTrigger>
          <TabsTrigger value="signals">Signal Tracker</TabsTrigger>
          <TabsTrigger value="coaching">Coaching Hub</TabsTrigger>
          <TabsTrigger value="learning">Learning Tracker</TabsTrigger>
        </TabsList>
        <TabsContent value="scorecard">
          <MomentumScorecard />
        </TabsContent>
        <TabsContent value="signals">
          <SignalTracker />
        </TabsContent>
        <TabsContent value="coaching">
          <CoachingHub />
        </TabsContent>
        <TabsContent value="learning">
          <LearningTracker />
        </TabsContent>
      </Tabs>
    </div>
  )
}
