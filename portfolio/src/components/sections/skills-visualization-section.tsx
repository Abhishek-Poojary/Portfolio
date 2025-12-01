import { SkillRadar } from "@/components/skill-radar"

export function SkillsVisualizationSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Technical Proficiency</h2>
          <p className="text-foreground/60 max-w-2xl">
            Interactive visualization of my expertise across different technology stacks and domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Radar Chart */}
          <div className="rounded-lg border border-border bg-background/50 backdrop-blur-sm p-6">
            <h3 className="text-lg font-semibold mb-6">Skill Proficiency Radar</h3>
            <SkillRadar />
          </div>

          {/* Skill Categories */}
          <div className="space-y-4">
            <div className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all group">
              <h3 className="font-semibold text-lg text-primary mb-3">Frontend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30 group-hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all group">
              <h3 className="font-semibold text-lg text-primary mb-3">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "PostgreSQL", "Redis", "Docker", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30 group-hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all group">
              <h3 className="font-semibold text-lg text-primary mb-3">Design & UX</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "UI/UX Design", "Accessibility", "Design Systems", "Prototyping"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30 group-hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
