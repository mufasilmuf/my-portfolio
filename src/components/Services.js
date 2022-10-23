import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';
import Title from './Title';

const Service = [
    {
        id: 1,
        image: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png",
        title: "Web Application Development",
        description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web user interface design authoring, including standardised code and proprietary software user experience design and search engine."
    },
    {
        id: 2,
        image: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png",
        title: "Responsive Web Development",
        description: "Developed a web application including responsive for mobile, tablets and desktop platforms, building cross-platform web apps, designing user experience and integrating novel mobile interfaces such as chat and voice."
    },
    {
        id: 3,
        image: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png",
        title: "Backend Development",
        description: "Developed a backend server using a Node.js, Express.js and build scalable server side with using MongoDB also Implement the login authentication using JSON web token."
    }
];

const Services = () => {
    const { serviceRef } = useContext(GlobalContext);

    return (
        <section className='px-5 lg:px-10 py-4 bg-gray-50' id='service' ref={serviceRef}>
            <h2 className='text-3xl text-center'>Services</h2>
            <Title name="What I Provide" />
            <div className='grid grid-cols-1 my-5 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                {Service.map((service) => (
                    <div className='bg-white shadow-md px-5 py-8 rounded-md' data-aos="zoom-in" key={service.id}>
                        <img className='m-auto' src={service.image} alt={service.title} />
                        <h3 className='py-2 font-semibold text-xl text-center'>{service.title}</h3>
                        <p className='text-lg'>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;