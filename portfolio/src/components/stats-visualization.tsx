import { useEffect, useRef } from "react"
import * as echarts from "echarts"

interface StatItem {
  name: string
  value: number
  icon?: string
}

const stats: StatItem[] = [
  { name: "Projects Completed", value: 25 },
  { name: "Years Experience", value: 5 },
  { name: "Team Members Mentored", value: 12 },
  { name: "Open Source Contributions", value: 45 },
]

export function StatsVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chart = echarts.init(containerRef.current, "dark")

    const option = {
      grid: {
        left: "10%",
        right: "10%",
        bottom: "20%",
        top: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: stats.map((s) => s.name),
        axisLabel: {
          interval: 0,
          rotate: 45,
          fontSize: 12,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.2)",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.2)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
      series: [
        {
          data: stats.map((s) => s.value),
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#a78bfa" },
              { offset: 1, color: "#7c3aed" },
            ]),
            borderRadius: [8, 8, 0, 0],
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#c4b5fd" },
                { offset: 1, color: "#a78bfa" },
              ]),
            },
          },
          animationDuration: 1500,
        },
      ],
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderColor: "#a78bfa",
        borderWidth: 1,
      },
    }

    chart.setOption(option)

    const handleResize = () => {
      chart.resize()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      chart.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-96 rounded-lg border border-border/50" />
}
