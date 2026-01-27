"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Search, Bell, Mail, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "홈", href: "/" },
  { icon: Search, label: "탐색", href: "/explore" },
  { icon: Bell, label: "알림", href: "/notifications" },
  { icon: Mail, label: "쪽지", href: "/messages" },
  { icon: User, label: "프로필", href: "/profile" },
]

export function MobileNav() {
  const [activeTab, setActiveTab] = useState("/")

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setActiveTab(item.href)}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
              activeTab === item.href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className={cn(
              "w-6 h-6",
              activeTab === item.href && "text-primary"
            )} />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
