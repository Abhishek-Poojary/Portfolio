import { FEATURED_PROJECTS_COUNT } from "@/constants/config"
import { PROJECTS } from "@/constants/content"

export function getAllProjects() {
  return PROJECTS
}

export function getFeaturedProjects() {
  return PROJECTS.slice(0, FEATURED_PROJECTS_COUNT)
}

export function getProjectById(id: number) {
  return PROJECTS.find((p) => p.id === id)
}
