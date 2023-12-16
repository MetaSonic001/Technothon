import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

const Countdowns = ({ targetDate }) => {
  // Set the time zone to Indian Standard Time (IST)
  const targetDateIST = moment.tz(targetDate, 'Asia/Kolkata').valueOf();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDateIST - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [targetDateIST]);


  
  return (
    
      <div>
        <div className="flex items-center justify-center undefined">
          <section className="flex flex-col items-center mx-2 ">
            <div className="md:w-28 md:h-28 sm:h-20 sm:w-20 w-16 h-16 rounded-lg flex items-center justify-center shadow-blue-500 shadow-lg">
              <p className="text-white font-bold md:text-7xl sm:text-5xl text-4xl">
                {timeLeft.days}
              </p>
            </div>
            <small className="text-yellow-500 mt-2 text-lg">
              Days
            </small>
          </section>

          <section className="flex flex-col items-center mx-2 ">
            <div className="md:w-28 md:h-28 sm:h-20 sm:w-20 w-16 h-16 rounded-lg flex items-center justify-center shadow-blue-500 shadow-lg">
              <p className="text-white font-bold md:text-7xl sm:text-5xl text-4xl">
                {timeLeft.hours}
              </p>
            </div>
            <small className="text-yellow-500 mt-2 text-lg">
              Hours
            </small>
          </section>

          <section className="flex flex-col items-center mx-2 ">
            <div className="md:w-28 md:h-28 sm:h-20 sm:w-20 w-16 h-16 rounded-lg flex items-center justify-center shadow-blue-500 shadow-lg">
              <p className="text-white font-bold md:text-7xl sm:text-5xl text-4xl">
                {timeLeft.minutes}
              </p>
            </div>
            <small className="text-yellow-500 mt-2 text-lg">
              Minutes
            </small>
          </section>

          <section className="flex flex-col items-center mx-2 ">
            <div className="md:w-28 md:h-28 sm:h-20 sm:w-20 w-16 h-16 rounded-lg flex items-center justify-center shadow-blue-500 shadow-lg">
              <p className="text-white font-bold md:text-7xl sm:text-5xl text-4xl">
                {timeLeft.seconds}
              </p>
            </div>
            <small className="text-yellow-500 mt-2 text-lg">
              Seconds
            </small>
          </section>
        </div>
      </div>
    
  );
};


Countdowns.propTypes = {
  targetDate: PropTypes.number.isRequired,
};


export default Countdowns;