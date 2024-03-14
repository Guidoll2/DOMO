'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menu = document.getElementById('MENUDESPLEGABLE');
            const button = document.getElementById('BOTONMENU');

            if (
                menuOpen &&
                menu &&
                button &&
                !(menu.contains(event.target as Node) || button.contains(event.target as Node))
            ) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (



<nav className='flex grid grid-cols-1 w-full z-[1]'> 
<p className='text-white p-3 text-xs md:hidden'>compleet labs</p>
<div className='md:flex md:grid md: grid-cols-2 hidden'>
    <p className='text-white'>compleet labs</p>
   <div className='flex grid grid-cols-6'>
    <p className='text-[14px] ml-2 text-white'>Home</p>
    <p className='text-[14px] ml-2 text-gray-400'>Services</p>
    <p className='text-[14px] ml-2 text-gray-400'>Technology</p>
    <p className='text-[14px] ml-2 text-gray-400'>Case studies</p>
    <p className='text-[14px] ml-2 text-gray-400'>About</p>
    <p className='text-[14px] -translate-x-5  text-[#5b85ed] animate-[pulse_2s_ease-in-out_infinite]'>Hire us</p></div>

</div>



<button onClick={handleNav} id="BOTONMENU" className="absolute top-0.5 right-0.5 cursor-pointer z-[90] p-2 md:hidden">

  <div className="w-4 h-0.5 mb-0.5 rounded-bl-full bg-[#5b85ed] "></div>
  <div className="w-4 h-0.5 mb-0.5 rounded-bl-full bg-[#5b85ed] "></div>
  <div className="w-4 h-0.5 mb-0.5 rounded-bl-full bg-[#5b85ed] "></div>

 
  </button>

<div className={
menuOpen
? 'absolute top-0 left-0 w-screen bg-[#283345] transition ease-in-out delay-150 duration-300 z-[100]'
: 'absolute top-[-100%] h-screen w-full left-0 transition ease-in-out delay-150 duration-300 '
}>



<div id='MENUDESPLEGABLE' className='flex grid grid-cols-1 justify-items-end p-5 gap-1'>

  <a href="#lite" className='text-gray-200 text-xs md:text-lg'>
    <p>Home</p>
  </a>

  <a href="#premium"  className='text-gray-200 text-xs md:text-lg'>
    <p>Services</p>
  </a>

  <a href='#containercontact' className='text-blue-300 text-xs md:text-lg text-gray-200'>
    <p>Technology</p>
  </a>

  <a href='#containercontact' className='text-blue-300 text-xs md:text-lg text-gray-200'>
    <p>Case Studies</p>
  </a>
  <a href='#containercontact' className='text-blue-300 text-xs md:text-lg text-gray-200'>
    <p>About</p>
  </a>
  <a href='#containercontact' className='text-xs md:text-lg text-[#5b85ed] animate-[pulse_2s_ease-in-out_infinite]'>
    <p>Hire Us</p>
  </a>


</div>

</div>
</nav>

);
}


export default Navbar;         