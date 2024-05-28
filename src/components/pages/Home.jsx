import React, { useEffect, useState, useRef } from 'react';
import { PiMouseScrollThin } from "react-icons/pi";
import varun from '../../Assets/varunpathak.png';
import varun2 from '../../Assets/varunabout.png';
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiMysql } from 'react-icons/si';

const Home = () => {



  const cards = [
    { icon: <FaHtml5 size={200} className='w-40' />, label: 'HTML 5' },
    { icon: <FaCss3Alt size={200} />, label: 'CSS 3' },
    { icon: <IoLogoJavascript size={200} />, label: 'JAVA SCRIPT' },
    { icon: <FaReact size={200} />, label: 'REACT' },
    { icon: <SiExpress size={200} />, label: 'EXPRESS JS' },
    { icon: <FaNode size={200} />, label: 'NODE JS' },
    { icon: <SiMysql size={200} />, label: 'MY SQL' },


  ];


  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getTransformStyle = () => {
    const scale = 1 + scrollY * 0.0001;
    const translateY = scrollY * 0.0;
    return {
      transform: `scale(${scale}) translateY(${translateY}px)`,
    };
  };

  const InfoRow = ({ title, content }) => (
    <>
      <div className="p-3 md:p-5 flex justify-between font-medium text-black">
        <p>{title}</p>
        <p>{content}</p>
      </div>
      <div className="border-t border-gray-300"></div>
    </>
  );

  return (
    <>
      {/* wellcome page */}
      <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-center items-center text-center p-3 max-w-screen-lg mx-auto">
        <div className="flex items-center space-x-2 mt-6 md:mt-10">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full animate-blink"></div>
          <h1 className="text-xs md:text-xl lg:text-2xl font-semibold text-[#525252]">
            AVAILABLE FOR FULL-TIME OPPORTUNITIES!
          </h1>
        </div>
        <div className="flex-grow flex flex-col justify-center">
          <h1 className="text-6xl md:text-x4l lg:text-8xl font-extrabold tracking-tighter text-[#1D1D1F] mt-6">
            VARUN PATHAK
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-[#525252] tracking-wide mt-2">
            FRONTEND + REACT DEVELOPER
          </h2>
        </div>
        <p className="text-base md:text-xl lg:text-2xl text-black w-full md:w-3/4 lg:w-2/3 mt-6">
          Dynamic, responsive web apps with top-notch performance and user experience.
        </p>
        <div className="mt-10 md:mt-14 text-sm md:text-base w-full flex justify-between">
          <a href="#about" className="font-medium text-black hover:text-white hover:bg-[#525252] px-2 md:px-4 py-2 md:py-3 underline">BASED IN PUNE, IN</a>
          <a href="#contact" className="font-medium text-black hover:text-white hover:bg-[#525252] px-2 md:px-4 py-2 md:py-3 underline">CONTACT ME</a>
        </div>
        <div className="flex items-center mt-10 md:mt-14 animate-bounce">
          <PiMouseScrollThin size={40} />
        </div>
      </div>
      {/* tab view vaun pathak */}
      <div className="w-full h-screen overflow-hidden relative">
        <img
          src={varun}
          alt="varun"
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-in-out transform"
          style={getTransformStyle()}
        />
      </div>
      {/* featured work */}
      <div className="w-full h-full flex flex-col justify-around">
        <div className="flex flex-col md:flex-row justify-between items-center px-3 py-12 md:py-24">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#1D1D1F]">
            FEATURED WORK
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-black w-full md:w-3/4 lg:w-2/3 mt-6 md:mt-0">
            I'm a React developer with a knack for building elegant UIs and scalable web apps. Prioritizing user experience and clean code, I bring visions to life with high-performing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div className="h-full rounded-xl border border-gray-300 overflow-hidden">
            <h2 className="bg-[#F2F2F4] p-3 md:p-5 text-lg md:text-2xl lg:text-3xl font-semibold text-black">
              01. Car Loan Application
            </h2>
            <div className="flex flex-col">
              <InfoRow title="TECHNOLOGY" content="REACT, NODE, EXPRESS, SQL" />
              <InfoRow title="CLIENT" content="CAR MAX BUSINESS" />
              <InfoRow title="YEAR" content="2023" />
              <InfoRow title="CATEGORY" content="FINANCE" />
              <InfoRow title="LIVE PROJECT" content="UNDER DEVELOPMENT" />
            </div>
          </div>

          <div className="h-full rounded-xl border border-gray-300 overflow-hidden">
            <h2 className="bg-[#F2F2F4] p-3 md:p-5 text-lg md:text-2xl lg:text-3xl font-semibold text-black">
              02. Miniature Website
            </h2>
            <div className="flex flex-col">
              <InfoRow title="TECHNOLOGY" content="REACT, TAILWIND CSS" />
              <InfoRow title="CLIENT" content="LOCAL" />
              <InfoRow title="YEAR" content="2023" />
              <InfoRow title="CATEGORY" content="E-COMMERCE" />
              <InfoRow title="LIVE PROJECT" content="UNDER DEVELOPMENT" />
            </div>
          </div>

          <div className="h-full rounded-xl border border-gray-300 overflow-hidden">
            <h2 className="bg-[#F2F2F4] p-3 md:p-5 text-lg md:text-2xl lg:text-3xl font-semibold text-black">
              03. TODO LIST TASK APPLICATION
            </h2>
            <div className="flex flex-col">
              <InfoRow title="TECHNOLOGY" content="HTML, TAILWIND CSS" />
              <InfoRow title="CLIENT" content="SELF PROJECT" />
              <InfoRow title="YEAR" content="2023" />
              <InfoRow title="CATEGORY" content="OTHER" />
              <InfoRow title="LIVE PROJECT" content="ON GITHUB" />
            </div>
          </div>

          <div className="h-full rounded-xl border border-gray-300 overflow-hidden">
            <h2 className="bg-[#F2F2F4] p-3 md:p-5 text-lg md:text-2xl lg:text-3xl font-semibold text-black">
              04. WEATHER Website
            </h2>
            <div className="flex flex-col">
              <InfoRow title="TECHNOLOGY" content="REACT, TAILWIND CSS" />
              <InfoRow title="CLIENT" content="SELF" />
              <InfoRow title="YEAR" content="2023" />
              <InfoRow title="CATEGORY" content="E-COMMERCE" />
              <InfoRow title="LIVE PROJECT" content="UNDER DEVELOPMENT" />
            </div>
          </div>

          <div className="h-full rounded-xl border border-gray-300 overflow-hidden">
            <h2 className="bg-[#F2F2F4] p-3 md:p-5 text-lg md:text-2xl lg:text-3xl font-semibold text-black">
              05. BLOG APPLICATION
            </h2>
            <div className="flex flex-col">
              <InfoRow title="TECHNOLOGY" content="REACT, TAILWIND CSS, NODE, EXPRESS, MONGODB" />
              <InfoRow title="CLIENT" content="SELF" />
              <InfoRow title="YEAR" content="2022" />
              <InfoRow title="CATEGORY" content="OTHER" />
              <InfoRow title="LIVE PROJECT" content="UNDER DEVELOPMENT" />
            </div>
          </div>

          <div className="h-full rounded-xl border border-gray-300 overflow-hidden">
            <h2 className="bg-[#F2F2F4] p-3 md:p-5 text-lg md:text-2xl lg:text-3xl font-semibold text-black">
              06. COUNT DOWN Website
            </h2>
            <div className="flex flex-col">
              <InfoRow title="TECHNOLOGY" content="HTML, CSS, JAVASCRIPT " />
              <InfoRow title="CLIENT" content="SELF" />
              <InfoRow title="YEAR" content="2022" />
              <InfoRow title="CATEGORY" content="OTHER" />
              <InfoRow title="LIVE PROJECT" content="UNDER DEVELOPMENT" />
            </div>
          </div>
        </div>
      </div>
      {/* About varun pathak */}
      <div className="pt-6 gap-36  md:pt-2  md:gap-16 lg:pt-14  lg:gap-40 flex flex-col items-center w-full h-auto">
        <div className="text-center w-11/12 md:w-3/6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#1D1D1F]">
            MORE ABOUT VARUN ©
          </h1>
        </div>
        <div className="  w-1/2 md:w-1/3 lg:w-1/2  object-cover  transition-transform duration-100 ease-in-out ">
          <img
            src={varun2}
            alt="varun2"
            className="rounded-full p-4   border-2 "
            style={getTransformStyle()}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center text-center gap-6 px-4 md:px-0 lg:py-12">
          <p className="w-full md:w-3/4 lg:w-4/5 text-xs md:text-lg lg:text-xl font-semibold text-[#1D1D1F] uppercase">
            Experienced React developer adept at crafting responsive user interfaces. Skilled in React, JavaScript (ES6), HTML, CSS, Node.js, Express.js, and MySQL. Collaborative team player with a knack for problem-solving.
          </p>
          <p className="text-sm md:text-lg lg:text-xl text-black w-full md:w-3/4 lg:w-3/4">
            I'm at the forefront of React development, using innovative techniques to bring creative visions to life. My methods might be unconventional, but my dedication to the craft is unmatched. I excel at finding <i><b>"unexpected solutions"</b></i> and believe that with the right perspective, design can elevate the user experience.
          </p>
          <button className="bg-black text-white py-2 md:py-3 px-6 md:px-9 text-xs md:text-sm lg:text-base font-semibold rounded-3xl">
            <a href="/">DOWNLOAD RESUME</a>
          </button>

          <div className="pb-10 pt-10 carousel-container overflow-hidden relative">
            <div
              className="flex animate-marquee"
              style={{ animation: 'marquee 10s linear infinite' }}
            >
              {cards.concat(cards).map((card, index) => (
                <div
                  key={index}
                  className="w-32 h-32 p-10 bg-[#F5F5F7] border rounded-xl flex flex-col items-center justify-center text-center transition-transform duration-300 transform hover:scale-105 hover:rotate-6
                   sm:w-32 sm:h-32 sm:p-4 
                   md:w-52 md:h-52 md:p-9 
                   lg:w-60 lg:h-60 lg:p-10"
                >
                  {card.icon}
                  <span className="font-medium text-lg sm:text-lg md:text-xl ">
                    {card.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* MY EXPERTISE */}
      <div className="w-full h-full px-3 flex flex-col gap-5">
        <h1 className="w-1/3 text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#1D1D1F] pb-20">
          MY EXPERTISE
        </h1>

        <div className="bg-[#F5F5F7] w-full p-3 border rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5D5D60] border-2 rounded-full"></div>
            </div>
            <div className="px-5 flex flex-col gap-5">
              <h2 className="text-lg uppercase md:text-2xl lg:text-3xl font-semibold text-black">Core Web Technologies</h2>
              <div className="text-[#5D5D60] lg:w-3/5 text-xl">
                <p>1. HTML & CSS: Mastered semantic HTML and responsive CSS to create accessible and visually appealing web pages.</p>
                <p>2. JavaScript: Proficient in vanilla JavaScript, including ES6+ features for modern, efficient coding practices.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5d5d6000] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F7] w-full p-3 border rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5D5D60] border-2 rounded-full"></div>
            </div>
            <div className="px-5 flex flex-col gap-5">
              <h2 className="text-lg uppercase md:text-2xl lg:text-3xl font-semibold text-black">Modern Frameworks and Libraries</h2>
              <div className="text-[#5D5D60] lg:w-3/5 text-xl">
                <p>1. React: Experienced in building dynamic user interfaces with React, utilizing hooks, context API, and state management libraries like Redux.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5d5d6000] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F7] w-full p-3 border rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5D5D60] border-2 rounded-full"></div>
            </div>
            <div className="px-5 flex flex-col gap-5">
              <h2 className="text-lg uppercase md:text-2xl lg:text-3xl font-semibold text-black">Performance Optimization</h2>
              <div className="text-[#5D5D60] lg:w-3/5 text-xl">
                <p>1. Code Splitting & Lazy Loading: Implemented code splitting and lazy loading techniques to enhance web application performance.</p>
                <p>2. Asset Optimization: Optimized images, fonts, and other assets to ensure fast load times and a smooth user experience.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5d5d6000] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F7] w-full p-3 border rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5D5D60] border-2 rounded-full"></div>
            </div>
            <div className="px-5 flex flex-col gap-5">
              <h2 className="text-lg uppercase md:text-2xl lg:text-3xl font-semibold text-black">Responsive Design</h2>
              <div className="text-[#5D5D60] lg:w-3/5 text-xl">
                <p>1. Media Queries: Proficient in using CSS media queries to create responsive designs that work across various devices and screen sizes.</p>
                <p>2. Flexbox & Grid: Expert in utilizing CSS Flexbox and Grid for designing complex, flexible, and responsive layouts.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5d5d6000] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F7] w-full p-3 border rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5D5D60] border-2 rounded-full"></div>
            </div>
            <div className="px-5 flex flex-col gap-5">
              <h2 className="text-lg uppercase md:text-2xl lg:text-3xl font-semibold text-black">Continuous Learning and Collaboration</h2>
              <div className="text-[#5D5D60] lg:w-3/5 text-xl">
                <p>1. Problem Solving: Continuously enhancing problem-solving skills through coding challenges and real-world project development.</p>
                <p>2. Community Engagement: Actively participating in developer communities, contributing to open source projects, and staying updated with industry trends.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#5d5d6000] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>





    </>
  );
};

export default Home;
