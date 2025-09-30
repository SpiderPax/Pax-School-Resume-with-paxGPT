import { Card } from "@/components/ui/card"
import { Palette, Music, Guitar } from "lucide-react"

const hobbies = [
  {
    icon: Palette,
    title: "Drawing & Visual Arts",
    description:
      "I love expressing myself through drawing and creative projects, exploring different styles and techniques.",
  },
  {
    icon: Guitar,
    title: "Playing Guitar",
    description: "Learning guitar has taught me patience and the joy of creating music with my own hands.",
  },
  {
    icon: Music,
    title: "Music Enthusiast",
    description: "I enjoy a diverse range of music including rock, hip-hop, soft rock, surf rock, and reggae.",
  },
]

export function Interests() {
  return (
    <section id="interests" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-4xl">
        <h3 className="text-sm uppercase tracking-wider text-primary mb-4">Interests</h3>
        <h2 className="text-4xl font-bold text-foreground mb-8">Hobbies & Personal Interests</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Beyond academics and athletics, I'm passionate about creative expression through art and music. These hobbies
          help me relax, explore new ideas, and develop a well-rounded perspective.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon
            return (
              <Card key={hobby.title} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{hobby.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{hobby.description}</p>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <h4 className="text-xl font-semibold text-foreground mb-4">The Importance of Balance</h4>
          <p className="text-muted-foreground leading-relaxed">
            I believe in maintaining a healthy balance between academics, athletics, and creative pursuits. Drawing and
            playing guitar provide me with outlets for self-expression and help me approach challenges with fresh
            perspectives. Music, in particular, has taught me about rhythm, patterns, and the beauty of diverse
            influences—lessons that apply to coding and problem-solving as well.
          </p>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Want to learn more about me?</p>
          <p className="text-lg text-foreground">
            Try asking <span className="text-primary font-semibold">paxGPT</span> in the chat below! 💬
          </p>
        </div>
      </div>
    </section>
  )
}
