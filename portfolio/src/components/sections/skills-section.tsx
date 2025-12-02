import { SKILLS } from "@/constants/content"

export function SkillsSection() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Expertise</h2>
          <p className="text-foreground/70 mt-3 text-lg">Technologies and frameworks I excel at</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div
              key={idx}
              className="glass rounded-xl p-6 hover-lift fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="font-semibold text-lg text-primary mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-3 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium border border-primary/30 hover:bg-primary/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
