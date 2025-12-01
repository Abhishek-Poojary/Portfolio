import { useParams } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { getAllProjects } from "@/lib/services/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectDetail() {
  const { id } = useParams()
  const projects = getAllProjects()
  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <p className="text-foreground/70">Project not found</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <article className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-foreground/70">{project.description}</p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                  <p className="text-foreground/70 leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                  <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Challenges Solved</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">✓</span>
                        <span className="text-foreground/70">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
                  <ul className="space-y-3">
                    {project.improvements.map((improvement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-muted-foreground flex-shrink-0">→</span>
                        <span className="text-foreground/70">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button className="gap-2 w-full" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2 w-full bg-transparent" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
