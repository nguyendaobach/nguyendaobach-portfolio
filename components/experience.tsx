import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Backend Java Intern",
    company: "TMA Solutions",
    period: "Jan - May 2025",
    description:
      "Gained hands-on experience in backend development using Java, working on enterprise-level applications. Collaborated with senior developers to implement RESTful APIs, optimize database queries, and follow industry best practices.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API", "Git"],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance Projects",
    period: "2023 - Present",
    description:
      "Developed and maintained multiple client-facing web applications. Collaborated with clients to implement responsive and accessible user interfaces using modern web technologies.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              My professional journey in software development, working with amazing teams and building innovative
              solutions.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)] md:ml-auto"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 size-4 -ml-2 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="size-3" />
                          {exp.period}
                        </Badge>
                      </div>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Briefcase className="size-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
