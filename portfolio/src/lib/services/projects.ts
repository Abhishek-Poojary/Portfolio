import type { Project } from "@/types/index"
import { PROJECTS } from "@/constants/content"
import { FEATURED_PROJECTS_COUNT } from "@/constants/config"

/**
 * Fetch all projects
 * In production, this would call an API endpoint
 */
export const getAllProjects = (): Project[] => {
  return PROJECTS
}

/**
 * Fetch a single project by ID
 */
export const getProjectById = (id: number): Project | undefined => {
  return PROJECTS.find((project) => project.id === id)
}

/**
 * Fetch featured projects (first N projects)
 */
export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.slice(0, FEATURED_PROJECTS_COUNT)
}

/**
 * Fetch projects paginated
 */
export const getProjectsPaginated = (page = 1, perPage = 6): Project[] => {
  const start = (page - 1) * perPage
  const end = start + perPage
  return PROJECTS.slice(start, end)
}
