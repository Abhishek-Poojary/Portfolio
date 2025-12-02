import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types"
import { ArrowUpRight } from "lucide-react"

export function ProjectCard(project: Project) {
  return (
    <div className="group cursor-pointer h-full">
      <div className="relative mb-4 h-56 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ArrowUpRight className="w-8 h-8 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              className="text-xs bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-all"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge className="text-xs bg-foreground/10 text-foreground/70 border border-foreground/20">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}
