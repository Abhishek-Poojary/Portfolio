import type { SkillCategory } from "@/types/index"
import { SKILLS } from "@/constants/content"

export const getAllSkills = (): SkillCategory[] => {
  return SKILLS
}

export const getSkillsByCategory = (category: string): string[] | undefined => {
  return SKILLS.find((skill) => skill.category === category)?.items
}
