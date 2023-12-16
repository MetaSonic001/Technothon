// import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence

import { styles } from '../styles.js';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion.js';
// import icon from './icons'

import 'react-vertical-timeline-component/style.min.css';

import { TimelineData } from '../constants/index.js';

const TimelineEvent = ({ title, date, icon }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: '#1d1836',
            color: '#fff',
            padding: '50px',
        }}
        contentArrowStyle={{ borderRight: '7px solid  #232631' }}
        date={date}
        iconStyle={{ background: '#383E56', padding: '15px' }}
        icon={icon}
    >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        </div>
    </VerticalTimelineElement>
);

TimelineEvent.propTypes = {
    title: PropTypes.any.isRequired,
    date: PropTypes.any.isRequired,
    icon: PropTypes.element.isRequired,
};

const Timeline = () => (
    <>
        <AnimatePresence>
            <motion.div variants={textVariant()} initial="hidden" animate="show" exit="hidden">
                <p className={`${styles.sectionSubText} text-center`}> Event Timeline</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Important Dates.</h2>
            </motion.div>
        </AnimatePresence>

        <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
                {TimelineData.map((event, index) => (
                    <TimelineEvent key={`timeline-event-${index}`} title={event.title} date={event.date} />
                ))}
            </VerticalTimeline>
        </div>
    </>
);

export default SectionWrapper(Timeline, 'timeline');
