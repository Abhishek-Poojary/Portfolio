import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-card">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Let's Create Something Amazing</h2>
        <p className="text-lg text-foreground/70">
          Have a project idea? Let's collaborate and build something incredible together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2" asChild>
            <Link to="/contact">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent">
            <Link to="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
