import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TIMELINE, SKILLS } from "@/constants/content"

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-foreground/70">
              Developer, designer, and lifelong learner passionate about creating elegant solutions to complex problems.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Journey</h2>
              <div className="space-y-8">
                {TIMELINE.map((entry, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                      {idx < TIMELINE.length - 1 && <div className="w-1 h-16 bg-border mt-4"></div>}
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-sm">{entry.year}</p>
                      <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                      <p className="text-foreground/60">{entry.company}</p>
                      <p className="text-foreground/70 mt-1">{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
              <div className="space-y-8">
                {SKILLS.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, sidx) => (
                        <span
                          key={sidx}
                          className="px-3 py-1 rounded-full bg-secondary/20 text-foreground/80 text-sm border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
