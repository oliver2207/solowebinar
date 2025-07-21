import { motion, type Variants } from "framer-motion"

 import images from "../../../assets/img/Imagesobre.png"
import { BookOpen, CheckCircle } from "lucide-react"
interface AboutProps {
  fadeInRight: Variants;
}

function About({ fadeInRight }: AboutProps) {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative">
                  <img
                    src={images}
                    alt="Anfitrión de SoloWebinars"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#4ECDC4] text-white p-3 rounded-full">
                    <BookOpen className="h-6 w-6" />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeInRight} initial="initial" whileInView="animate" viewport={{ once: true }}>
                 <span className="  text-green-200 text-xs font-medium me-2 px-2.5 py-1 rounded-full bg-[#2D5A5A] hover:bg-[#4ECDC4] hover:text-amber-50">Sobre el Proyecto</span>

                <h2 className="text-4xl font-bold text-gray-900 mb-6">Aprendizaje Sin Barreras</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  SoloWebinars nació de la convicción de que el conocimiento de calidad no debe tener precio. Como
                  emprendedor y marketer, he experimentado la frustración de cursos costosos con poco valor real.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Por eso creé esta plataforma: para democratizar el aprendizaje y construir una comunidad donde el
                  crecimiento profesional sea accesible para todos.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#4ECDC4]" />
                  <span className="text-gray-700 font-medium">+5 años en marketing digital</span>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <CheckCircle className="h-6 w-6 text-[#4ECDC4]" />
                  <span className="text-gray-700 font-medium">+1000 emprendedores impactados</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default About
