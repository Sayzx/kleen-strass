"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Gem, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const galleryItems = [
    { id: 1, image: "/moment.png?height=400&width=400&query=dental gems strass" },
    { id: 2, image: "/moment.png?height=400&width=400&query=dental gems 3d" },
    { id: 3, image: "/moment.png?height=400&width=400&query=dental gems diamond" },
    { id: 4, image: "/moment.png?height=400&width=400&query=dental gems rainbow" },
    { id: 5, image: "/moment.png?height=400&width=400&query=dental gems black" },
    { id: 6, image: "/moment.png?height=400&width=400&query=dental gems gold" },
  ]

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Gem className="absolute top-20 left-10 w-8 h-8 text-[#f00020]/10 animate-spin-slow" />
        <Sparkles className="absolute bottom-32 right-20 w-6 h-6 text-white/5 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f00020]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#f00020] to-white bg-clip-text text-transparent">GALERIE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Découvrez nos créations les plus spectaculaires</p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] border border-gray-800 hover:border-[#f00020]/50 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image}
                  alt="Gallery Image"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f00020]/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        {isMobile && (
          <div className="md:hidden relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 relative">
                    <div className="relative mx-4">
                      {/* Main Card */}
                      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#f00020]/30 shadow-2xl shadow-[#f00020]/20">
                        <div className="aspect-[4/5] relative overflow-hidden">
                          <Image
                            src={`${item.image}`}
                            alt="Gallery Image"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                          {/* Floating Elements */}
                          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Gem className="w-4 h-4 text-white" />
                            </div>
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="space-y-3">
                              <h3 className="text-white font-black text-2xl tracking-wide"></h3>
                              <div className="flex items-center justify-between">
                                <p className="text-[#f00020] font-black text-3xl"></p>
                                <Button
                                  size="sm"
                                  className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
                                >
                                  Voir +
                                </Button>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#f00020] rounded-full animate-pulse"></div>
                                <span className="text-gray-300 text-sm">Création sur mesure</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f00020] rounded-full animate-bounce opacity-80"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full animate-pulse opacity-60"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
              <Button
                onClick={prevSlide}
                size="sm"
                className="w-12 h-12 rounded-full bg-black/80 hover:bg-[#f00020] border border-[#f00020]/50 text-white backdrop-blur-sm transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
              <Button
                onClick={nextSlide}
                size="sm"
                className="w-12 h-12 rounded-full bg-black/80 hover:bg-[#f00020] border border-[#f00020]/50 text-white backdrop-blur-sm transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 h-3 bg-[#f00020] rounded-full"
                      : "w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
                  }`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="text-gray-400 text-sm font-mono">
                {currentSlide + 1} / {galleryItems.length}
              </span>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="border-2 border-[#f00020] bg-[#f00020] text-black hover:bg-[#f00020]/90 px-8 py-4"
          >
            VOIR TOUTES NOS CRÉATIONS
          </Button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
