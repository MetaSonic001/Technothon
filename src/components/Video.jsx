// Video.jsx

// import React from 'react';
import videoBg from '../assets/Intro Video.mp4';
import './Video.css';

const Video = () => {
  return (
    <div className='main relative overflow-hidden'>
      <video className='w-full h-auto max-w-full block object-cover' autoPlay muted loop>
        <source src={videoBg} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
