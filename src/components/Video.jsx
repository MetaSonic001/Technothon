// Video.jsx

// import React, { useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import videoBg from '../assets/Intro Video.mp4';
import './Video.css';

const Video = () => {
    return (
        <div className='main'>
            <video src={videoBg} autoPlay muted />
        </div>
    )
}

export default Video