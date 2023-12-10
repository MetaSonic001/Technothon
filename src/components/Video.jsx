// Video.jsx

// import React from 'react';
import videoBg from '../assets/Intro Video.mp4';
import './Video.css';

const Video = () => {
  return (
    <div className='main relative overflow-hidden'>
      <video className='w-full h-auto block' src={videoBg} autoPlay muted />
    </div>
  );
};

export default Video;
