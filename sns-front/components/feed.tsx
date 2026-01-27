"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, MessageCircle, Repeat2, Share, ImageIcon, Smile, CalendarDays, MapPin, MoreHorizontal, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

const posts = [
  {
    id: 1,
    user: {
      name: "김민수",
      username: "minsu_kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=minsu",
    },
    content: "오늘 새로운 프로젝트를 시작했어요! 정말 설레네요 ✨ 열심히 해서 좋은 결과물 만들어볼게요!",
    timestamp: "2시간",
    likes: 42,
    comments: 8,
    reposts: 3,
    liked: false,
    bookmarked: false,
  },
  {
    id: 2,
    user: {
      name: "이서연",
      username: "seoyeon_lee",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=seoyeon",
    },
    content: "주말에 카페에서 코딩하는 건 정말 최고의 힐링이에요 ☕️💻 오늘도 화이팅!",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
    timestamp: "4시간",
    likes: 128,
    comments: 24,
    reposts: 12,
    liked: true,
    bookmarked: true,
  },
  {
    id: 3,
    user: {
      name: "박준혁",
      username: "junhyuk_park",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=junhyuk",
    },
    content: "React 19가 정말 대단하네요! 새로운 기능들 테스트해보는 중인데 개발 경험이 한층 좋아졌어요 🚀",
    timestamp: "6시간",
    likes: 256,
    comments: 45,
    reposts: 67,
    liked: false,
    bookmarked: false,
  },
  {
    id: 4,
    user: {
      name: "최유진",
      username: "yujin_choi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yujin",
    },
    content: "오늘 저녁 하늘이 너무 예뻐서 한 장 📸 모두 좋은 하루 보내세요!",
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&h=400&fit=crop",
    timestamp: "8시간",
    likes: 89,
    comments: 12,
    reposts: 5,
    liked: false,
    bookmarked: false,
  },
]

export function Feed() {
  const [postList, setPostList] = useState(posts)
  const [newPost, setNewPost] = useState("")

  const handleLike = (postId: number) => {
    setPostList(postList.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ))
  }

  const handleBookmark = (postId: number) => {
    setPostList(postList.map(post => 
      post.id === postId 
        ? { ...post, bookmarked: !post.bookmarked }
        : post
    ))
  }

  const handleSubmit = () => {
    if (!newPost.trim()) return
    const post = {
      id: Date.now(),
      user: {
        name: "사용자",
        username: "username",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
      },
      content: newPost,
      timestamp: "방금",
      likes: 0,
      comments: 0,
      reposts: 0,
      liked: false,
      bookmarked: false,
    }
    setPostList([post, ...postList])
    setNewPost("")
  }

  return (
    <main className="flex-1 border-x border-border min-h-screen max-w-2xl">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border p-4">
        <h1 className="text-xl font-bold text-foreground">홈</h1>
      </header>

      {/* Compose */}
      <Card className="border-x-0 border-t-0 rounded-none p-4">
        <div className="flex gap-3">
          <Avatar className="w-12 h-12 border-2 border-accent">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback className="bg-accent text-accent-foreground">나</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="무슨 일이 일어나고 있나요?"
              className="w-full bg-transparent text-lg placeholder:text-muted-foreground resize-none outline-none min-h-[80px]"
            />
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-primary/10 rounded-full">
                  <ImageIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-primary/10 rounded-full">
                  <Smile className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-primary/10 rounded-full">
                  <CalendarDays className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-primary/10 rounded-full">
                  <MapPin className="w-5 h-5" />
                </Button>
              </div>
              <Button 
                onClick={handleSubmit}
                disabled={!newPost.trim()}
                className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 px-5"
              >
                게시하기
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Posts */}
      <div className="divide-y divide-border">
        {postList.map((post) => (
          <article key={post.id} className="p-4 hover:bg-muted/50 transition-colors">
            <div className="flex gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {post.user.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="font-semibold text-foreground">{post.user.name}</span>
                    <span className="text-muted-foreground">@{post.user.username}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{post.timestamp}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary -mr-2">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-foreground mt-1 whitespace-pre-wrap">{post.content}</p>
                {post.image && (
                  <div className="mt-3 rounded-2xl overflow-hidden border border-border">
                    <img 
                      src={post.image || "/placeholder.svg"} 
                      alt="Post image" 
                      className="w-full object-cover max-h-96"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between mt-3 max-w-md">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full"
                  >
                    <Repeat2 className="w-5 h-5" />
                    <span className="text-sm">{post.reposts}</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleLike(post.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-full",
                      post.liked 
                        ? "text-pink-500 hover:bg-pink-500/10" 
                        : "text-muted-foreground hover:text-pink-500 hover:bg-pink-500/10"
                    )}
                  >
                    <Heart className={cn("w-5 h-5", post.liked && "fill-current")} />
                    <span className="text-sm">{post.likes}</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleBookmark(post.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-full",
                      post.bookmarked 
                        ? "text-primary hover:bg-primary/10" 
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    <Bookmark className={cn("w-5 h-5", post.bookmarked && "fill-current")} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full"
                  >
                    <Share className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
