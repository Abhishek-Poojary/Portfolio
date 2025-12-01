"use client"

import { useEffect, useRef } from "react"
import * as echarts from "echarts"
import { SKILLS } from "@/constants/content"

export function SkillRadar() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chart = echarts.init(containerRef.current, "dark")

    // Prepare data for radar chart
    const skillNames = SKILLS.flatMap((cat) => cat.items).slice(0, 8)
    const skillValues = skillNames.map(() => Math.floor(Math.random() * 40 + 60))

    const option = {
      radar: {
        indicator: skillNames.map((name) => ({ name, max: 100 })),
        shape: "polygon",
        splitNumber: 4,
        axisLine: {
          lineStyle: {
            color: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)"],
          },
        },
        splitLine: {
          lineStyle: {
            color: [
              "rgba(255, 255, 255, 0.1)",
              "rgba(255, 255, 255, 0.1)",
              "rgba(255, 255, 255, 0.1)",
              "rgba(255, 255, 255, 0.1)",
            ],
          },
        },
        splitArea: {
          areaStyle: {
            color: ["rgba(167, 139, 250, 0.05)", "rgba(124, 58, 237, 0.05)"],
          },
        },
        axisNameTextStyle: {
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: 12,
        },
      },
      series: [
        {
          name: "Skills Proficiency",
          value: skillValues,
          type: "radar",
          itemStyle: { color: "#a78bfa" },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(167, 139, 250, 0.3)" },
              { offset: 1, color: "rgba(124, 58, 237, 0.1)" },
            ]),
          },
          lineStyle: {
            color: "#a78bfa",
            width: 2,
          },
          symbolSize: 4,
        },
      ],
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderColor: "#a78bfa",
        borderWidth: 1,
      },
    }

    chart.setOption(option)

    const handleResize = () => chart.resize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      chart.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-96 rounded-lg border border-border/50" />
}
