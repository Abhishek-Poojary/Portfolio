import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { SITE_CONFIG } from "@/constants/config"

interface HeroSectionProps {
  scrollY?: number
}

export function HeroSection({ scrollY = 0 }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">Welcome to my creative space</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Crafting Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Full-stack developer passionate about building beautiful, performant, and accessible web applications. I
            specialize in React, TypeScript, and creating seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/40 text-white font-semibold gap-2 group hover-lift"
              asChild
            >
              <Link to="/projects">
                Explore My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" className="glass hover:bg-white/20 text-foreground font-semibold gap-2 group" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-6 pt-8">
            <a
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={SITE_CONFIG.social.email}
              className="text-foreground/60 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/60">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
