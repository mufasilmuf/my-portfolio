import React from 'react';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import Title from './Title';

const Project = [
    {
        id: 1,
        image: "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
        title: "Google Calender Clone",
        description: "Create a google calender clone using React and designed with tailwind CSS.",
        url: "https://sweet-cobbler-e630dd.netlify.app/"
    },
    {
        id: 2,
        image: "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
        title: "Recipe Web Application",
        description: "Developed a recipe web application using Next.js and Strapi.",
        url: "https://my-blog-seven-phi.vercel.app/"
    },
    {
        id: 3,
        image: "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
        title: "Mshop",
        description: "E-commerce website is developed using MERN stack and implemented a login functionality using JSON web token.",
        url: "https://meshopm.herokuapp.com/"
    },
];

const Projects = () => {
    const { projectRef } = useContext(GlobalContext);

    return (
        <section className='px-5 lg:px-10 py-4' id='project' ref={projectRef}>
            <h2 className='text-3xl text-center'>Projects</h2>
            <Title name="What I Build" />
            <div className='grid grid-cols-1 my-5 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                {Project.map((project) => (
                    <div className='shadow-md rounded-md'
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                        key={project.id}>
                        <img className='rounded-t-md' src={project.image} alt={project.title} />
                        <div className='p-5'>
                            <h4 className='py-2 font-semibold text-xl'>{project.title}</h4>
                            <p className='text-lg'>{project.description}</p>
                            <a href={project.url}> <button className='bg-blue-600 text-white rounded-sm px-3 mt-2 p-1'>Know more</button></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;