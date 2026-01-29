"use client"

import { User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function MobileHeader() {
  return (
    <header className="md:hidden sticky top-0 z-50 glassmorphism border-b border-border">
      <div className="flex items-center justify-between p-3">
        <Avatar className="w-8 h-8 ring-2 ring-electric-purple/30">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback className="bg-gradient-to-br from-electric-purple to-sky-blue text-background">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-purple to-sky-blue flex items-center justify-center glow-purple">
          <span className="text-background font-bold text-sm">S</span>
        </div>
        <div className="w-8" />
      </div>
    </header>
  )
}
