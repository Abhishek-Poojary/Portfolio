import { useMemo } from "react"
import { getAllProjects, getFeaturedProjects } from "@/lib/services/projects"

export function useProjects() {
  const allProjects = useMemo(() => getAllProjects(), [])
  const featuredProjects = useMemo(() => getFeaturedProjects(), [])

  return { allProjects, featuredProjects }
}
