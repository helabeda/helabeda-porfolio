import {useState } from "react"
import Experience from "./Components/Container/Experience";
import { Navbar, Home, About, Portfolio, Testimonials, Contact, Footer } from "./Components/index"

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className="font-Poppins bg-Solitude dark:bg-slate-900">
     <Navbar/>
     <Home/>
     <About/>
     <Experience/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
