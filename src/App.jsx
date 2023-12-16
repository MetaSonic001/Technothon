import { BrowserRouter } from 'react-router-dom'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import TextBlock from './textBlock';
// import './App.css';



import Hero from './components/Hero copy'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Parallax1 from './components/Parallax1';

import Parallax2 from './components/Parallax1';
import Video from './components/Video';
import Parallax3 from './components/Parallax1';
import About from './components/About';
import Timeline from './components/Timeline';

const App = () => {
  return (
    <BrowserRouter>
      {/* <div classNameName="py-2 md:px-10 sm:px-8 px-4 w-full top-0 z-20">
        <div classNameName>
          <Navbar />
        </div>
      </div> */}


      <div>
        {/* <Video/> */}
        {/* <div classNameName=" flex items-center justify-center"> */}
          <Hero />
        {/* </div> */}
      </div>



     {/* <div classNameName="" style="background:#000f">
      <About/>
     </div> */}


     <div className='relative  md:px-12 sm:px-8 px-4 w-[100%] min-h-[100vh]'>
      <Timeline/>
     </div>
     <div>
   </div>


      {/* <StepProcess /> */}
      {/* <TimeLine /> */}
      {/* <ProblemStatement /> */}
      {/* <Prizes /> */}
      {/* <Guidelines /> */}
      {/* <FAQ /> */}
      {/* <PreviousMoments /> */}
      {/* <Sponsors /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}


      {/* </div> */}
    </BrowserRouter>
  )
}




// const App = () => {
//   return (
//     <BrowserRouter>
//     <div className="App">
//       <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
//         <ParallaxLayer offset={0} speed={0.25}>
//           <div className="animation_layer parallax" id="artback"></div>
//         </ParallaxLayer>
//         <ParallaxLayer offset={0} speed={0.3}>
//           <div className="animation_layer parallax" id="mountain"></div>
//         </ParallaxLayer>
//         <ParallaxLayer offset={0} speed={-0.1}>
//           <div className="animation_layer parallax" id="logoland"></div>
//         </ParallaxLayer>
//         <ParallaxLayer offset={1} speed={0.25}>
//           <TextBlock />
//         </ParallaxLayer>
//       </Parallax>
//     </div>


//     </BrowserRouter>
//     )
//   }
export default App
