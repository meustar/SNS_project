"use client"

import { Search, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const trends = [
  { category: "기술", title: "#React19", posts: "12.5K" },
  { category: "트렌드", title: "#개발자일상", posts: "8.2K" },
  { category: "스포츠", title: "#프리미어리그", posts: "45.3K" },
  { category: "엔터테인먼트", title: "#넷플릭스", posts: "23.1K" },
  { category: "기술", title: "#AI발전", posts: "67.8K" },
]

const suggestedUsers = [
  {
    name: "정다은",
    username: "daeun_jung",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=daeun",
    verified: true,
  },
  {
    name: "한지민",
    username: "jimin_han",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jimin",
    verified: false,
  },
  {
    name: "송현우",
    username: "hyunwoo_song",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hyunwoo",
    verified: true,
  },
]

export function RightSidebar() {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-80 xl:w-96 px-4 py-2 sticky top-0 h-screen overflow-y-auto">
      {/* Search */}
      <div className="sticky top-0 pt-2 pb-3 bg-background">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="검색"
            className="pl-12 bg-muted border-0 rounded-full focus-visible:ring-primary focus-visible:ring-2"
          />
        </div>
      </div>

      {/* Trends */}
      <Card className="bg-muted/50 border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">대한민국의 트렌드</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {trends.map((trend, index) => (
            <button
              key={index}
              className="w-full flex items-start justify-between p-4 hover:bg-background/50 transition-colors text-left"
            >
              <div>
                <p className="text-xs text-muted-foreground">{trend.category} · 트렌드</p>
                <p className="font-semibold text-foreground mt-0.5">{trend.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{trend.posts} 게시물</p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary -mr-2">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </button>
          ))}
          <button className="w-full p-4 text-primary hover:bg-background/50 transition-colors text-left font-medium">
            더 보기
          </button>
        </CardContent>
      </Card>

      {/* Who to follow */}
      <Card className="bg-muted/50 border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">팔로우 추천</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {suggestedUsers.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-background/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {user.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm text-foreground">{user.name}</span>
                    {user.verified && (
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">@{user.username}</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-foreground/20 hover:bg-foreground hover:text-background font-semibold bg-transparent"
              >
                팔로우
              </Button>
            </div>
          ))}
          <button className="w-full p-4 text-primary hover:bg-background/50 transition-colors text-left font-medium">
            더 보기
          </button>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-xs text-muted-foreground px-4 pb-4">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <a href="#" className="hover:underline">이용약관</a>
          <a href="#" className="hover:underline">개인정보처리방침</a>
          <a href="#" className="hover:underline">쿠키 정책</a>
          <a href="#" className="hover:underline">접근성</a>
          <a href="#" className="hover:underline">광고 정보</a>
        </div>
        <p className="mt-2">© 2026 Chirp, Inc.</p>
      </div>
    </aside>
  )
}
