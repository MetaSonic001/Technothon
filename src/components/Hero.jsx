import Video from './Video';
import './Hero.css';
import Timeline from "./Timeline";
import Parallax1 from './Parallax1';
import Parallax2 from './Parallax2';
import Parallax3 from './Parallax3';

const App = () => {
  return (
    <>
    <div className='background'>
      <div className="dark-background">
        {/* <Video /> */}
      </div>

      <div>
        <Parallax1 />
        <Timeline />
        <Parallax2 />
        <Parallax3 />
      </div>
      </div>
    </>
  );
};

export default App;
