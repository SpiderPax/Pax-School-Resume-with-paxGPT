import { Card } from "@/components/ui/card"
import { BookOpen, Calculator, Globe } from "lucide-react"

const skills = [
  {
    icon: Calculator,
    title: "Mathematics",
    description: "Advanced coursework including Algebra I and Geometry",
    level: "Advanced",
  },
  {
    icon: Globe,
    title: "Spanish",
    description: "Currently enrolled in Spanish I, developing language skills",
    level: "Intermediate",
  },
  {
    icon: BookOpen,
    title: "Visual Arts",
    description: "Drawing and creative projects, expressing ideas visually",
    level: "Proficient",
  },
]

export function Academics() {
  return (
    <section id="academics" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-4xl">
        <h3 className="text-sm uppercase tracking-wider text-primary mb-4">Academics</h3>
        <h2 className="text-4xl font-bold text-foreground mb-8">Academic Interests & Skills</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          My academic journey is driven by a passion for problem-solving and creative expression. I excel in mathematics
          and enjoy exploring new languages and artistic mediums.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <Card key={skill.title} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                  {skill.level}
                </span>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h4 className="text-xl font-semibold text-foreground mb-4">Key Academic Achievements</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3">▸</span>
              <span>Completed Algebra I in 7th grade, demonstrating advanced mathematical aptitude</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">▸</span>
              <span>Maintained strong GPA through self-directed learning in Montessori environment</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">▸</span>
              <span>Developed critical thinking and time management skills through independent study</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
