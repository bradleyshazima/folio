import React, { useState, useEffect } from 'react';
import './App.css'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu
import { FlipWords } from "@/components/ui/shadcn-io/flip-words";
import { works } from './contants/constants';


const words = ["Web Developer", "App Developer", "Graphic Designer"];

function App() {
  // State to keep track of the selected service
  const [selectedService, setSelectedService] = useState('');
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // List of services to display
  const services = [
    'Mobile App',
    'Website Design',
    'Branding',
    'Webflow development',
    'App design',
    'Graphic design',
    'Wordpress',
  ];

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      const offset = 80; // height of your fixed navbar
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on navigation
  };

  const [activeSection, setActiveSection] = useState('home');

  // detect scroll position and update active link
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'contact']; // Added contact to sections
      const scrollY = window.scrollY + 200; // offset for navbar height

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      document.documentElement.classList.toggle('dark', mediaQuery.matches);
    };
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className='w-full flex flex-col items-center overflow-x-hidden bg-white dark:bg-[#131313]'>
      {/* --- NAVIGATION --- */}
      <nav className='w-full fixed top-0 left-0 h-20 flex items-center px-6 sm:px-12 lg:px-24 xl:px-52 justify-between z-[999] bg-white dark:bg-[#131313] shadow-sm shadow-gray-200 dark:shadow-md dark:shadow-black'>
        <span className='text-2xl font-black'>Bradley.</span>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-6'>
          <ul className='flex items-center gap-6'>
            <li>
              <button
                onClick={() => scrollToSection('#home')}
                className={`relative pb-1 transition-all duration-300 ${activeSection === 'home' ? "text-blue-700 dark:text-blue-400 font-semibold" : "hover:text-blue-700 dark:hover:text-blue-400"}`}
              >
                HOME <AirPods />
                <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-blue-700 dark:bg-blue-400 transition-all duration-300 ${activeSection === 'home' ? "scale-x-100" : "scale-x-0"}`}></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('#work')}
                className={`relative pb-1 transition-all duration-300 ${activeSection === 'work' ? "text-blue-700 dark:text-blue-400 font-semibold" : "hover:text-blue-700 dark:hover:text-blue-400"}`}
              >
                WORKS
                <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-blue-700 dark:bg-blue-400 transition-all duration-300 ${activeSection === 'work' ? "scale-x-100" : "scale-x-0"}`}></span>
              </button>
            </li>
            <li><a href='https://github.com/bradleyshazima' className='hover:text-blue-700 dark:hover:text-blue-400'>GITHUB</a></li>
          </ul>
          <button onClick={() => scrollToSection('#contact')} className='px-6 py-3 rounded-2xl bg-blue-700 dark:bg-blue-400 text-white'>Let's Talk</button>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX className='text-3xl' /> : <FiMenu className='text-3xl' />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white dark:bg-[#131313] z-[998] flex flex-col items-center justify-center gap-10 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className='flex flex-col items-center gap-8 text-2xl'>
            <li><button onClick={() => scrollToSection('#home')} className='hover:text-blue-700 dark:hover:text-blue-400'>HOME</button></li>
            <li><button onClick={() => scrollToSection('#work')} className='hover:text-blue-700 dark:hover:text-blue-400'>WORKS</button></li>
            <li><a href='https://github.com/bradleyshazima' className='hover:text-blue-700 dark:hover:text-blue-400'>GITHUB</a></li>
          </ul>
          <button onClick={() => scrollToSection('#contact')} className='px-8 py-4 text-xl rounded-2xl bg-blue-700 dark:bg-blue-400 text-white'>Let's Talk</button>
      </div>

      {/* --- HOME SECTION --- */}
      <div id='home' className='w-full mt-20 flex flex-col lg:flex-row px-6 sm:px-12 lg:px-24 xl:px-52 items-center justify-center lg:justify-between min-h-[calc(100vh-80px)] gap-12 lg:gap-4'>
        <div className='w-full lg:w-2/3 flex flex-col gap-4 text-center lg:text-left items-center lg:items-start'>
          <div className='flex items-end gap-2'>
            <p className='text-2xl md:text-3xl font-medium lg:mt-0 mt-16'>Hi, I'm</p>
            <h1 className='text-2xl md:text-3xl font-medium'>Bradley Shazima</h1>
          </div>
          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl playfair italic font-semibold text-blue-900 dark:text-blue-400'>
            <FlipWords
            className="playfair"
              words={words}
              duration={3000}
              letterDelay={0.05}
              wordDelay={0.3}
            />
          </h2>
          <p className='w-full max-w-2xl lg:w-4/5 text-base md:text-lg'>I help companies bring their ideas to life, and stand out online with stunning websites, apps, and design</p>
          <ul className='flex items-center gap-4 mt-8'>
            <li><a href="https://instagram.com/thedirectorbradley" className='bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center'><FaInstagram className='text-lg text-black' /></a></li>
            <li><a href="https://github.com/bradleyshazima/" className='bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center'><PiGithubLogoFill className='text-lg text-black' /></a></li>
            <li><a href="https://www.linkedin.com/in/bradley-shazima-97bb90246/" className='bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center'><FaLinkedinIn className='text-lg text-black' /></a></li>
            {/* <li><a href="#" className='bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center'><SiUpwork className='text-lg text-black' /></a></li>
            <li><a href="#" className='bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center'><TbBrandFiverr className='text-lg text-black' /></a></li> */}
          </ul>
        </div>

        <div className='w-3/4 sm:w-1/2 lg:w-1/3 mt-12 lg:mt-0'>
          <img src="https://res.cloudinary.com/bradley-cdn/image/upload/q_auto/f_auto/v1747900627/hero_xejovu.jpg" alt="Hero Image" className='w-full h-auto rounded-full' />
        </div>
      </div>

      {/* --- WORK SECTION --- */}
      <div id='work' className='w-full flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 xl:px-52 py-24 min-h-screen'>
        <h3 className='text-3xl font-semibold'>MY WORK</h3>
        <div className='w-full flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12'>
          {works.map((work) => (
          <a 
            key={work.id}
            href={work.site}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full sm:w-[45%] lg:w-[30%] h-auto aspect-[16/12] group overflow-hidden rounded-2xl dark:border dark:border-[rgba(255,255,255,0.5)]'
          >
            <div className='w-full h-full flex items-center justify-center relative'>
              <img src={work.img} alt={work.title} className='w-full h-full object-cover' />
              <div className='bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.4)] backdrop-blur-2xl rounded-t-3xl w-full h-3/5 -bottom-[70%] transition-all duration-300 absolute z-10 py-4 px-8 group-hover:bottom-0 '>
                <h3 className='text-xl font-semibold'>{work.title}</h3>
                <p>{work.desc}</p>
              </div>
            </div>
          </a>
          ))}
        </div>
      </div>

      {/* --- CONTACT SECTION --- */}
      <div id='contact' className='w-full flex flex-col lg:flex-row items-stretch h-auto'>
        <div className='w-full lg:w-1/3 h-auto bg-gray-300 dark:bg-[#1d1d1d] flex flex-col p-12 md:p-20 items-center lg:items-start justify-center text-center lg:text-left'>
          <p className='text-5xl md:text-6xl lg:text-5xl xl:text-7xl'><span className='font-semibold'>Say Hi! </span>and tell me about your idea.</p>
        </div>

        <div className='w-full lg:flex-1 px-6 sm:px-12 lg:pl-20 lg:pr-40 py-16 h-full'>
          <form action="https://formspree.io/f/mrbyaopq" method='POST' className='flex flex-wrap items-center justify-between gap-y-12'>
            <div className='w-full md:w-[48%]'>
              <label htmlFor="name">Name*</label>
              <input type="text" id='name' name='name' className='w-full outline-0 border-b border-black dark:border-white bg-transparent mt-2 py-2 px-4' />
            </div>
            <div className='w-full md:w-[48%]'>
              <label htmlFor="email">Email*</label>
              <input type="email" id='email' name='email' className='w-full outline-0 border-b border-black dark:border-white bg-transparent mt-2 py-2 px-4' />
            </div>
            <div className='w-full'>
              <label htmlFor="company">Company/ Business name</label>
              <input type="text" id='company' name='company' className='w-full outline-0 border-b border-black dark:border-white bg-transparent mt-2 py-2 px-4' />
            </div>

            <div className="w-full">
              <label className="block mb-4">What's on your mind?*</label>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => {
                  const serviceId = service.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <div key={serviceId}>
                      <input
                        type="radio"
                        id={serviceId}
                        name="service"
                        value={service}
                        onChange={handleServiceChange}
                        checked={selectedService === service}
                        className="hidden peer"
                      />
                      <label
                        htmlFor={serviceId}
                        className="inline-block px-5 py-2 border border-gray-400 rounded-full cursor-pointer transition-colors duration-200 dark:peer-checked:bg-white dark:peer-checked:text-black peer-checked:bg-black peer-checked:text-white"
                      >
                        {service}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full mt-8 flex flex-col sm:flex-row justify-end items-center gap-6 sm:gap-12">
                <p className='text-sm text-gray-500 text-center sm:text-left'>I must get back to you within 24 hours</p>
                <button type='submit' className='bg-black dark:bg-white dark:text-black text-white px-8 py-3 rounded-full w-full sm:w-auto'>Send Me</button>
            </div>
          </form>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className='w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-6 sm:px-12 lg:px-24 xl:px-40 py-8 text-sm'>
        <ul className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2'>
          <li><a href="https://instagram.com/thedirectorbradley" className='hover:text-blue-700 dark:hover:text-blue-400'>INSTAGRAM</a></li>
          <li><a href="https://www.linkedin.com/in/bradley-shazima-97bb90246/" className='hover:text-blue-700 dark:hover:text-blue-400'>LINKEDIN</a></li>
          <li><a href="https://github.com/bradleyshazima" className='hover:text-blue-700 dark:hover:text-blue-400'>GITHUB</a></li>
          {/* <li><a href="#" className='hover:text-blue-700 dark:hover:text-blue-400'>FIVERR</a></li>
          <li><a href="#" className='hover:text-blue-700 dark:hover:text-blue-400'>UPWORK</a></li> */}
        </ul>
        <span>Bradley Shazima © 2025</span>
      </footer>
    </section>
  )
}

export default App;