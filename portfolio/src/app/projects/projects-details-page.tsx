import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { use } from "react"
import { Link } from "react-router-dom"

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            <Button asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/projects" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-foreground/70">{project.description}</p>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Technologies */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/50 px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Problem */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">The Problem</h2>
              <p className="text-foreground/80 leading-relaxed">{project.problem}</p>
            </Card>

            {/* Solution */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">The Solution</h2>
              <p className="text-foreground/80 leading-relaxed">{project.solution}</p>
            </Card>

            {/* Challenges */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Key Challenges Solved</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-semibold mt-1">✓</span>
                    <span className="text-foreground/80">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Future Improvements */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Future Improvements</h2>
              <ul className="space-y-3">
                {project.improvements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-muted-foreground">→</span>
                    <span className="text-foreground/80">{improvement}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4 border-t border-border">
              <Button className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link to={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> View Live Demo
                </Link>
              </Button>
              <Button variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                <Link to={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> View Source Code
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((relatedProject) => (
                  <Link key={relatedProject.id} to={`/projects/${relatedProject.id}`}>
                    <Card className="overflow-hidden hover:border-primary/50 transition-all cursor-pointer">
                      <div className="relative h-40 overflow-hidden bg-muted">
                        <img
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-primary mb-1">{relatedProject.title}</h3>
                        <p className="text-sm text-foreground/70">{relatedProject.description}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
