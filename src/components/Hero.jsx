import Video from './Video';
import './Hero.css';
import Timeline from "./Timeline";

const App = () => {
  return (
    <>
      <div className="dark-background">
        <Video />
      </div>

      <div>
        <Timeline />
      </div>
    </>
  );
};

export default App;
