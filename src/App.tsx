import { Suspense } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ExploreTechnologies from "./components/technologies/ExploreTechnologies"
import type { ITechnologyType } from "./types/TechnologyType"
import Footer from "./components/Footer"


const TechnologyPromise = async(): Promise<ITechnologyType[]> => {

  const res = await fetch('/public/Technologies.json')
  const data = await res.json()
  return data
  
  
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="text-center text-2xl font-bold">Loading...</div>}>
      <ExploreTechnologies TechnologyPromise={TechnologyPromise()} />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
