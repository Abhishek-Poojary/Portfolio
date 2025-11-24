import { SkillBadge } from "@/components/skill-badge"
import { SKILLS } from "@/constants/content"

export function SkillsSection() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup) => (
            <SkillBadge key={skillGroup.category} {...skillGroup} />
          ))}
        </div>
      </div>
    </section>
  )
}
