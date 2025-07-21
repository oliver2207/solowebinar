import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Card, CardContent } from "../../elements/card"
import { Button } from "../../elements/buttons"
import { Play, Youtube } from "lucide-react"
import images from '../../../assets/img/placeholder.svg'


interface VideosTestimoniosProps {
  fadeInUp: Variants;
  staggerContainer: Variants;
}

function VideosTestimonios({fadeInUp,staggerContainer}: VideosTestimoniosProps) {
  return (
<section id="webinars" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Past Webinars */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Webinars Pasados</h2>
            <p className="text-xl text-gray-600 mb-12">
              Accede a contenido de valor que ya está transformando emprendedores
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Estrategias de Marketing Digital que Funcionan en 2025",
                thumbnail: "https://www.youtube.com/watch?v=r2YDxJekBiY",
              },
              {
                title: "Cómo Escalar tu Emprendimiento sin Morir en el Intento",
                thumbnail: "/placeholder.svg?height=300&width=500",
              },
            ].map((video, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative group cursor-pointer">
                   <img
                      src={images}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                      
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#8E44AD] text-white p-4 rounded-full">
                        <Play className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{video.title}</h3>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-[#2D5A5A] text-[#2D5A5A] hover:bg-[#2D5A5A] hover:text-white"
                      asChild
                    >
                      <a href={video.thumbnail} target="_blank">
                        <Youtube className="mr-2 h-4 w-4" />
                        Ver en YouTube
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que Dicen Nuestros Miembros</h2>
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
                text: "El contenido es directo, útil y sin relleno. Totalmente recomendado para cualquier emprendedor.",
                author: "María González",
                role: "Fundadora de EcoTech",
              },
              {
                text: "Gracias a SoloWebinars entendí cómo escalar mi emprendimiento digital de forma sostenible.",
                author: "Carlos Ruiz",
                role: "CEO de StartupLab",
              },
              {
                text: "La comunidad es increíble. Siempre hay alguien dispuesto a ayudar y compartir experiencias.",
                author: "Ana Martínez",
                role: "Marketing Manager",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#4ECDC4] fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </section>


  )
}

export default VideosTestimonios
