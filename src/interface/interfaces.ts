export interface AnimationVariant {
  initial: { opacity: number; x?: number; y?: number }
  animate: { opacity: number; x?: number; y?: number }
  transition: { duration: number }
}

export interface StaggerVariant {
  animate: {
    transition: {
      staggerChildren: number
    }
  }
}

export interface BenefitsProps {
  staggerContainer: StaggerVariant
  fadeInRight: AnimationVariant
}