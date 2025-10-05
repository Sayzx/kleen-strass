"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gem, Sparkles, Star, ArrowRight, Heart, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0005] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#f00020]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#f00020]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#f00020]/3 to-transparent rounded-full"></div>

        {/* Floating Elements */}
        <Gem className="absolute top-32 left-20 w-8 h-8 text-[#f00020]/20 animate-spin-slow" />
        <Sparkles className="absolute bottom-32 right-32 w-6 h-6 text-white/10 animate-pulse" />
        <Heart className="absolute top-1/3 right-1/4 w-4 h-4 text-[#f00020] animate-ping" />
        <Zap className="absolute bottom-1/3 left-1/3 w-3 h-3 text-white animate-bounce" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-[#f00020] to-[#cc0018] text-white font-bold px-6 py-2 text-sm tracking-wide">
                ✨ SPÉCIALISTE STRASS DENTAIRE
              </Badge>

              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-[#f00020] via-[#ff1a3a] to-white bg-clip-text text-transparent">
                  DIAMOND
                </span>
                <br />
                <span className="text-white">SMILE</span>
                <br />
                <span className="bg-gradient-to-r from-white to-[#f00020] bg-clip-text text-transparent text-4xl lg:text-5xl">
                  STRASS DENTAIRE
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Sublimez votre sourire avec nos créations uniques de strass dentaires. et
                designs personnalisés pour un sourire éclatant.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f00020] to-[#cc0018] hover:from-[#ff1a3a] hover:to-[#f00020] text-white font-bold px-8 py-4 text-lg group shadow-lg shadow-[#f00020]/25"
              >
                CRÉER MON SOURIRE
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-white text-black bg-white hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-md"
              >
                VOIR NOS CRÉATIONS
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-[#f00020] fill-current" />
                <span className="text-white font-medium">5/5 (1 avis)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gem className="w-5 h-5 text-[#f00020]" />
                <span className="text-white font-medium">+300 sourires</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/example.png?height=600&width=500"
                alt="Strass dentaires de luxe"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Info Cards */}
              <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-[#f00020]/30">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-[#f00020]" />
                  <span className="text-white font-medium">Cristaux Swarovski</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-white">
                  <p className="font-bold text-lg">100% Sécurisé</p>
                  <p className="text-sm text-gray-300">Pose professionnelle</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-[#f00020] to-[#cc0018] rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-white to-[#f00020]rounded-full opacity-20 animate-bounce delay-500"></div>

            {/* Glow Effects */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f00020]/20 to-white/10 blur-xl -z-10"></div>
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
        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}
