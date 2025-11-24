import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  links: {
    live: string
    github: string
    case: string
  }
}

export function ProjectCard({ title, description, image, technologies, links }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary/50">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-4 border-t border-border">
          <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
            <a href={links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" /> Code
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}
