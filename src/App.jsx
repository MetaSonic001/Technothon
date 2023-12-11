import {BrowserRouter} from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

const App = () => {
  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <div>
            <Hero />
            </div>
          </div>
          {/* <About /> */}
          {/* <StepProcess /> */}
          {/* <TimeLine /> */}
          {/* <ProblemStatement /> */}
          {/* <Prizes /> */}
          {/* <Guidelines /> */}
          {/* <FAQ /> */}
          {/* <PreviousMoments /> */}
          {/* <Sponsors /> */}
          {/* <ContactUs /> */}
          <Footer />


        </div>
      </BrowserRouter>
  )
}

export default App
