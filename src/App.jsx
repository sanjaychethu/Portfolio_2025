import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <div className='relative z-0'>
          <About />
          <Tech />
          <Experience />
        
          <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Analytics/>
    </BrowserRouter>
  );
}

export default App;

