import React, { useContext } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GlobalContext from '../context/GlobalContext';

const ScrollButton = () => {
    const { scrollToTop } = useContext(GlobalContext);

    return (
        <button className='bg-blue-500 text-white shadow-lg rounded-md fixed bottom-10 right-5 lg:right-10' onClick={scrollToTop}>
            <KeyboardArrowUpIcon fontSize={'large'} />
        </button>
    )
}

export default ScrollButton;