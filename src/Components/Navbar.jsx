import { useState } from 'react';
import logo from 'src/assets/images/logo.png';
import { RiMenuFoldFill, RiContactsLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";

import { Link } from 'react-router-dom';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className='flex justify-between  fixed top-0 right-0 left-0 z-50 gap-5 bg-white'>
      <img src={logo} alt="Logo" className="h-16 w-16 rounded-3xl p-1  ml-5 border-2 border-white" />
      <nav className="hidden md:block navbar">
        <ul className="flex gap-10 mr-10  mt-3 text-sm font-primary font-semibold text-gray-800">
          <li>
            <Link to="/" className="flex items-center gap-2">
              <IoHomeOutline size={20} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2">
              <AiOutlineExclamationCircle size={20} />  About Us
            </Link>
          </li>
          <li>
            <Link to="/projects" className="flex items-center gap-2">
              <GoProjectRoadmap size={20} /> Projects
            </Link>
          </li>
          <li>
            <Link to="/OurWork" className="flex items-center gap-2">
              <LiaHandHoldingHeartSolid size={20} /> Our Work
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="flex items-center gap-2">
              <RiContactsLine size={20} /> Contact Us
            </Link>
          </li>
          <Link to="/donate">
            <button className="ml-4 bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded hover:cursor-pointer">Donate Now</button>
        </Link>
        </ul>
      </nav>

      {/* mobile nav  */}


      {toggleMenu &&
        <nav className="block md:hidden mobile-nav  ">
          <ul onClick={() => setToggleMenu(!toggleMenu)} className=" sticky flex flex-col gap-3 font-primary mt-3 items-center font-medium text-amber-50 ">
            <li><IoHomeOutline size={20} /><Link to="/">Home</Link></li>
            <li><AiOutlineExclamationCircle size={20} /><Link to="/about">About Us</Link></li>
            <li><GoProjectRoadmap size={20} /><Link to="/projects">Projects</Link></li>
            <li><LiaHandHoldingHeartSolid size={20} /><Link to="/OurWork">Our Work</Link></li>
            <li><RiContactsLine size={20} /><Link to="/Contact">Contact US</Link></li>
            <li><Link to ="/donate">Donate Now</Link></li>
          </ul>
        </nav>}
      <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">< RiMenuFoldFill className="text-black h-8 w-8" /></button>
    </header>
  )
}

export default Navbar;
