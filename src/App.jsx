import {BrowserRouter} from 'react-router-dom'
import Hero from './components/Hero'

const App = () => {
  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            {/* <Navbar /> */}
            <Hero />
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



        </div>
      </BrowserRouter>
  )
}

export default App
