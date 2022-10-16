import React, { useEffect, useRef, useState } from 'react';

import GlobalContext from './GlobalContext';

const ContextWrapper = ({ children }) => {

    const [scrollTopVisible, setScrollTopVisible] = useState(false);
    const [activeButton, setActiveButton] = useState('home');
    const [navToggle, setNavToggle] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setScrollTopVisible(true);
        }
        else if (scrolled <= 300) {
            setScrollTopVisible(false)
        }
    }

    const setToggleForNav = () => {
        const resized = document.documentElement.offsetWidth;
        if (resized >= 1024) {
            setNavToggle(true);
        }
        else {
            setNavToggle(false);
        }
    }

    window.addEventListener('scroll', toggleVisible);
    window.addEventListener('resize', setToggleForNav)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const aboutRef = useRef();
    const serviceRef = useRef();
    const projectRef = useRef();
    const contactRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setActiveButton(entry.target.id);
            }
        })
        observer.observe(aboutRef.current);
        observer.observe(serviceRef.current);
        observer.observe(projectRef.current);
        observer.observe(contactRef.current);
    }, [])

    return (
        <GlobalContext.Provider value={{
            scrollTo,
            scrollTopVisible,
            setScrollTopVisible,
            scrollToTop,
            activeButton,
            setActiveButton,
            aboutRef,
            serviceRef,
            projectRef,
            contactRef,
            navToggle,
            setNavToggle
        }}>{children}</GlobalContext.Provider>
    )
}

export default ContextWrapper;