export interface SkillBadgeProps {
  category: string
  items: string[]
}

export function SkillBadge({ category, items }: SkillBadgeProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-primary text-lg">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <div
            key={skill}
            className="px-3 py-1.5 bg-secondary/50 text-foreground text-sm rounded-md hover:bg-secondary transition-colors cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
