import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Card, CardContent } from "../../elements/card"

 import {
 
  Users,
  Clock,
 
  Target,
   
} from "lucide-react"


interface BenefitsProps {
  staggerContainer: Variants;
  fadeInRight: Variants;
}

function Benefits({staggerContainer, fadeInRight}: BenefitsProps) {
  return (
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¿Qué Aprenderás?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contenido práctico y aplicable que transformará tu forma de emprender y hacer marketing
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Target className="h-12 w-12 text-[#2D5A5A]" />,
                title: "Contenido de Alto Valor",
                description:
                  "Aprende estrategias aplicables desde el primer día. Sin relleno, solo conocimiento que funciona.",
              },
              {
                icon: <Users className="h-12 w-12 text-[#2D5A5A]" />,
                title: "Comunidad Activa",
                description: "Comparte ideas, resuelve dudas y conecta con emprendedores que piensan como tú.",
              },
              {
                icon: <Clock className="h-12 w-12 text-[#2D5A5A]" />,
                title: "Acceso Flexible",
                description: "Mira las grabaciones cuando tú decidas. Tu aprendizaje se adapta a tu horario.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">{benefit.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
     
  )
}

export default Benefits
