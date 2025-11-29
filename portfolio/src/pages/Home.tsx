"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection"
import { CTASection } from "@/components/sections/CTASection"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <HeroSection scrollY={scrollY} />
        <SkillsSection />
        <FeaturedProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
