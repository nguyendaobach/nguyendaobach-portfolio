import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Globe, Server, Smartphone, Zap } from "lucide-react"

const skills = {
  backend: ["Java", "Spring Boot", "Spring Security", "Node.js", "REST API", "GraphQL"],
  frontend: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML/CSS", "Tailwind CSS"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQL Server"],
  tools: ["Docker", "Git", "CI/CD", "Azure", "AWS", "JUnit 5", "Swagger"],
}

const features = [
  {
    icon: Server,
    title: "Microservices Architecture",
    description: "Designing and implementing microservices systems with service discovery and API gateways",
  },
  {
    icon: Globe,
    title: "Backend Development",
    description: "Building robust backend systems with Spring Boot, REST APIs, and authentication",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient SQL schemas and optimizing query performance",
  },
  {
    icon: Smartphone,
    title: "Full-Stack Development",
    description: "Creating complete solutions combining backend services with modern frontend frameworks",
  },
  {
    icon: Zap,
    title: "Real-time Systems",
    description: "Building real-time bidding and messaging systems using WebSocket technology",
  },
  {
    icon: Code2,
    title: "Clean Code & Testing",
    description: "Writing maintainable code with comprehensive unit tests using JUnit 5",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              A final year student at FPT University with hands-on experience in backend development and microservices.
              Passionate about clean code, Spring Boot, and building scalable systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="size-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                    <Server className="size-5 text-primary" />
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                    <Globe className="size-5 text-primary" />
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                    <Database className="size-5 text-primary" />
                    Database
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                    <Code2 className="size-5 text-primary" />
                    Tools & Others
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
