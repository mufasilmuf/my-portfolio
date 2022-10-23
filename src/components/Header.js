import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import GlobalContext from '../context/GlobalContext';

const Header = () => {
    const { scrollTo, activeButton, navToggle, homeRef, scrollToTop, setNavToggle } = useContext(GlobalContext);

    return (
        <header id='home' ref={homeRef} className='py-4 px-5 lg:px-10 flex justify-between shadow-lg z-10 bg-white sticky top-0'>
            <h1 className='text-xl font-bold pt-1 italic cursor-pointer'>{'</'}Mohamed{'/>'}</h1>
            <p className='lg:hidden' onClick={() => { setNavToggle(!navToggle) }}><MenuIcon fontSize='large' /></p>
            <ul className='hidden bg-white lg:flex'>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'home' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('home'); scrollToTop() }}>Home</li>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'about' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('about') }}>About</li>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'service' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('service') }}>Services</li>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'project' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('project') }}>Projects</li>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'contact' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('contact') }}>Contact</li>
            </ul>
            {navToggle && <ul className='absolute right-10 top-16 bg-white p-5 rounded-md shadow-md align-middle flex-col lg:static lg:hidden lg:p-0 lg:shadow-none md:flex lg:flex-row'>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'home' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('home'); scrollToTop() }}>Home</li>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'about' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('about') }}>About</li>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'service' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('service') }}>Services</li>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'project' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('project') }}>Projects</li>
                <li className={`p-2 cursor-pointer rounded-md font-semibold hover:bg-blue-500 hover:text-white lg:ml-10 ${activeButton === 'contact' && 'bg-blue-500 text-white'}`} onClick={() => { scrollTo('contact') }}>Contact</li>
            </ul>}
        </header>
    )
}

export default Header;