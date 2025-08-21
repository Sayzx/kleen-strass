"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail, Instagram, MessageCircle, Gem, Sparkles, Heart } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#f00020]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#f00020]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <Gem className="absolute top-20 right-20 w-6 h-6 text-[#f00020]/20 animate-spin-slow" />
        <Sparkles className="absolute bottom-32 left-32 w-4 h-4 text-white/10 animate-bounce" />
        <Heart className="absolute top-1/2 left-10 w-3 h-3 text-[#f00020] animate-ping" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#f00020]"></div>
            <div className="mx-6 relative">
              <h2 className="text-6xl font-black tracking-wider">
                <span className="bg-gradient-to-r from-[#f00020] via-white to-[#f00020] bg-clip-text text-transparent">
                  CONTACT
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#f00020] rounded-full"></div>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#f00020]"></div>
          </div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Transformez votre sourire en œuvre d'art avec nos{" "}
            <span className="text-[#f00020] font-semibold">strass dentaires d'exception</span>
          </p>
        </div>

        <div className="grid xl:grid-cols-3 gap-16 items-start">
          {/* Contact Cards - Vertical Layout */}
          <div className="xl:col-span-1 space-y-6">
            {/* Address Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f00020]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-black/60 border-[#f00020]/30 hover:border-[#f00020] transition-all duration-300 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f00020] to-[#cc0018]"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#f00020] to-[#cc0018] rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 tracking-wide">NOTRE ADRESSE</h3>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="block font-semibold text-[#f00020]">15 Rue du Sourire</span>
                        <span className="block">75008 Paris, France</span>
                        <span className="block text-sm text-gray-400 mt-2">Métro: Champs-Élysées</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hours Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-black/60 border-[#f00020]/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-[#f00020]"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-white to-[#f00020] rounded-2xl flex items-center justify-center transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                        <Clock className="w-8 h-8 text-black" />
                      </div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#f00020] rounded-full animate-bounce"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 tracking-wide">HORAIRES</h3>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex justify-between">
                          <span>Lundi - Vendredi</span>
                          <span className="text-[#f00020] font-semibold">9h - 19h</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Samedi</span>
                          <span className="text-[#f00020] font-semibold">9h - 17h</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dimanche</span>
                          <span className="text-gray-500">Fermé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-black/40 border-[#f00020]/20 hover:border-[#f00020]/60 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f00020] to-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2">TÉLÉPHONE</h4>
                  <p className="text-xs text-gray-400">01 45 67 89 12</p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-[#f00020]/20 hover:border-[#f00020]/60 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#cc0018] to-[#f00020] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2">EMAIL</h4>
                  <p className="text-xs text-gray-400">contact@diamondsmile.fr</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Center - Studio Image */}
          <div className="xl:col-span-1 relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f00020]/30 to-white/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border-2 border-[#f00020]/20 group-hover:border-[#f00020]/60 transition-all duration-500">
                <Image
                  src="/cab.png?height=600&width=500"
                  alt="Cabinet Diamond Smile - Intérieur luxueux"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating Info Badges */}
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-[#f00020]/40">
                  <div className="flex items-center space-x-3">
                    <Gem className="w-5 h-5 text-[#f00020]" />
                    <div>
                      <p className="text-white font-bold text-sm">Équipement Premium</p>
                      <p className="text-gray-300 text-xs">Technologie de pointe</p>
                    </div>
                  </div>
                </div>

                {/* <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-white" />
                    <div>
                      <p className="text-white font-bold text-sm">Hygiène Parfaite</p>
                      <p className="text-gray-300 text-xs">Normes strictes</p>
                    </div>
                  </div>
                </div> */}

                {/* Bottom Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white font-black text-3xl mb-3 tracking-wide">NOTRE CABINET</h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Un environnement luxueux et sécurisé où chaque détail est pensé pour votre confort et votre
                    sécurité.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#f00020] rounded-full"></div>
                      <span className="text-sm text-gray-300">Stérilisation UV</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm text-gray-300">Matériaux premium</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#f00020] to-[#cc0018] rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-white to-[#f00020] rounded-full opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right - Booking & Social */}
          <div className="xl:col-span-1 space-y-8">
            {/* Booking Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f00020]/20 via-transparent to-[#f00020]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-gradient-to-br from-[#f00020]/10 via-black/60 to-black/80 border-[#f00020]/40 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f00020] via-white to-[#f00020]"></div>
                <CardContent className="p-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#f00020] to-[#cc0018] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-wide">RÉSERVATION EXPRESS</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Prenez rendez-vous en quelques clics pour votre consultation personnalisée
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-[#f00020] to-[#cc0018] hover:from-[#ff1a3a] hover:to-[#f00020] text-white font-bold py-4 text-lg shadow-lg shadow-[#f00020]/30 group">
                      <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                      APPELER MAINTENANT
                    </Button>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg shadow-lg shadow-green-600/30 group">
                      <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                      WHATSAPP
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="bg-black/40 border-[#f00020]/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wide">SUIVEZ-NOUS</h3>
                <div className="flex justify-center space-x-6">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-[#f00020] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#f00020] to-[#cc0018] rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                      <Instagram className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-white rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-white to-[#f00020] rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                      <MessageCircle className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-400 text-sm mt-4">
                  Découvrez nos dernières créations et témoignages clients
                </p>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-black/60 to-[#f00020]/10 border-[#f00020]/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f00020] rounded-full flex items-center justify-center animate-pulse">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">URGENCE 24/7</h4>
                    <p className="text-[#f00020] font-bold">06 78 90 12 34</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
