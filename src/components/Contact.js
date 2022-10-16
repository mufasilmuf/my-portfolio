import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import Title from './Title';

const Contact = () => {
    const { contactRef } = useContext(GlobalContext);

    return (
        <section className='px-5 lg:px-10 py-4 bg-gray-50' id='contact' ref={contactRef}>
            <h2 className='text-3xl text-center'>Contact</h2>
            <Title name="Connect with me" />
            <p className='text-xl py-2'>If you want to more about me or my work. pls contact me.</p>
            <form className='w-full lg:w-1/2'>
                <label className='text-lg font-semibold'>Name</label>
                <br />
                <input type="text" placeholder='Enter your name here' className='bg-gray-700 text-white p-2 rounded-md w-full my-2' />
                <br />
                <label className='text-lg font-semibold'>Email</label>
                <br />
                <input type="email" placeholder='Enter your email here' className='bg-gray-700 text-white p-2 rounded-md w-full my-2' />
                <br />
                <label className='text-lg font-semibold'>Message</label>
                <br />
                <textarea type="text" placeholder='Enter your message here' className='bg-gray-700 text-white p-2 rounded-md w-full my-2' />
                <br />
                <button className='bg-blue-600 text-white rounded-md px-3 mt-2 p-1'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;