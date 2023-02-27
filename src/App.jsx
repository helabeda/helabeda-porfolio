import React, {useEffect} from 'react'
import Experience from "./Components/Container/Experience";
import { Navbar, Home, About, Portfolio, Testimonials, Contact, Footer } from "./Components/index"
import ReactGA from "react-ga4";

function App() {
    const TRAKING_ID = "G-EKTSSLN0XZ"
    ReactGA.initialize(TRAKING_ID);
    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
    }, []);


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
