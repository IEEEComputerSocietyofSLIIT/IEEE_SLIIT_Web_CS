import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../views/images/CS Logo.png';

const Navbar = ({ home, aboutus, communityDetails, events, contactUs, gallery, news }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0);  // Store last scroll position

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll to hide/show navbar based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and passed 100px, hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up, show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Close the menu when clicking outside the menu or on any link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='mx-auto md:w-2/3 '>
      <nav
        className={`relative md:fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[900px] bg-white z-50 shadow-2xl p-4 py-3 md:rounded-b-3xl transition-transform duration-500 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center md:justify-center gap-4 mx-auto md:gap-0">
          {/* Logo */}
          <a href='/'>
            <img src={Logo} alt="Logo" className="h-10 mr-10" />
          </a>

          {/* Nav Links (for larger screens) */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLink to={home} className="font-semibold text-gray-700" onClick={closeMenu}>Home</NavLink>
            <NavLink to={aboutus} className="font-semibold text-gray-700" onClick={closeMenu}>About Us</NavLink>
            <NavLink to={contactUs} className="font-semibold text-gray-700" onClick={closeMenu}>Contact Us</NavLink>
            <NavLink to={gallery} className="font-semibold text-gray-700" onClick={closeMenu}>Gallery</NavLink>
            <NavLink to={communityDetails} className="font-semibold text-gray-700" onClick={closeMenu}>Community Details</NavLink>
            <NavLink to={events} className="font-semibold text-gray-700" onClick={closeMenu}>Events</NavLink>
            <NavLink to={news} className="font-semibold text-gray-700" onClick={closeMenu}>News</NavLink>
          </div>

          {/* Burger Menu Button for Mobile */}
          <div className="md:hidden cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleMenu(); }}>
            <div className={`w-6 h-1 bg-gray-700 mb-1 transition-transform ${isOpen ? 'transform translate-y-2 rotate-45' : ''}`}></div>
            <div className={`w-6 h-1 bg-gray-700 mb-1 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-1 bg-gray-700 transition-transform ${isOpen ? 'transform -translate-y-2 -rotate-45' : ''}`}></div>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div className={`absolute top-full left-0 w-full bg-white font-semibold text-gray-700 shadow-md p-4 text-center transform transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <NavLink to={home} className="block py-2 text-gray-700" onClick={closeMenu}>Home</NavLink>
          <NavLink to={aboutus} className="block py-2 text-gray-700" onClick={closeMenu}>About Us</NavLink>
          <NavLink to={contactUs} className="block py-2 text-gray-700" onClick={closeMenu}>Contact Us</NavLink>
          <NavLink to={gallery} className="block py-2 text-gray-700" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to={communityDetails} className="block py-2 text-gray-700" onClick={closeMenu}>Community Details</NavLink>
          <NavLink to={events} className="block py-2 text-gray-700" onClick={closeMenu}>Events</NavLink>
          <NavLink to={news} className="block py-2 text-gray-700" onClick={closeMenu}>News</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
