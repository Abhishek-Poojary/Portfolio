import { AnimatedCounter } from "@/components/animated-counter"
import { StatsVisualization } from "@/components/stats-visualization"

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">By The Numbers</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Projects Completed", value: 25, suffix: "+" },
            { label: "Years Experience", value: 5, suffix: "" },
            { label: "Team Members Mentored", value: 12, suffix: "+" },
            { label: "Open Source Contributions", value: 45, suffix: "+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
            >
              <p className="text-foreground/60 text-sm mb-3">{stat.label}</p>
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-lg border border-border bg-background/50 backdrop-blur-sm p-6">
          <h3 className="text-lg font-semibold mb-6">Performance Overview</h3>
          <StatsVisualization />
        </div>
      </div>
    </section>
  )
}
