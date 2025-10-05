"use client"

import { Button } from "@/components/ui/button"
import { Gem, Menu, X, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-[#f00020] to-[#cc0018] text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <p className="text-sm font-medium">
            ✨ <span className="font-bold">NOUVEAU</span> - Strass PAPILLON disponible |
            {/* <span className="font-bold ml-2">-15%</span> avec le code{" "} */}
            <span className="bg-white text-[#f00020] px-2 py-0.5 rounded font-mono font-bold ml-1">EN BOUTIQUE</span>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#f00020]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f00020] to-[#cc0018] rounded-lg flex items-center justify-center transform rotate-12">
                  <Gem className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#f00020] to-white bg-clip-text text-transparent">
                  KLEEN SMILE
                </h1>
                <p className="text-xs text-gray-400 tracking-wider font-mono">STRASS DENTAIRE</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-gray-300 hover:text-[#f00020] transition-colors font-medium tracking-wide"
              >
                SERVICES
              </Link>
              <Link
                href="#gallery"
                className="text-gray-300 hover:text-[#f00020] transition-colors font-medium tracking-wide"
              >
                GALERIE
              </Link>
              <Link
                href="#pricing"
                className="text-gray-300 hover:text-[#f00020] transition-colors font-medium tracking-wide"
              >
                TARIFS
              </Link>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-[#f00020] transition-colors font-medium tracking-wide"
              >
                CONTACT
              </Link>
              <Button className="bg-gradient-to-r from-[#f00020] to-[#cc0018] hover:from-[#ff1a3a] hover:to-[#f00020] text-white font-bold px-6">
                <Phone className="w-4 h-4 mr-2" />
                RÉSERVER
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link href="#services" className="text-gray-300 hover:text-[#f00020] transition-colors font-medium">
                  SERVICES
                </Link>
                <Link href="#gallery" className="text-gray-300 hover:text-[#f00020] transition-colors font-medium">
                  GALERIE
                </Link>
                <Link href="#process" className="text-gray-300 hover:text-[#f00020] transition-colors font-medium">
                  PROCESSUS
                </Link>
                <Link href="#pricing" className="text-gray-300 hover:text-[#f00020] transition-colors font-medium">
                  TARIFS
                </Link>
                <Link href="#contact" className="text-gray-300 hover:text-[#f00020] transition-colors font-medium">
                  CONTACT
                </Link>
                <Button className="bg-gradient-to-r from-[#f00020] to-[#cc0018] hover:from-[#ff1a3a] hover:to-[#f00020] text-white font-bold w-full">
                  RÉSERVER
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
