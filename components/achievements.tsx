"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Trophy, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SEALHackathonModal } from "./seal-hackathon-modal"

const achievements = [
  {
    title: "SEAL Hackathon Winner",
    organization: "SEAL Hackathon Fall 2025",
    date: "2025",
    description:
      "Participated in SEAL Hackathon Fall 2025 with theme 'AI Agents for Software Innovation'. Competed in a 8-hour coding challenge focusing on applying AI to Software Development Lifecycle (SDLC). Demonstrated strong technical skills in system design, implementation, and presentation under tight deadlines.",
    image: "/images/seal-hackathon-1.jpg",
    link: "https://www.facebook.com/share/p/1CxbRH51wG/",
    icon: Trophy,
    color: "text-yellow-500",
    hasModal: true,
  },
  {
    title: "50% University Scholarship",
    organization: "University Scholarship Program",
    date: "2024",
    description:
      "Awarded a 50% scholarship based on outstanding academic performance and demonstrated potential in computer science and software engineering.",
    image: "/images/scholarship-award.jpg",
    link: "https://www.facebook.com/share/p/16U8YKcNQo/",
    icon: GraduationCap,
    color: "text-blue-500",
    hasModal: false,
  },
]

export function Achievements() {
  const [isSealModalOpen, setIsSealModalOpen] = useState(false)

  return (
    <section id="achievements" className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Achievements & Awards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Recognition for academic excellence and competitive achievements in software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <Card
                key={achievement.title}
                className="border-2 hover:border-primary/50 transition-all group overflow-hidden"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <achievement.icon className={`size-8 ${achievement.color}`} />
                    <Badge variant="outline">{achievement.date}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{achievement.title}</CardTitle>
                  <p className="text-primary font-semibold">{achievement.organization}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{achievement.description}</p>
                  {achievement.hasModal ? (
                    <Button onClick={() => setIsSealModalOpen(true)} className="w-full">
                      View Details & Photos
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        View Details
                        <ExternalLink className="size-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <SEALHackathonModal isOpen={isSealModalOpen} onClose={() => setIsSealModalOpen(false)} />
    </section>
  )
}
