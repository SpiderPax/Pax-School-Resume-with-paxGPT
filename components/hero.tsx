export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-4xl">
        <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Building the future, one line of code at a time
        </h2>
        <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
          I'm a middle school student passionate about <span className="text-primary">mathematics</span>,{" "}
          <span className="text-primary">technology</span>, and <span className="text-primary">leadership</span>.
          Currently seeking admission to competitive coding high schools where I can grow my skills and make an impact.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
            3.9 GPA
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
            Advanced Math
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
            Soccer MVP
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
            Chess Club Leader
          </span>
        </div>
      </div>
    </section>
  )
}
