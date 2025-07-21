import { motion } from "framer-motion"
import { Button } from "../../elements/buttons"
 import { whatsapp } from "../../../constant"
import { ArrowRight } from "lucide-react"
 
 

 
function Cta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2D5A5A] via-[#1A4A4A] to-[#0F3A3A] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#4ECDC4]/20 to-[#8E44AD]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#8E44AD]/20 to-[#4ECDC4]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Aprender no tiene por qué ser costoso</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Conéctate, crece y transforma tu futuro con SoloWebinars.
              <strong className="text-white"> Tu éxito comienza hoy.</strong>
            </p>

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
          </motion.div>
        </div>
      </section>
  )
}

export default Cta
