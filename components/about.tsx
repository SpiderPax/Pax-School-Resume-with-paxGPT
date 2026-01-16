import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-4xl">
        <h3 className="text-sm uppercase tracking-wider text-primary mb-4">About</h3>
        <h2 className="text-4xl font-bold text-foreground mb-8">Who I Am</h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm currently a student at <span className="text-foreground font-medium">Central Montessori School</span> in
            Richmond, VA, where I've been learning since 2015. The Montessori approach has taught me invaluable skills
            in independent time management, self-directed learning, and collaboration.
          </p>

          <p>
            My academic journey has been driven by curiosity and a love for problem-solving. I completed{" "}
            <span className="text-foreground font-medium">Algebra I in 7th grade</span> and am currently enrolled in
            Geometry and Spanish I, maintaining a strong GPA of 4.0 currently with3.9 in 6th grade and 3.7 in 7th grade.
          </p>

          <p>
            Beyond academics, I believe in giving back to my community and staying active. Whether I'm on the soccer
            field, in the pool, or volunteering to help those in need, I strive to make a positive impact wherever I go.
          </p>
        </div>

        <Card className="mt-8 p-6 bg-card border-border">
          <h4 className="text-lg font-semibold text-foreground mb-4">Education</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-foreground">Central Montessori School</p>
                <p className="text-sm text-muted-foreground">Richmond, VA</p>
              </div>
              <span className="text-sm text-muted-foreground">2015 — Present</span>
            </div>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <p>• GPA: 4.0 (current), 3.7 (7th grade), 3.9 (6th grade)</p>
              <p>• Completed Algebra I in 7th grade</p>
              <p>• Currently enrolled in Geometry and Spanish I</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
