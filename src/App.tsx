import Navbar from "./components/shared/Navbar"
 
// import { useScroll, useTransform } from "framer-motion"
 
 
 
import HeroSection from "./components/home/HeroSecctions/HeroSection"
 
import Benefits from "./components/home/benefits/Benefits"
import Funtions from "./components/home/functions/Funtions"
import About from "./components/home/about/About"
import VideosTestimonios from "./components/home/Curses/VideosTestimonios"
import Footers from "./components/shared/Footers"
import Cta from "./components/home/cta/Cta"
import { Helmet } from "react-helmet-async"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}



function App() {
  // const { scrollYProgress } = useScroll()
  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-white">
           <Helmet>
        <title>SoloWebinar | Webinars en Vivo Cada Semana</title>
        <meta
          name="description"
          content="Webinars gratuitos sobre emprendimiento, marketing digital y desarrollo personal. Aprende en vivo con expertos."
        />
        <meta
          name="keywords"
          content="webinars, gratis, marketing, emprendimiento, desarrollo personal, solowebinar"
        />
        <meta name="author" content="SoloWebinar" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="es" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="SoloWebinar" />
        <meta
          property="og:description"
          content="Plataforma gratuita de webinars semanales en vivo. Aprende marketing, negocios y más."
        />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:url" content="https://tudominio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SoloWebinar" />
        <meta
          name="twitter:description"
          content="Accede a webinars gratuitos sobre temas clave para emprendedores."
        />
        <meta name="twitter:image" content="/banner.jpg" />
      </Helmet>

      
      <Navbar />
      {/* Modern Creative Hero Section */}
      <HeroSection />
      {/* Benefits Section */}
      <Benefits staggerContainer={staggerContainer} fadeInRight={fadeInRight} />
      {/* How It Works Section */}
      <Funtions />
     {/* About Section */}
      <About fadeInRight={fadeInRight} />

      {/* Past Webinars & Testimonials */}
      <VideosTestimonios fadeInUp={fadeInUp} staggerContainer={staggerContainer}/>
       <Cta/>
       <Footers/>
    </div>
  )
}

export default App
