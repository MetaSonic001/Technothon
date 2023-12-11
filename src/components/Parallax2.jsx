import { Parallax } from 'react-parallax';
import Img2 from '../assets/gatewayIndia.jpg'



const Parallax2 = () => (
  
    <Parallax className='image' blur={0} bgImage={Img2} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content text-center p-20'>
            <span className="img-txt text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">a trip to CSMT</span>
        </div>
    </Parallax>
);

export default Parallax2