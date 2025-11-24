
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-balance">Let's work together</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
          <Link to="/contact">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
