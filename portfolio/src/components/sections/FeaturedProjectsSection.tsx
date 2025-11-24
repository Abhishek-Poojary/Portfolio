import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ArrowRight } from "lucide-react"
import { useProjects } from "@/hooks/useProjects"
import { Link } from "react-router-dom"

export function FeaturedProjectsSection() {
  const { featured } = useProjects()

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-foreground/60 mt-2">Showcase of recent work and case studies</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex bg-transparent">
            <Link to="/projects">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featured.map((project) => (
            <div
              key={project.id}
              onClick={() => (window.location.href = project.links.case)}
              className="cursor-pointer"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <Button variant="outline" asChild className="w-full md:hidden bg-transparent">
          <Link to="/projects">View All Projects</Link>
        </Button>
      </div>
    </section>
  )
}
