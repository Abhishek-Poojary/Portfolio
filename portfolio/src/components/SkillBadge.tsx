interface SkillBadgeProps {
  skill: string
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="px-3 py-1 rounded-full bg-secondary/20 text-foreground/80 text-sm border border-border">
      {skill}
    </span>
  )
}
