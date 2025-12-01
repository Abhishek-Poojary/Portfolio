import { Link } from "react-router-dom"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/lib/services/projects"

export function FeaturedProjectsSection() {
  const projects = getFeaturedProjects()

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-foreground/60 mt-2">Recent work I'm proud of</p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex gap-2 bg-transparent">
            <Link to="/projects">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <Button variant="outline" asChild className="w-full sm:hidden bg-transparent">
          <Link to="/projects">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
