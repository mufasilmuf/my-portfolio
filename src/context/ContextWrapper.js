import React, { useEffect, useRef, useState } from 'react';

import GlobalContext from './GlobalContext';

const ContextWrapper = ({ children }) => {

    const [scrollTopVisible, setScrollTopVisible] = useState(false);
    const [activeButton, setActiveButton] = useState('');
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

    window.addEventListener('scroll', toggleVisible);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveButton(id)
    }

    const homeRef = useRef();
    const aboutRef = useRef();
    const serviceRef = useRef();
    const projectRef = useRef();
    const contactRef = useRef();

    useEffect(() => {
        // const observer = new IntersectionObserver((entries) => {
        //     const entry = entries[0];
        //     if (entry.isIntersecting) {
        //         setActiveButton(entry.target.id);
        //     }
        // })
        // observer.observe(aboutRef.current);
        // observer.observe(serviceRef.current);
        // observer.observe(projectRef.current);
        // observer.observe(contactRef.current);
    }, [])

    return (
        <GlobalContext.Provider value={{
            scrollTo,
            scrollTopVisible,
            setScrollTopVisible,
            scrollToTop,
            activeButton,
            setActiveButton,
            homeRef,
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