import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { getAllProjects } from "@/lib/services/projects"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ReturnType<typeof getAllProjects>[0] | null>(null)
  const projects = getAllProjects()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-lg text-foreground/70">
              A collection of my work showcasing expertise in web development, design systems, and user experience.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader className="flex flex-row justify-between items-start">
                  <div>
                    <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="mt-2">{selectedProject.description}</DialogDescription>
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Project Image */}
                  <div className="relative h-48 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Problem */}
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">The Problem</h3>
                    <p className="text-foreground/70">{selectedProject.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">The Solution</h3>
                    <p className="text-foreground/70">{selectedProject.solution}</p>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">Key Challenges Solved</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-foreground/70">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Future Improvements */}
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">Future Improvements</h3>
                    <ul className="space-y-2">
                      {selectedProject.improvements.map((improvement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-muted-foreground">→</span>
                          <span className="text-foreground/70">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button className="flex-1 gap-2" asChild>
                      <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" /> View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </>
  )
}
