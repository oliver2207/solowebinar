import { motion } from "framer-motion"

 import {
  
  Play,
  MessageCircle,
  Zap 
} from "lucide-react"
import { Card, CardContent } from "../../elements/card"


function Funtions() {
  return (
        <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¿Cómo Funciona SoloWebinars?</h2>
            <p className="text-xl text-gray-600">Tres pasos simples para transformar tu aprendizaje</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Entra al Grupo de WhatsApp",
                description:
                  "Únete a nuestra comunidad exclusiva donde compartimos todas las novedades y contenido premium.",
                icon: <MessageCircle className="h-8 w-8" />,
              },
              {
                step: "2",
                title: "Recibe Recordatorios de Cada Webinar",
                description:
                  "Te notificamos antes de cada sesión en vivo para que no te pierdas ningún contenido valioso.",
                icon: <Zap className="h-8 w-8" />,
              },
              {
                step: "3",
                title: "Conéctate en Vivo o Mira el Video Después",
                description: "Participa en tiempo real o accede a las grabaciones en YouTube cuando mejor te convenga.",
                icon: <Play className="h-8 w-8" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 mr-8">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-[#2D5A5A] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-[#2D5A5A] mr-3">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Funtions
