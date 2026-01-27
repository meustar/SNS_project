import { Sidebar } from "@/components/sidebar"
import { Feed } from "@/components/feed"
import { RightSidebar } from "@/components/right-sidebar"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex max-w-[1400px] mx-auto">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        {/* Main Feed */}
        <Feed />
        
        {/* Right Sidebar - Hidden on tablet and mobile */}
        <RightSidebar />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
