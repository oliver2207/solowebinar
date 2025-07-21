import Navbar from "./components/shared/Navbar"
 
import { useScroll, useTransform } from "framer-motion"
 
 
 
import HeroSection from "./components/home/HeroSecctions/HeroSection"
 
import Benefits from "./components/home/benefits/Benefits"
import Funtions from "./components/home/functions/Funtions"
import About from "./components/home/about/About"
import VideosTestimonios from "./components/home/Curses/VideosTestimonios"
import Footers from "./components/shared/Footers"
import Cta from "./components/home/cta/Cta"

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
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-white">
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
