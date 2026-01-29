"use client"

import { Search } from "lucide-react"

const trends = [
  { category: "대한민국에서 트렌드 중", topic: "#기술", posts: "12.5만 게시물" },
  { category: "트렌드", topic: "인공지능", posts: "8.3만 게시물" },
  { category: "음악 · 트렌드", topic: "K-POP", posts: "25.1만 게시물" },
  { category: "스포츠 · 트렌드", topic: "프로야구", posts: "5.2만 게시물" },
  { category: "엔터테인먼트 · 트렌드", topic: "신작 드라마", posts: "3.8만 게시물" },
]

const suggestions = [
  { name: "테크뉴스", handle: "@technews_kr", avatar: "T" },
  { name: "디자인허브", handle: "@designhub", avatar: "D" },
  { name: "개발자모임", handle: "@devmeetup", avatar: "개" },
]

export function RightSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-80 xl:w-[350px] h-screen sticky top-0 py-4 pl-6 pr-4 gap-4">
      {/* Search Bar */}
      <div className="relative group h-12 flex items-center">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-sky-blue transition-colors" />
        <input
          type="text"
          placeholder="검색"
          className="w-full h-full pl-12 pr-4 rounded-full bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/30 transition-all duration-300"
        />
      </div>

      {/* Trends Section */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border">
        <h2 className="font-bold text-xl px-4 py-3 text-electric-purple text-glow-purple">나를 위한 트렌드</h2>
        <div className="flex flex-col">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-accent transition-all duration-300 cursor-pointer group"
            >
              <p className="text-xs text-muted-foreground leading-tight">{trend.category}</p>
              <p className="font-bold mt-0.5 leading-tight group-hover:text-sky-blue transition-colors">{trend.topic}</p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{trend.posts}</p>
            </div>
          ))}
        </div>
        <button className="w-full px-4 py-3 text-left text-sky-blue hover:bg-accent transition-all duration-300 text-sm font-medium">
          더 보기
        </button>
      </div>

      {/* Who to Follow */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border">
        <h2 className="font-bold text-xl px-4 py-3 text-electric-purple text-glow-purple">팔로우 추천</h2>
        <div className="flex flex-col">
          {suggestions.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 hover:bg-accent transition-all duration-300 cursor-pointer group gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-purple to-sky-blue flex items-center justify-center font-bold text-background">
                    {user.avatar}
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-lime-green rounded-full border-2 border-card"></span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm leading-tight group-hover:text-electric-purple transition-colors truncate">{user.name}</p>
                  <p className="text-muted-foreground text-sm leading-tight truncate">{user.handle}</p>
                </div>
              </div>
              <button className="shrink-0 px-4 py-1.5 bg-foreground text-background rounded-full font-bold text-sm hover:bg-electric-purple hover:text-background hover:glow-purple transition-all duration-300">
                팔로우
              </button>
            </div>
          ))}
        </div>
        <button className="w-full px-4 py-3 text-left text-sky-blue hover:bg-accent transition-all duration-300 text-sm font-medium">
          더 보기
        </button>
      </div>

      {/* Footer Links */}
      <div className="px-4 text-xs text-muted-foreground flex flex-wrap gap-x-2 gap-y-1">
        <span className="hover:text-sky-blue hover:underline cursor-pointer transition-colors">이용약관</span>
        <span className="hover:text-sky-blue hover:underline cursor-pointer transition-colors">개인정보처리방침</span>
        <span className="hover:text-sky-blue hover:underline cursor-pointer transition-colors">쿠키 정책</span>
        <span className="hover:text-sky-blue hover:underline cursor-pointer transition-colors">접근성</span>
        <span>© 2026 소셜</span>
      </div>
    </aside>
  )
}
