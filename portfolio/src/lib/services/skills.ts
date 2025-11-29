import { SKILLS } from "@/constants/content"

export function getSkills() {
  return SKILLS
}

export function getSkillsByCategory(category: string) {
  return SKILLS.find((s) => s.category === category)
}
