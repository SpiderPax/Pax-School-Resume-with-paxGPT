import { Card } from "@/components/ui/card"
import { Trophy, Users, Target } from "lucide-react"

export function Leadership() {
  return (
    <section id="leadership" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-4xl">
        <h3 className="text-sm uppercase tracking-wider text-primary mb-4">Leadership</h3>
        <h2 className="text-4xl font-bold text-foreground mb-8">Leadership & School Involvement</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          I believe in leading by example and empowering others. Through various roles at school, I've learned the
          importance of collaboration, communication, and taking initiative.
        </p>

        <div className="space-y-6">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-foreground mb-2">Former Chess Club Leader</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Led the school chess club, organizing meetings, teaching strategies to fellow students, and fostering
                  a collaborative learning environment. Developed strategic thinking and mentorship skills.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-foreground mb-2">Candidate for School Vice President</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ran for school vice president, demonstrating initiative and commitment to improving the school
                  community. Developed public speaking and campaign management skills.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Active Participant in Multi-Age Classroom
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Engaged in group projects and peer learning in a multi-age classroom (Grades 6–8). Learned to
                  collaborate with students of different ages and skill levels, developing empathy and communication
                  skills.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <h4 className="text-lg font-semibold text-foreground mb-3">Leadership Philosophy</h4>
          <p className="text-muted-foreground leading-relaxed">
            "Leadership isn't about being in charge—it's about taking care of those in your charge. I strive to create
            environments where everyone feels valued and empowered to contribute their best."
          </p>
        </div>
      </div>
    </section>
  )
}
