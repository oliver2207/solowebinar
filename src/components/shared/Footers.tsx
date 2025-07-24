import { Instagram, Linkedin, Youtube } from "lucide-react";
import images from '../../assets/img/logo2-solowebinar.png'
 
    
    function Footers() {
      return (
    <footer className="bg-[#2D5A5A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={images}
                  alt="SoloWebinar Logo"
                  
                  className="h-16 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                La plataforma gratuita donde emprendedores y marketers aprenden, crecen y se conectan cada semana.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <div className="space-y-2">
                <a href="/privacy" className="text-gray-300 hover:text-[#4ECDC4] transition-colors block">
                  Política de Privacidad
                </a>
                <a href="/terms" className="text-gray-300 hover:text-[#4ECDC4] transition-colors block">
                  Términos y Condiciones
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://youtube.com/@solowebinar?si=v0-sOe8qMVv8Exlc"
                  target="_blank"
                  className="text-gray-300 hover:text-[#4ECDC4] transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <span
                  // href="https://instagram.com/solowebinars"
                  // target="_blank"
                  className="text-gray-300 hover:text-[#8E44AD] transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </span>
                <span
                  // href="https://linkedin.com/company/solowebinars"
                  // target="_blank"
                  className="text-gray-300 hover:text-[#4ECDC4] transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
            <p>&copy; 2025 SoloWebinars. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      )
    }
    
    export default Footers
    