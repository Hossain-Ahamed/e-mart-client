import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';


const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    // Show the button when the user scrolls down 100px from the top of the document
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-10 ${
          isVisible ? 'block' : 'hidden'
        } bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out text-2xl`}
      >
        <AiOutlineArrowUp />
      </button>
    );
  };

export default BackToTopButton;