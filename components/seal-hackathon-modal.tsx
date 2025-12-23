"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const hackathonImages = [
  "/images/seal-hackathon-1.jpg",
  "/images/seal-hackathon-2.jpg",
  "/images/seal-hackathon-award.jpg",
]

export function SEALHackathonModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? hackathonImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === hackathonImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">SEAL Hackathon Fall 2025 - Winner</DialogTitle>
          <DialogDescription className="text-base">AI Agents for Software Innovation</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="relative bg-muted rounded-lg overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image
                src={hackathonImages[currentImageIndex] || "/placeholder.svg"}
                alt={`SEAL Hackathon image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Navigation buttons */}
            {hackathonImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={goToNext}
                >
                  <ChevronRight className="size-4" />
                </Button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {hackathonImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Event Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Event:</strong> SEAL Hackathon Fall 2025
                </li>
                <li>
                  <strong className="text-foreground">Theme:</strong> AI Agents for Software Innovation
                </li>
                <li>
                  <strong className="text-foreground">Duration:</strong> 8-hour coding challenge
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Challenge Focus</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Participated in a competitive hackathon focusing on applying AI agents and artificial intelligence to
                the Software Development Lifecycle (SDLC). Demonstrated strong technical skills in system design,
                implementation, and presentation under tight deadlines.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Key Achievements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Successfully designed and implemented AI-driven solutions</li>
                <li>✓ Collaborated effectively with team members under time pressure</li>
                <li>✓ Delivered compelling presentation and demonstration</li>
                <li>✓ Won recognition among competitive participants</li>
              </ul>
            </div>

            <Button asChild className="w-full">
              <a
                href="https://www.facebook.com/share/p/1CxbRH51wG/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                View Facebook Post
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
