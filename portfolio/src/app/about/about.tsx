import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SkillBadge } from "@/components/skill-badge"
import { Card } from "@/components/ui/card"
import { TIMELINE, SKILLS } from "@/constants/content"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-foreground/70">
              Passionate frontend developer with a knack for creating beautiful, performant web experiences.
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm a frontend developer with 4+ years of experience building scalable, accessible web applications. My
                journey started with a passion for clean code and beautiful user interfaces, which has evolved into a
                full-stack skill set encompassing both engineering and design.
              </p>

              <p>
                At my core, I believe that great software is the intersection of thoughtful design and robust
                engineering. I'm obsessed with performance optimization, accessibility standards, and writing code that
                other developers actually enjoy reading and maintaining.
              </p>

              <p>
                When I'm not coding, you'll find me contributing to open source, mentoring junior developers, or
                exploring the latest web technologies and frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILLS.map((skillGroup) => (
                <SkillBadge key={skillGroup.category} {...skillGroup} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">My Journey</h2>

            <div className="space-y-6">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    {idx !== TIMELINE.length - 1 && <div className="w-0.5 h-20 bg-border/50 mt-2"></div>}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                    </div>
                    <p className="text-foreground/80 font-medium mb-2">{item.company}</p>
                    <p className="text-foreground/60">{item.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">My Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Quality First",
                  description:
                    "I prioritize writing clean, maintainable code with comprehensive testing and documentation.",
                },
                {
                  title: "User-Centric",
                  description:
                    "Every decision is guided by user needs. I focus on accessibility, performance, and intuitive design.",
                },
                {
                  title: "Continuous Learning",
                  description:
                    "The web evolves fast. I stay ahead of trends through experimentation and knowledge sharing.",
                },
              ].map((value, idx) => (
                <Card key={idx} className="p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-foreground/70 mb-6">Let's connect and explore how we can build something great.</p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
