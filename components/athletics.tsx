import { Card } from "@/components/ui/card"
import { Trophy, Waves } from "lucide-react"

export function Athletics() {
  return (
    <section id="athletics" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-4xl">
        <h3 className="text-sm uppercase tracking-wider text-primary mb-4">Athletics</h3>
        <h2 className="text-4xl font-bold text-foreground mb-8">Athletics & Extracurriculars</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Sports have taught me discipline, teamwork, and resilience. I'm committed to excellence both on and off the
          field, constantly pushing myself to improve.
        </p>

        <div className="space-y-6">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-foreground mb-2">Soccer — Richmond United</h4>
                <p className="text-sm text-muted-foreground">Elite Red 1, U14 • Spring–Fall Season</p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start">
                <span className="text-primary mr-3 mt-1">▸</span>
                <p>
                  <span className="text-foreground font-medium">Voted MVP</span> in my first season of travel soccer,
                  recognizing outstanding performance and leadership
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3 mt-1">▸</span>
                <p>
                  Committed to <span className="text-foreground font-medium">3 practices + 1 game per week</span>,
                  demonstrating dedication and time management
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3 mt-1">▸</span>
                <p>
                  Competed in <span className="text-foreground font-medium">~30 games per season</span>, developing
                  competitive spirit and teamwork
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                MVP Award
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                Elite Level
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                Team Captain Qualities
              </span>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-accent/50 transition-colors">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Waves className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-foreground mb-2">Swimming — Anirav Riptides</h4>
                <p className="text-sm text-muted-foreground">Since 2023 • Competitive Swim Team</p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start">
                <span className="text-accent mr-3 mt-1">▸</span>
                <p>
                  Regular participation in <span className="text-foreground font-medium">competitive swim meets</span>,
                  building endurance and technique
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent mr-3 mt-1">▸</span>
                <p>
                  Developed <span className="text-foreground font-medium">strong work ethic</span> through consistent
                  training and practice
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20">
          <h4 className="text-lg font-semibold text-foreground mb-3">What Sports Have Taught Me</h4>
          <p className="text-muted-foreground leading-relaxed">
            Through soccer and swimming, I've developed strong teamwork, discipline, and physical fitness. These sports
            have taught me the value of perseverance, the importance of supporting teammates, and how to perform under
            pressure—skills that translate directly to academic and professional success.
          </p>
        </div>
      </div>
    </section>
  )
}
