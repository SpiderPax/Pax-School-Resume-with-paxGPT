import { Card } from "@/components/ui/card"
import { Heart, Leaf, Sparkles } from "lucide-react"

const activities = [
  {
    icon: Heart,
    title: "Making Meals for the Homeless",
    description:
      "Prepared and distributed meals to those in need, learning the importance of compassion and direct community support.",
  },
  {
    icon: Sparkles,
    title: "Food Donations to Feed More",
    description: "Contributed to local food bank initiatives, helping ensure families have access to nutritious meals.",
  },
  {
    icon: Sparkles,
    title: "Cleaning Local Bus Stops",
    description:
      "Volunteered to clean and maintain public spaces, taking pride in improving the community environment.",
  },
  {
    icon: Leaf,
    title: "Volunteered on Native American Farms",
    description: "Worked on Native American farms, learning about sustainable agriculture and cultural heritage.",
  },
]

export function Community() {
  return (
    <section id="community" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-4xl">
        <h3 className="text-sm uppercase tracking-wider text-primary mb-4">Community</h3>
        <h2 className="text-4xl font-bold text-foreground mb-8">Community Engagement</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Giving back to my community is important to me. I believe in taking action to help those in need and making a
          positive impact in the world around me.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <Card
                key={activity.title}
                className="p-6 bg-card border-border hover:border-primary/50 transition-colors"
              >
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{activity.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h4 className="text-xl font-semibold text-foreground mb-4">Why Community Service Matters</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Community service has taught me empathy, gratitude, and the power of collective action. Whether I'm helping
            feed the homeless or maintaining public spaces, I've learned that small actions can make a big difference.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These experiences have shaped my values and reinforced my commitment to using my skills and opportunities to
            help others—a principle I'll carry throughout my education and career.
          </p>
        </Card>
      </div>
    </section>
  )
}
