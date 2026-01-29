"use client"

import { useState } from "react"
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, ImageIcon, Smile, Calendar, MapPin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const posts = [
  {
    id: 1,
    user: {
      name: "김개발",
      handle: "@devkim",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "김",
    },
    content: "오늘 새로운 프로젝트를 시작했습니다! React와 Next.js를 사용해서 멋진 앱을 만들어볼 예정이에요. 기대해주세요",
    timestamp: "2시간",
    likes: 128,
    comments: 24,
    reposts: 15,
    liked: false,
  },
  {
    id: 2,
    user: {
      name: "이디자인",
      handle: "@designlee",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "이",
    },
    content: "UI/UX 디자인의 핵심은 사용자 경험입니다. 아름다운 것보다 사용하기 쉬운 것이 더 중요해요. 오늘 새로운 디자인 시스템을 완성했습니다!",
    timestamp: "4시간",
    likes: 256,
    comments: 42,
    reposts: 38,
    liked: true,
  },
  {
    id: 3,
    user: {
      name: "박스타트업",
      handle: "@startuppark",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "박",
    },
    content: "스타트업 창업 3년차. 힘든 시간도 많았지만, 팀원들과 함께라서 여기까지 올 수 있었습니다. 앞으로도 화이팅!",
    timestamp: "6시간",
    likes: 512,
    comments: 89,
    reposts: 67,
    liked: false,
  },
  {
    id: 4,
    user: {
      name: "최테크",
      handle: "@techchoi",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "최",
    },
    content: "AI 기술이 정말 빠르게 발전하고 있네요. 매일 새로운 것을 배우고 있습니다. 개발자로서 정말 흥미로운 시대에 살고 있어요!",
    timestamp: "8시간",
    likes: 384,
    comments: 56,
    reposts: 43,
    liked: false,
  },
  {
    id: 5,
    user: {
      name: "정커피",
      handle: "@coffeejung",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "정",
    },
    content: "좋은 코드는 좋은 커피에서 시작됩니다. 오늘도 카페에서 코딩 중! 집중력이 확 올라가네요.",
    timestamp: "12시간",
    likes: 198,
    comments: 31,
    reposts: 12,
    liked: true,
  },
]

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "천"
  }
  return num.toString()
}

export function Feed() {
  const [activeTab, setActiveTab] = useState<"추천" | "팔로잉">("추천")
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>(
    posts.reduce((acc, post) => ({ ...acc, [post.id]: post.liked }), {})
  )
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>(
    posts.reduce((acc, post) => ({ ...acc, [post.id]: post.likes }), {})
  )

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
    setLikeCounts((prev) => ({
      ...prev,
      [postId]: prev[postId] + (likedPosts[postId] ? -1 : 1),
    }))
  }

  return (
    <main className="flex-1 w-full max-w-[600px] border-x border-border min-h-screen">
      {/* Header with Glassmorphism */}
      <div className="sticky top-0 z-10 glassmorphism border-b border-border">
        <div className="flex h-14">
          <button 
            onClick={() => setActiveTab("추천")}
            className={`flex-1 flex items-center justify-center transition-all duration-300 font-bold relative ${
              activeTab === "추천" 
                ? "text-foreground" 
                : "text-muted-foreground hover:bg-accent/50"
            }`}
          >
            추천
            {activeTab === "추천" && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-electric-purple rounded-full glow-purple"></span>
            )}
          </button>
          <button 
            onClick={() => setActiveTab("팔로잉")}
            className={`flex-1 flex items-center justify-center transition-all duration-300 font-bold relative ${
              activeTab === "팔로잉" 
                ? "text-foreground" 
                : "text-muted-foreground hover:bg-accent/50"
            }`}
          >
            팔로잉
            {activeTab === "팔로잉" && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-electric-purple rounded-full glow-purple"></span>
            )}
          </button>
        </div>
      </div>

      {/* Compose */}
      <div className="p-4 border-b border-border">
        <div className="flex gap-4">
          <Avatar className="w-10 h-10 shrink-0 ring-2 ring-electric-purple/30">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback className="bg-gradient-to-br from-electric-purple to-sky-blue text-background">나</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <textarea
              placeholder="무슨 일이 일어나고 있나요?"
              className="w-full resize-none bg-transparent text-xl outline-none placeholder:text-muted-foreground min-h-[80px] text-foreground leading-relaxed"
            />
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-0.5">
                <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-sky-blue/10 text-sky-blue transition-all duration-300">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-sky-blue/10 text-sky-blue transition-all duration-300">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-sky-blue/10 text-sky-blue transition-all duration-300">
                  <Calendar className="w-5 h-5" />
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-sky-blue/10 text-sky-blue transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
              <button className="rounded-full px-5 h-9 font-bold bg-gradient-to-r from-electric-purple to-sky-blue text-background hover:glow-purple transition-all duration-300 hover:scale-105 flex items-center justify-center">
                게시하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div>
        {posts.map((post) => (
          <article
            key={post.id}
            className="px-4 py-3 border-b border-border hover:bg-accent/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 shrink-0">
                <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-gradient-to-br from-electric-purple to-sky-blue text-background font-bold">
                  {post.user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-baseline gap-1 flex-wrap min-w-0">
                    <span className="font-bold hover:underline hover:text-electric-purple transition-colors truncate">
                      {post.user.name}
                    </span>
                    <span className="text-muted-foreground text-sm truncate">
                      {post.user.handle}
                    </span>
                    <span className="text-muted-foreground text-sm">·</span>
                    <span className="text-muted-foreground text-sm hover:underline hover:text-sky-blue transition-colors shrink-0">
                      {post.timestamp}
                    </span>
                  </div>
                  <button className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full hover:bg-sky-blue/10 text-muted-foreground hover:text-sky-blue transition-all duration-300 -mt-1 -mr-2">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <p className="mt-1 text-[15px] leading-relaxed whitespace-pre-wrap text-foreground">
                  {post.content}
                </p>
                <div className="flex items-center justify-between mt-3 -ml-2">
                  {/* Reply - Sky Blue */}
                  <button className="flex items-center group">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-sky-blue/10 transition-all duration-300">
                      <MessageCircle className="w-[18px] h-[18px] text-muted-foreground group-hover:text-sky-blue transition-colors" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-sky-blue transition-colors min-w-[2ch]">
                      {post.comments}
                    </span>
                  </button>
                  {/* Repost - Lime Green */}
                  <button className="flex items-center group">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-lime-green/10 transition-all duration-300">
                      <Repeat2 className="w-[18px] h-[18px] text-muted-foreground group-hover:text-lime-green transition-colors" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-lime-green transition-colors min-w-[2ch]">
                      {post.reposts}
                    </span>
                  </button>
                  {/* Like - Orange */}
                  <button
                    className="flex items-center group"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(post.id)
                    }}
                  >
                    <div className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                      likedPosts[post.id] ? "" : "group-hover:bg-bright-orange/10"
                    }`}>
                      <Heart
                        className={`w-[18px] h-[18px] transition-all duration-300 ${
                          likedPosts[post.id]
                            ? "fill-bright-orange text-bright-orange scale-110"
                            : "text-muted-foreground group-hover:text-bright-orange"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm transition-colors min-w-[2ch] ${
                        likedPosts[post.id]
                          ? "text-bright-orange"
                          : "text-muted-foreground group-hover:text-bright-orange"
                      }`}
                    >
                      {formatNumber(likeCounts[post.id])}
                    </span>
                  </button>
                  {/* Share - Sky Blue */}
                  <button className="flex items-center group">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-sky-blue/10 transition-all duration-300">
                      <Share className="w-[18px] h-[18px] text-muted-foreground group-hover:text-sky-blue transition-colors" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
