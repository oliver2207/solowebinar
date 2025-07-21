 
import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import {
 
  
  ArrowRight,
  Play,
 
  ChevronDown,
} from "lucide-react"
 
 
import { Button } from "../../elements/buttons"
import { whatsapp } from "../../../constant"
 
function HeroSection() {
  return (
   <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A5A] via-[#1A4A4A] to-[#0F3A3A]" />

          {/* Animated Geometric Shapes */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#4ECDC4]/20 to-[#8E44AD]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#8E44AD]/20 to-[#4ECDC4]/20 rounded-full blur-3xl"
          />

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-4 h-4 bg-[#4ECDC4] rounded-full opacity-60"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-32 left-20 w-6 h-6 bg-[#8E44AD] rounded-full opacity-40"
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234ECDC4%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Main Title with Gradient */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block">Transforma tu</span>
              <span className="block bg-gradient-to-r from-[#4ECDC4] via-[#8E44AD] to-[#4ECDC4] bg-clip-text text-transparent">
                Futuro Profesional
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-gray-300">con Webinars Gratuitos</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Únete a <strong className="text-white">SoloWebinars</strong> y accede cada semana a contenido de alto
              valor.
              <br />
              <span className="text-[#4ECDC4] font-semibold">Aprende • Conecta • Crece</span> y mejora tus habilidades profesionales.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#4ECDC4] to-[#8E44AD] hover:from-[#4ECDC4]/80 hover:to-[#8E44AD]/80 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-[#4ECDC4]/25 transition-all duration-300"
                  asChild
                >
                  <a href={whatsapp} target="_blank">
                    🚀 Unirme al Grupo WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm bg-transparent"
                  onClick={() => document.querySelector("#webinars")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Webinars Pasados
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                // { number: "30+", label: "Emprendedores" },
                { number: "30+", label: "Conexiones reales creadas desde cero" },
                { number: "10+", label: "Webinars Realizados" },
                { number: "100%", label: "Gratuito" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          onClick={() => document.querySelector("#beneficios")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>
  )
}

export default HeroSection
