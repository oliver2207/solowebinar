import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import solowebinarLogo from "../../assets/img/logo2-solowebinar.png"
import { Menu, X } from "lucide-react"
import { Button } from "../elements/buttons"
import { whatsapp } from "../../constant"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Cómo Funciona", href: "#como-funciona" },
    { name: "Sobre Nosotros", href: "#sobre" },
    { name: "Webinars", href: "#webinars" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    // Espera ligera antes de cerrar el menú para no cortar el scroll
    setTimeout(() => setIsOpen(false), 300)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div  className="flex items-center">
            <img src={solowebinarLogo} alt="SoloWebinar Logo" width={180} height={60} className="h-40 md:h-52 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-[#4ECDC4] ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              className="bg-gradient-to-r from-[#4ECDC4] to-[#8E44AD] hover:from-[#4ECDC4]/80 hover:to-[#8E44AD]/80 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-[#4ECDC4]/25 transition-all duration-300"
              asChild
            >
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                📱 Únete a WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${scrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 overflow-hidden"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#8E44AD] hover:from-[#4ECDC4]/80 hover:to-[#8E44AD]/80 text-white"
                  asChild
                >
                  <a href={whatsapp}   >
                    📱 Únete a WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
