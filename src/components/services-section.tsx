"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Gem, Sparkles, Crown, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Gem,
      title: "STRASS CLASSIQUES",
      description: "Pose de strass cristaux sur vos dents pour un sourire éclatant et personnalisé",
      features: ["Pose sécurisée", "Couleurs variées", "Designs exclusifs", "Cristaux premium"],
      color: "from-[#f00020] to-[#cc0018]", 
    },
    {
      icon: Shield,
      title: "MAINTENANCE PRO",
      description: "Service de nettoyage, polissage et remplacement pour vos strass existants",
      features: ["Nettoyage pro", "Polissage", "Remplacement", "Suivi personnalisé"],
      color: "from-[#cc0018] to-[#f00020]",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#f00020] to-white bg-clip-text text-transparent">NOS SERVICES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des prestations haut de gamme pour sublimer votre sourire avec élégance
          </p>
          <div className="mt-6 flex items-center justify-center">
            <div className="w-16 h-px bg-[#f00020]/50"></div>
            <span className="mx-4 text-xs text-gray-500 font-mono tracking-widest">EXCELLENCE</span>
            <div className="w-16 h-px bg-[#f00020]/50"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group bg-[#1a1a1a]/50 border-gray-800 hover:border-[#f00020]/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#f00020] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#f00020] rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
