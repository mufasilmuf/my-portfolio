import React from 'react';
import { LinkedIn, GitHub, Twitter, Mail } from '@mui/icons-material';

import MyResume from '../assets/Resume.pdf';

const externalImage = 'https://res.cloudinary.com/dirosugvb/image/upload/v1663173479/banner_esz1n9.png';

const Banner = () => {
    return (
        <section style={{
            backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '620px',
        }} className="flex px-5 lg:px-10">
            <div className='w-full text-center lg:w-1/2 m-auto lg:text-left'>
                <h1 className='text-5xl font-bold pb-5'>Hi I am Mohamed Mufasil Mufeeth</h1>
                <h1 className='text-4xl font-semibold text-blue-600 pb-5'>Software Engineer at Byju's</h1>
                <p className='text-xl pb-5'>I am a Fullstack Developer | Frontend Developer</p>
                <section className='pb-5'>
                    <a href='https://www.linkedin.com/in/mohamed-mufasil-mufeeth-364b54202/'><LinkedIn fontSize={'large'} className="mr-3" /></a>
                    <a href='https://github.com/mufasilmuf'><GitHub fontSize={'large'} className="mr-3" /></a>
                    <a href='https://twitter.com/'><Twitter fontSize={'large'} className="mr-3" /></a>
                    <a href='mailto:mufasilmuf@gmail.com'><Mail fontSize={'large'} /></a>
                </section>
                <a href={MyResume} download='Resume.pdf' className='bg-blue-600 text-white px-4 py-2 text-xl rounded-lg'>Resume</a>
            </div>
            <div className='hidden lg:flex w-1/2'>
                <img src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg" alt='banner' />
            </div>
        </section>
    )
}

export default Banner;