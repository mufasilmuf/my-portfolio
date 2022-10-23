import React from "react";

const GlobalContext = React.createContext({
    scrollTo: () => { },
    scrollTopVisible: false,
    setScrollTopVisible: () => { },
    scrollToTop: () => { },
    activeButton: 'home',
    setActiveButton: () => { },
    homeRef: null,
    aboutRef: null,
    serviceRef: null,
    projectRef: null,
    contactRef: null,
    navToggle: false,
    setNavToggle: () => { }
})

export default GlobalContext;