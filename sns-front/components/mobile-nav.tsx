"use client"

import { useState } from "react"
import { Home, Search, Bell, Mail, User } from "lucide-react"

const navItems = [
  { icon: Home, label: "홈" },
  { icon: Search, label: "탐색" },
  { icon: Bell, label: "알림", badge: 3 },
  { icon: Mail, label: "쪽지" },
  { icon: User, label: "프로필" },
]

export function MobileNav() {
  const [activeItem, setActiveItem] = useState("홈")

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 glassmorphism border-t border-border z-50 safe-area-bottom">
      <div className="flex items-center h-14">
        {navItems.map((item) => {
          const isActive = activeItem === item.label
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`relative flex-1 h-full flex items-center justify-center transition-all duration-300 ${
                isActive ? "text-electric-purple" : "text-muted-foreground active:text-foreground"
              }`}
              aria-label={item.label}
            >
              <div className={`relative flex items-center justify-center w-12 h-12 ${isActive ? "glow-purple rounded-full" : ""}`}>
                <item.icon className={`w-6 h-6 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                {item.badge && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-bright-orange text-[10px] font-bold rounded-full flex items-center justify-center text-background">
                    {item.badge}
                  </span>
                )}
              </div>
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-electric-purple rounded-full"></span>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
