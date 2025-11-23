import { useMemo } from "react"
import { getAllProjects, getFeaturedProjects, getProjectById } from "@/lib/services/projects"

export const useProjects = () => {
  const all = useMemo(() => getAllProjects(), [])
  const featured = useMemo(() => getFeaturedProjects(), [])

  return { all, featured }
}

export const useProjectById = (id: number | string) => {
  const project = useMemo(() => getProjectById(Number(id)), [id])

  return project
}
