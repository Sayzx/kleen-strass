"use client"

import { Gem, Instagram, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#f00020]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f00020] to-[#cc0018] rounded-lg flex items-center justify-center">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">KLEEN SMILE</h3>
                <p className="text-xs text-gray-400">KLEEN DENTAIRE</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Le spécialiste des strass dentaires. Créations haut de gamme avec
              designs personnalisés pour sublimer votre sourire.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#f00020] transition-colors cursor-pointer">Strass Classiques</li>
              <li className="hover:text-[#f00020] transition-colors cursor-pointer">Strass 3D</li>
              <li className="hover:text-[#f00020] transition-colors cursor-pointer">Diamants VVS</li>
              <li className="hover:text-[#f00020] transition-colors cursor-pointer">Maintenance Pro</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>3 Rue du lion d'or</li>
              <li>19100 BRIVE LA GAILLARDE</li>
              <li className="hover:text-[#f00020] transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText("+33 6 50 03 09 40")}> +33 6 50 03 09 40</li>
                <li
                className="hover:text-[#f00020] transition-colors cursor-pointer"
                onClick={() => navigator.clipboard.writeText("contactkleensmile@gmail.com")}
                >
                contactkleensmile@gmail.com
                </li>
            </ul>

            <div className="flex space-x-3 mt-4">
                <a
                href="https://www.instagram.com/kleen_smile?igsh=MWpncWd2dTQycDB4Nw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-br from-[#f00020] to-[#cc0018] rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                href="mailto:contactkleensmile@gmail.com"
                className="w-8 h-8 bg-gradient-to-br from-white to-[#f00020] rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                <Mail className="w-4 h-4 text-black" />
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#f00020]/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025-2026 KLEEN SMILE. Tous droits réservés. |
            <span className="text-[#f00020] ml-1">Créé avec passion à Paris</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
