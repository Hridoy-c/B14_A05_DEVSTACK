import { Suspense } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ExploreTechnologies from "./components/technologies/ExploreTechnologies"
import type { ITechnologyType } from "./types/TechnologyType"
import Footer from "./components/Footer"
import Loaders from "./components/Loaders"


const TechnologyPromise = async(): Promise<ITechnologyType[]> => {

  const res = await fetch('/Technologies.json')
  const data = await res.json()
  return data
  
  
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Suspense fallback={<Loaders />}>
      <ExploreTechnologies TechnologyPromise={TechnologyPromise()} />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
