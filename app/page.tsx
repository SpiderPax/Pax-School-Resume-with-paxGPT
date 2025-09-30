import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Academics } from "@/components/academics"
import { Leadership } from "@/components/leadership"
import { Athletics } from "@/components/athletics"
import { Community } from "@/components/community"
import { Interests } from "@/components/interests"
import { ChatBot } from "@/components/chatbot"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="lg:ml-64">
        <Hero />
        <About />
        <Academics />
        <Leadership />
        <Athletics />
        <Community />
        <Interests />
      </main>
      <ChatBot />
    </div>
  )
}
