import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div className="flex justify-center md:justify-end order-1 md:order-1">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="text-center md:text-left order-2 md:order-2">
              <div className="mb-6 inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Java Backend & Full-Stack Developer
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Building High-Performance Backend
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}
                  Systems
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Final year student at FPT University with experience in backend development using Spring Boot. Passionate
                about building robust APIs, microservices architecture, and full-stack solutions.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                <Button size="lg" asChild>
                  <a href="#projects">
                    View My Work <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/nguyendaobach" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="size-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/nguyễn-đào-bách-aa56aa236/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:nguyendaobach@gmail.com" aria-label="Email">
                    <Mail className="size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
