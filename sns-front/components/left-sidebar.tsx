"use client"

import { useState } from "react"
import { Home, Search, Bell, Mail, User } from "lucide-react"

const navItems = [
  { icon: Home, label: "홈", active: true },
  { icon: Search, label: "탐색", active: false },
  { icon: Bell, label: "알림", active: false, badge: 3 },
  { icon: Mail, label: "쪽지", active: false },
  { icon: User, label: "프로필", active: false },
]

export function LeftSidebar() {
  const [activeItem, setActiveItem] = useState("홈")

  return (
    <aside className="hidden md:flex flex-col w-20 xl:w-64 h-screen sticky top-0 border-r border-border px-2 py-4 xl:px-4">
      <div className="flex flex-col gap-2 flex-1">
        {/* Logo */}
        <div className="flex items-center justify-center xl:justify-start h-12 mb-2 px-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-purple to-sky-blue flex items-center justify-center glow-purple shrink-0">
            <span className="text-background font-bold text-xl">S</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeItem === item.label
            return (
              <button
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                className={`relative flex items-center justify-center xl:justify-start gap-4 h-12 px-3 rounded-full transition-all duration-300 group ${
                  isActive 
                    ? "text-electric-purple" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <div className={`relative flex items-center justify-center ${isActive ? "glow-purple rounded-full" : ""}`}>
                  <item.icon 
                    className={`w-6 h-6 transition-all duration-300 ${
                      isActive 
                        ? "text-electric-purple" 
                        : "group-hover:text-electric-purple group-hover:scale-110"
                    }`} 
                  />
                  {item.badge && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-bright-orange text-[10px] font-bold rounded-full flex items-center justify-center text-background">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`hidden xl:block text-xl leading-none transition-all duration-300 ${
                  isActive 
                    ? "font-bold text-glow-purple" 
                    : "font-normal group-hover:text-electric-purple"
                }`}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>

        {/* Post Button */}
        <button className="mt-4 rounded-full h-12 w-12 xl:w-full text-lg font-bold bg-gradient-to-r from-electric-purple to-sky-blue text-background hover:glow-purple transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto xl:mx-0">
          <span className="hidden xl:block">게시하기</span>
          <span className="xl:hidden text-xl leading-none">+</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="flex items-center justify-center xl:justify-start gap-3 h-16 px-3 rounded-full hover:bg-accent transition-all duration-300 cursor-pointer group">
        <div className="relative shrink-0">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border border-border group-hover:border-electric-purple transition-colors">
            <User className="w-5 h-5 text-muted-foreground group-hover:text-electric-purple transition-colors" />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-lime-green rounded-full border-2 border-background"></span>
        </div>
        <div className="hidden xl:block min-w-0">
          <p className="font-semibold text-sm leading-tight group-hover:text-electric-purple transition-colors truncate">사용자</p>
          <p className="text-muted-foreground text-sm leading-tight truncate">@username</p>
        </div>
      </div>
    </aside>
  )
}
