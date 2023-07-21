import { useState, useEffect, useRef } from 'react';
import { FaBars, FaAngleUp, FaAngleRight} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import img from '../img/opendataAnalitics2023.png';
import { Text } from "@tremor/react";

import logoGop from './img/logoGobPe.png'

function Nav() {
  const [showShadow, setShowShadow] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const ulNavRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (ulNavRef.current && !ulNavRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowShadow(scrollTop > 0);
      setShowBackground(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const icon = isOpen ?  < FaAngleUp className='-rotate-90'/> : <FaBars />;

  const containerClasses = `${showShadow ? 'shadow-md' : ''} ${showBackground ? 'bg-[#fafafa]' : ''} xl:bg-none w-full fixed top-0 left-0 z-[18000]`;

  return (
    <>
      <div className={containerClasses} >
        <div className='xl:flex 2xl:py-2 mb-4 2xl:px-22 px-7 xl:px-10 xl:justify-between xl:items-center'>
          <div className='font-bold 2xl:text-2xl xl:text-base cursor-pointer flex justify-between items-center md:justify-start text-gray-800'>
            <div className=''>
              <NavLink to={'/'} className={``}>
              <img src={img} alt="" className='2xl:w-56 w-36 xl:w-24 mt-3' />
              </NavLink>
              
            </div>

            <div onClick={handleToggle} className='text-2xl right-8 xl:hidden cursor-pointer text-gray-600'>
              {icon}
            </div>
            
          </div>
          <ul ref={ulNavRef} className={`md:flex md:items-center md:pb-0 md:bg-opacity-0 bg-gray-50 pb-12 absolute md:static md:z-auto w-full md:w-auto h-screen md:h-auto md:pl-0  xl:px-0 transition-all duration-500 ease-in mt-3 ${isOpen ? 'left-0' : '-left-full'}`}>
            <li className='md:ml-8 sm:text-ls md:my-0 my-4 2xl:px-0 px-4'>
              <NavLink to={'/'} onClick={handleToggle} className='text-gray-700 xl:text-md font-bold 2xl:text-lg hover:text-gray-400'>Inicio</NavLink>
            </li>
            <hr className=' bg-gray-900 2xl:hidden'/>
            <li className='md:ml-8 sm:text-ls md:my-0 my-4 2xl:px-0 px-4'>
              <NavLink to={'/incio/Cards'} onClick={handleToggle} className='text-gray-700 xl:text-md 2xl:text-lg font-bold hover:text-gray-400'>Datos Abiertos</NavLink>
            </li>
            <hr className=' bg-gray-900 2xl:hidden'/>
            <li className='md:ml-8 sm:text-ls md:my-0 my-4 2xl:px-0 px-4 '>
              <NavLink to={'/acerca'} onClick={handleToggle} className='text-gray-700 font-bold xl:text-md 2xl:text-lg hover:text-gray-400'>Acerca</NavLink>
            </li>
            <hr className=' bg-gray-900 2xl:hidden'/>
            <li className='md:ml-8 sm:text-ls md:my-0 my-4 2xl:px-0 px-4 '>
              <NavLink to={'/'} onClick={handleToggle} className='text-gray-700 font-bold xl:text-md 2xl:text-lg hover:text-gray-400'>Contacto</NavLink>
            </li>
            <hr className=' bg-gray-900 2xl:hidden'/>
            
            <li className={`md:ml-8 sm:text- md:my-0 my-4 2xl:mx-0 2xl:ml-9 mx-4 xl:py-1 2xl:py-0 py-2 ${showBackground? 'bg-gray-200' : 'bg-white'}  hover:bg-yellow-300  rounded-xl shadow-lg`}>
              <NavLink to={'https://www.datosabiertos.gob.pe/'} target="_blank" onClick={handleToggle} className='text-gray-400 px-5 2xl:py-2 hover:text-gray-100 flex items-center w-full justify-between gap-3'>
                <div className='4/12'>
                  <img src={logoGop} alt="" className='2xl:w-8 xl:w-6 w-7' />
                </div>
                <div className='4/12 '>
                  <Text className='xl:text-xs 2xl:text-md'>Plataforma Nacional</Text>
                  <Text className='xl:text-xs 2xl:text-md'>de datos abiertos</Text>
                </div>
                <div className='4/12'>
                  <FaAngleRight></FaAngleRight>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
