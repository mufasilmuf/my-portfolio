import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';
import Title from './Title';

const Service = [
    {
        id: 1,
        image: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png",
        title: "Web Application Development",
        description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design user interface design authoring, including standardised code and proprietary software user experience design and search engine."
    },
    {
        id: 2,
        image: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png",
        title: "Mobile Application Development",
        description: "We provide a range of mobile application development services including custom mobile development on Android platforms, building cross-platform apps, designing user experience and integrating novel mobile interfaces such as chat and voice."
    },
    {
        id: 3,
        image: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png",
        title: "Backend Development",
        description: "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience."
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
                    <div className='bg-white shadow-md px-5 py-8 rounded-md' key={service.id}>
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