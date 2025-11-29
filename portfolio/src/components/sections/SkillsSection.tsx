import { SKILLS } from "@/constants/content"

export function SkillsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg text-foreground mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-3 py-1 rounded-full bg-secondary/20 text-foreground/80 text-sm border border-border"
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
