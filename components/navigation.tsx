"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const sections = [
  { id: "about", label: "About" },
  { id: "academics", label: "Academics" },
  { id: "leadership", label: "Leadership" },
  { id: "athletics", label: "Athletics" },
  { id: "community", label: "Community" },
  { id: "interests", label: "Interests" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-card"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar navigation */}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-card border-r border-border p-8 z-40 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-foreground mb-1">Paxton Parker</h1>
            <p className="text-sm text-muted-foreground">Student & Aspiring Developer</p>
            <p className="text-xs text-muted-foreground mt-2">Richmond, VA</p>
          </div>

          <div className="flex-1 space-y-1">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                  activeSection === id
                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <div className="space-y-2 text-xs text-muted-foreground">
              <a href="mailto:paxparker@protonmail.com" className="block hover:text-primary transition-colors">
                paxparker@protonmail.com
              </a>
              <p>(804) 637-4055</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
