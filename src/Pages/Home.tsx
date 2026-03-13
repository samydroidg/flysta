import Features from "../Components/Features"
import About from "../Utils/Section/Industries"
import MainHero from "../Utils/Section/MainHero"
import Product from "../Utils/Section/Product"

function Home() {
  return (
    <>
      <MainHero />
      <Features />
      <About />
      <Product />
    </>
  )
}

export default Home