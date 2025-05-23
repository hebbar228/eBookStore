import { useTitle } from "../../hooks/useTitle"
import { Faq } from "./components/Faq"
import { FeaturedProducts } from "./components/FeaturedProducts"
import { Hero } from "./components/Hero"
import { Testimonial } from "./components/Testimonial"

export const HomePage = () => {
  useTitle("Home")
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonial />
      <Faq />
    </main>
  )
}
