// import Video from './Video';
import './Hero.css';
import Countdowns from './Countdowns';
// import Video from './Video';
import Register from './Register';
const App = () => {
  const targetDate = new Date('December 17, 2023').getTime();

  return (
    <>
   <div className="w-[100%] h-[100vh] flex-col flex items-center justify-center">
    {/* <Video/> */}
    <span className="text-slate-100 text z-10">
      TECHNOTHON 2024
    </span>
    <div className="md:mt-2 mt-4 z-10">
    <Countdowns targetDate={targetDate} />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <Register />
</div>
   
    </div>
   </div>

    </>
  );
};

export default App;


// video, title, countdown, register button
