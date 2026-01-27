"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, Search, Bell, Mail, User, Feather, MoreHorizontal, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navItems = [
  { icon: Home, label: "홈", href: "/" },
  { icon: Search, label: "탐색", href: "/explore" },
  { icon: Bell, label: "알림", href: "/notifications" },
  { icon: Mail, label: "쪽지", href: "/messages" },
  { icon: User, label: "프로필", href: "/profile" },
]

export function Sidebar() {
  const [activeTab, setActiveTab] = useState("/")

  return (
    <aside className="sticky top-0 h-screen flex flex-col justify-between bg-sidebar text-sidebar-foreground border-r border-sidebar-border px-3 py-4 w-20 xl:w-64">
      <div className="flex flex-col gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center xl:justify-start gap-2 p-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Feather className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="hidden xl:block text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Chirp
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActiveTab(item.href)}
              className={cn(
                "flex items-center justify-center xl:justify-start gap-4 px-4 py-3 rounded-full transition-all duration-200 hover:bg-sidebar-accent/20",
                activeTab === item.href 
                  ? "bg-sidebar-accent/30 text-sidebar-accent font-semibold" 
                  : "text-sidebar-foreground/80"
              )}
            >
              <item.icon className={cn(
                "w-6 h-6",
                activeTab === item.href && "text-sidebar-accent"
              )} />
              <span className="hidden xl:block text-lg">{item.label}</span>
              {item.label === "알림" && (
                <span className="hidden xl:flex items-center justify-center w-5 h-5 text-xs bg-accent text-accent-foreground rounded-full ml-auto">
                  3
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Post Button */}
        <Button className="mt-4 w-12 h-12 xl:w-full xl:h-12 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
          <Feather className="w-6 h-6 xl:hidden" />
          <span className="hidden xl:block font-semibold text-base">게시하기</span>
        </Button>
      </div>

      {/* User Profile */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-center xl:justify-start gap-3 p-3 rounded-full hover:bg-sidebar-accent/20 transition-colors w-full">
            <Avatar className="w-10 h-10 border-2 border-sidebar-accent">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">나</AvatarFallback>
            </Avatar>
            <div className="hidden xl:flex flex-col items-start flex-1">
              <span className="font-semibold text-sm">사용자</span>
              <span className="text-xs text-sidebar-foreground/60">@username</span>
            </div>
            <MoreHorizontal className="hidden xl:block w-5 h-5 text-sidebar-foreground/60" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>
            <Settings className="w-4 h-4 mr-2" />
            설정
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </aside>
  )
}
