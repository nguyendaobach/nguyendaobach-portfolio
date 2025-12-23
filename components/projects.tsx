import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "MSS301 - Microservices System",
    description:
      "Comprehensive microservices architecture featuring service discovery with Eureka, API Gateway, and multiple business services including AI processing, document management, and vector processing.",
    image: "microservices architecture",
    technologies: ["Spring Boot", "Eureka Server", "API Gateway", "Microservices", "Java"],
    github: "https://github.com/nguyendaobach/MSS301MSS301",
    demo: "#",
  },
  {
    title: "Koi Auction System",
    description:
      "Online auction platform for Koi fish with real-time bidding, JWT authentication, wallet management, and automated auction lifecycle. Integrated Firebase for media storage and email notifications.",
    image: "auction platform",
    technologies: ["Spring Boot", "JWT", "WebSocket", "SQL Server", "Firebase Storage", "JUnit 5"],
    github: "https://github.com/nguyendaobach/koi-auction-backend",
    demo: "#",
  },
  {
    title: "Metro System",
    description:
      "Metro management system handling route, station, and ticket operations. Features online ticket purchasing, payment integration with PayOS, and admin dashboard with role-based access control.",
    image: "metro management",
    technologies: ["Spring Boot", "React.js", "SQL Server", "PayOS", "JWT", "Swagger"],
    github: "https://github.com/nguyendaobach/Summer2025_SBA301_Group3",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              A selection of projects showcasing expertise in microservices, real-time systems, and full-stack
              development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="flex flex-col border-2 hover:border-primary/50 transition-colors overflow-hidden"
              >
                <div className="aspect-video bg-muted flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="size-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <ExternalLink className="size-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{project.image}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 size-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
