"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Gem, Sparkles, Crown, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function PricingSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const plans = [
    {
      name: "POSE PAPILLON",
      price: "50€",	
      icon: Sparkles,
      description: "Parfait pour débuter",
      features: ["4 strass", "2 dents", "Pose sécurisée"],
      color: "from-white to-[#f00020]",
      popular: false,
      highlight: "Idéal première fois",
    },
    {
      name: "POSE ETOILE",
      price: "65€",
      icon: Gem,
      description: "Le plus populaire",
      features: [
        "10 strass",
        "2 dent",
        "Strass de qualité supérieure",
      ],
      color: "from-[#f00020] to-[#cc0018]",
      popular: true,
      highlight: "Meilleur rapport qualité/prix",
    },
    {
      name: "SUR DEVIS",
      price: "DEVIS",
      icon: Crown,
      description: "Pour les envies les plus folles",
      features: [
        "Nombre de strass au choix",
        "Design personnalisé",
        "Couleurs personnalisées",
        "Forme de strass au choix",
      ],
      color: "from-[#f00020] to-white",
      popular: false,
      highlight: "Prestige absolu",
    },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#f00020]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#f00020]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <Crown className="absolute top-32 left-16 w-8 h-8 text-[#f00020]/10 animate-spin-slow" />
        <Gem className="absolute bottom-40 right-32 w-6 h-6 text-white/5 animate-bounce" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#f00020] to-white bg-clip-text text-transparent">TARIFS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Des prix transparents pour tous les budgets</p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card
                key={index}
                className={`relative bg-[#1a1a1a]/50 border-2 transition-all duration-300 hover:scale-105 backdrop-blur-sm flex flex-col h-full ${
                  plan.popular
                    ? "border-[#f00020] shadow-2xl shadow-[#f00020]/20"
                    : "border-gray-800 hover:border-[#f00020]/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#f00020] to-[#cc0018] text-white font-bold px-6 py-2">
                      ⭐ POPULAIRE
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center flex flex-col flex-1">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-black text-[#f00020]">{plan.price}</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-[#f00020] mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex">
                    <Button
                      className={`w-full py-4 text-lg font-bold ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#f00020] to-[#cc0018] hover:from-[#ff1a3a] hover:to-[#f00020] text-white shadow-lg shadow-[#f00020]/25"
                        : "bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white border border-gray-700 hover:border-[#f00020]/50"
                      }`}
                      onClick={() => window.location.href = "tel:+123456789"}
                    >
                      CHOISIR {plan.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mobile Carousel */}
        {isMobile && (
          <div className="md:hidden relative">
            <div className="relative h-[500px] perspective-1000">
              {plans.map((plan, index) => {
                const IconComponent = plan.icon
                const offset = index - currentSlide
                const isActive = index === currentSlide
                const isPrev = index === (currentSlide - 1 + plans.length) % plans.length
                const isNext = index === (currentSlide + 1) % plans.length

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive
                        ? "z-30 scale-100 opacity-100 translate-x-0"
                        : isPrev
                        ? "z-20 scale-90 opacity-60 -translate-x-8 rotate-y-12"
                        : isNext
                        ? "z-20 scale-90 opacity-60 translate-x-8 -rotate-y-12"
                        : "z-10 scale-75 opacity-20 translate-y-8"
                    }`}
                    style={{
                      transform: `
                        translateX(${offset * 20}px)
                        translateY(${Math.abs(offset) * 10}px)
                        scale(${isActive ? 1 : 0.85})
                        rotateY(${offset * 5}deg)
                      `,
                    }}
                  >
                    <Card
                      className={`h-full bg-gradient-to-br from-black/90 via-[#1a1a1a]/80 to-black/90 border-2 backdrop-blur-sm overflow-hidden ${
                        plan.popular
                          ? "border-[#f00020] shadow-2xl shadow-[#f00020]/30"
                          : "border-gray-700 shadow-xl shadow-black/50"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                          <Badge className="bg-gradient-to-r from-[#f00020] to-[#cc0018] text-white font-bold px-4 py-1 text-xs animate-bounce">
                            ⭐ POPULAIRE
                          </Badge>
                        </div>
                      )}
                      <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                        <div className="text-center">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-transform duration-300 ${
                              isActive ? "rotate-0" : "rotate-12"
                            }`}
                          >
                            <IconComponent className="w-8 h-8 text-black" />
                          </div>
                          <h3 className="text-2xl font-black text-white mb-2 tracking-wide">{plan.name}</h3>
                          <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                          <div className="mb-6">
                            <span className="text-4xl font-black text-[#f00020]">{plan.price}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="grid grid-cols-1 gap-2 mb-6">
                            {plan.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-gray-300 text-sm">
                                <div className="w-4 h-4 bg-[#f00020] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <Check className="w-2.5 h-2.5 text-white" />
                                </div>
                                <span>{feature}</span>
                              </div>
                            ))}
                            {plan.features.length > 4 && (
                              <div className="text-center text-gray-500 text-xs mt-2">
                                +{plan.features.length - 4} autres avantages
                              </div>
                            )}
                          </div>
                        </div>
                        <Button
                          className={`w-full py-3 font-bold transition-all duration-300 ${
                            plan.popular
                              ? "bg-gradient-to-r from-[#f00020] to-[#cc0018] hover:from-[#ff1a3a] hover:to-[#f00020] text-white shadow-lg shadow-[#f00020]/30"
                              : "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] hover:from-[#2a2a2a] hover:to-[#3a3a3a] text-white border border-gray-600"
                          }`}
                        >
                          <span className="mr-2">CHOISIR</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>

            {/* 🔁 New navigation buttons like Gallery */}
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

            {/* Progress Bar & Dots */}
            <div className="mt-6 px-4">
              <div className="w-full bg-gray-800 rounded-full h-1">
                <div
                  className="bg-gradient-to-r from-[#f00020] to-[#cc0018] h-1 rounded-full transition-all duration-500"
                  style={{ width: `${((currentSlide + 1) / plans.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-center mt-2">
                <span className="text-gray-500 text-xs">
                  {currentSlide + 1} / {plans.length} - {plans[currentSlide].name}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .-rotate-y-12 {
          transform: rotateY(-12deg);
        }
      `}</style>
    </section>
  )
}
