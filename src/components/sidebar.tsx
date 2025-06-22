"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart,
  Bell,
  GitBranch,
  Lightbulb,
  GraduationCap,
  Bot,
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    {
      name: "Gemini AI",
      href: "/gemini",
      icon: Bot,
    },
    {
      name: "Momentum",
      href: "#momentum",
      icon: BarChart,
    },
    {
      name: "Signals",
      href: "#signals",
      icon: Bell,
    },
    {
      name: "Pipeline",
      href: "#pipeline",
      icon: GitBranch,
    },
    {
      name: "Coaching",
      href: "#coaching",
      icon: Lightbulb,
    },
    {
      name: "Learning",
      href: "#learning",
      icon: GraduationCap,
    },
  ]

  return (
    <div className="flex h-full flex-col bg-white px-6 py-8">
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="font-satoshi text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Routiine.io
          </h2>
          <p className="text-sm text-gray-500 mt-1">Sales momentum redefined</p>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                pathname === item.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4 text-white">
        <p className="text-sm font-medium mb-1">Pro Plan Active</p>
        <p className="text-xs text-gray-400">All features unlocked</p>
      </div>
    </div>
  )
}
