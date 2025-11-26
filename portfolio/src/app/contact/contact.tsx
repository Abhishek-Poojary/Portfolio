import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to an API
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-foreground/70">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Contact Info Cards */}
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <Mail className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:hello@example.com"
                  className="text-foreground/70 hover:text-primary transition-colors break-all"
                >
                  hello@example.com
                </a>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors">
                <Phone className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-foreground/70">San Francisco, CA</p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-md">
                  <p className="text-primary font-semibold">
                    Thank you! I've received your message and will get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me more about your project or inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-card border-border resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Connect With Me</h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {[
                { icon: Github, label: "GitHub", url: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
                { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
                { icon: Mail, label: "Email", url: "mailto:hello@example.com" },
              ].map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/10 transition-all"
                  title={label}
                >
                  <Icon className="w-6 h-6 text-foreground/70 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
