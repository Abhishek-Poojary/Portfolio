import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/80">Ready to collaborate?</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-balance gradient-text">
          Let's Create Something <span className="text-foreground">Extraordinary</span>
        </h2>

        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? Let's work together to bring your ideas to life with cutting-edge technology and
          creative design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/40 text-white font-semibold gap-2 group hover-lift"
            asChild
          >
            <Link to="/contact">
              Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" className="glass hover:bg-white/20 font-semibold" asChild>
            <Link to="/projects">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
