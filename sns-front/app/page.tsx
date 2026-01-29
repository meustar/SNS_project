import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Feed } from "@/components/feed"
import { MobileNav } from "@/components/mobile-nav"
import { MobileHeader } from "@/components/mobile-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MobileHeader />
      <div className="flex justify-center mx-auto max-w-[1280px]">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
      <MobileNav />
    </div>
  )
}
