import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Github, Linkedin } from "lucide-react"
import { useState } from "react"
import { NAV_ITEMS, SITE_CONFIG } from "@/constants/config"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            {SITE_CONFIG.name}
          </Link>

          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors ${
                  location.pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <div className="flex flex-col gap-6 mt-8">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-lg transition-colors ${
                      location.pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border flex gap-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
