import React, { useState, useEffect, useRef } from 'react';
import { Text, Title } from "@tremor/react";
const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={accordionRef} className='bg-gray-300 rounded-lg py-2 w-[25rem] z-[10000]'>
      <div className={`accordion-title relative  ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <Title className='px-5'>Dashboard</Title> 
      </div>
      {isOpen && (
        <div className="accordion-content absolute bg-red-100 rounded-b-lg  py-2 px-5 w-[25rem]">
          <div>
            sadasd
          </div>
          <div>
            asdas
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
