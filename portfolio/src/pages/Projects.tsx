import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { getAllProjects } from "@/lib/services/projects"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ReturnType<typeof getAllProjects>[0] | null>(null)
  const projects = getAllProjects()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="max-w-6xl mx-auto fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Project Portfolio</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Explore my collection of work showcasing expertise in web development, design systems, and user experience
              design.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="fade-in-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="glass rounded-xl p-4 h-full hover-lift cursor-pointer transition-all">
                    <ProjectCard {...project} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl">
            {selectedProject && (
              <>
                <DialogHeader className="space-y-4">
                  <div>
                    <DialogTitle className="text-3xl gradient-text">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="mt-3 text-base">{selectedProject.description}</DialogDescription>
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-6">
                  <div className="relative h-56 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                    <img
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-foreground text-lg">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30 transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-foreground text-lg">The Challenge</h3>
                    <p className="text-foreground/70 leading-relaxed">{selectedProject.problem}</p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-foreground text-lg">The Solution</h3>
                    <p className="text-foreground/70 leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-foreground text-lg">Key Achievements</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">✓</span>
                          <span className="text-foreground/70">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-foreground text-lg">What's Next</h3>
                    <ul className="space-y-2">
                      {selectedProject.improvements.map((improvement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground/70">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-6 border-t border-foreground/10">
                    <Button className="flex-1 gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-lg" asChild>
                      <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2 glass hover:bg-white/20 bg-transparent" asChild>
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" /> Source Code
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
