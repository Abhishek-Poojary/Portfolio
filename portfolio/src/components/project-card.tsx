import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types"

export function ProjectCard(project: Project) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4 h-48 rounded-lg overflow-hidden bg-muted transition-transform duration-300 group-hover:scale-105">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-foreground/60 text-sm mt-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}
