import banner from '../../../assets/banner.mp4'
import { Typewriter } from 'react-simple-typewriter'
import Marquee from "react-fast-marquee";

import c from '../../../assets/icons/c.png'
import cpp from '../../../assets/icons/cpp.png'
import js from '../../../assets/icons/js.png'

import html from '../../../assets/icons/html.png'
import css from '../../../assets/icons/css.png'
import tailwind from '../../../assets/icons/tailwind.png'
import react from '../../../assets/icons/react.png'
import firebase from '../../../assets/icons/firebase.png'

import node from '../../../assets/icons/node.png'
import express from '../../../assets/icons/express.png'
import mongo from '../../../assets/icons/mdb.png'


const Banner = () => {

    const scrollToSection = (text) => {
        const targetSection = document.getElementById(text);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    return (
        <div className='w-full h-screen relative'>
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
            <video className='w-full h-full object-cover' src={banner} autoPlay loop muted></video>
            <div className='absolute text-gray-200 top-0 w-full h-full flex flex-col justify-center items-center ml-5 space-y-3 md:space-y-5'>
                <h1 className='w-full text-3xl md:text-5xl font-bold font-merri text-center pr-7'>Nazmul Hassan Nahid</h1>
                <p className='text-xl md:text-2xl font-semibold font-mont text-center md:text-start pb-2'>I am <span className='text-sky-400'>{' '}
                    <Typewriter
                        words={['Tech Learner', 'Web Developer', 'Fresher']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
                </p>

                <div className='w-4/5 md:w-3/5 mx-auto pr-5'>
                    <Marquee>
                        <img className='w-6 md:w-8 ml-10' src={c} alt="c" />
                        <img className='w-6 md:w-8 ml-10' src={cpp} alt="cpp" />
                        <img className='w-6 md:w-8 ml-10' src={js} alt="js" />
                        <img className='w-6 md:w-8 ml-10' src={html} alt="html" />
                        <img className='w-6 md:w-8 ml-10' src={css} alt="css" />
                        <img className='w-6 md:w-8 ml-10' src={tailwind} alt="tailwind" />
                        <img className='w-6 md:w-8 ml-10' src={react} alt="react" />
                        <img className='w-6 md:w-8 ml-10' src={firebase} alt="firebase" />
                        <img className='w-6 md:w-8 ml-10' src={node} alt="node" />
                        <img className='w-6 md:w-8 ml-10' src={express} alt="express" />
                        <img className='w-6 md:w-8 ml-10' src={mongo} alt="mongodb" />
                    </Marquee>
                </div>
                <div className='space-x-2 pt-3 w-full text-center mr-8 md:mr-2'>
                    <a href="/resume-nahid.pdf" download="resume-nahid.pdf"><button className="btn btn-sm btn-outline  text-sky-400 hover:text-white hover:border-sky-400">Download Resume</button></a>
                    <button onClick={() => scrollToSection("contact")} className="btn btn-sm btn-outline  text-sky-400 hover:text-white hover:border-sky-400">Contact Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;