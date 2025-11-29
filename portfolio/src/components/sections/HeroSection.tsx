import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { SITE_CONFIG } from "@/constants/config"

interface HeroSectionProps {
  scrollY?: number
}

export function HeroSection({ scrollY = 0 }: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="space-y-3">
            <p className="text-primary font-semibold tracking-wide">WELCOME TO MY PORTFOLIO</p>
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              Frontend Developer & <span className="text-primary">Designer</span>
            </h1>
          </div>

          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            I craft accessible, pixel-perfect digital experiences with modern tech. Specializing in React, TypeScript,
            and building design systems that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
              <Link to="/projects">
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={SITE_CONFIG.social.email} className="text-foreground/60 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
