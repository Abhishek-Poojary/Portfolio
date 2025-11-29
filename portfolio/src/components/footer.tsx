import { Link } from "react-router-dom"
import { SITE_CONFIG, NAV_ITEMS } from "@/constants/config"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-foreground/60">{SITE_CONFIG.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} to={item.href} className="block text-foreground/60 hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground/60 hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground/60 hover:text-foreground"
              >
                LinkedIn
              </a>
              <a href={SITE_CONFIG.social.email} className="block text-foreground/60 hover:text-foreground">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
