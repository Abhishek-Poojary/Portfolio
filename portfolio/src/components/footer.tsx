import { Link } from "react-router-dom"
import { SITE_CONFIG, NAV_ITEMS } from "@/constants/config"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border glass-dark backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-3">
            <h3 className="font-bold text-lg gradient-text">{SITE_CONFIG.name}</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">{SITE_CONFIG.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300 text-sm group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> GitHub
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300 text-sm group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" /> LinkedIn
              </a>
              <a
                href={SITE_CONFIG.social.email}
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300 text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" /> Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Latest</h4>
            <p className="text-foreground/60 text-sm mb-4">Stay updated with my latest projects and insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-3 py-2 text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-r-lg transition-colors duration-300">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
