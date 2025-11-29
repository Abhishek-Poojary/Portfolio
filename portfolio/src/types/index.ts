export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  links: {
    live: string
    github: string
    case: string
  }
  problem: string
  solution: string
  challenges: string[]
  improvements: string[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface TimelineEntry {
  year: string
  title: string
  company: string
  description: string
}
