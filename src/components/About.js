import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

import SkillCard from './SkillCard';
import Title from "./Title";

const Skills = [
    {
        id: 1,
        name: "HTML",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        id: 2,
        name: "CSS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    },
    {
        id: 3,
        name: "Javascript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        id: 4,
        name: "Typescript",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
    },
    {
        id: 5,
        name: "React",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    },
    {
        id: 6,
        name: "Next",
        image: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
    },
    {
        id: 7,
        name: "Jquery",
        image: "https://www.pngitem.com/pimgs/m/206-2069866_transparent-css3-logo-png-jquery-logo-png-png.png"
    },
    {
        id: 8,
        name: "Node",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
    },
    {
        id: 9,
        name: "Express",
        image: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
    },
    {
        id: 10,
        name: "Strapi",
        image: "https://camo.githubusercontent.com/d19ee7d0ca9d29c17995529d0181d925843e564cb97b37db6c35521bb08ac578/68747470733a2f2f696d616765732e6f70656e636f6c6c6563746976652e636f6d2f7374726170692f336563333234372f6c6f676f2f3235362e706e67"
    },
    {
        id: 11,
        name: "MongoDB",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
    },
    {
        id: 12,
        name: "MySQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
    },
    {
        id: 13,
        name: "Postgres SQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
    },
    {
        id: 14,
        name: "Apollo GraphQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
    },
    {
        id: 15,
        name: "Java",
        image: "https://cdn.iconscout.com/icon/free/png-256/java-59-1174952.png"
    },
    {
        id: 16,
        name: "Php",
        image: "https://www.pngfind.com/pngs/m/146-1466902_php-logo-png-transparent-php-logo-png-png.png"
    },
    {
        id: 17,
        name: "Bootstrap",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
    },
    {
        id: 18,
        name: "SASS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
    },
    {
        id: 19,
        name: "Tailwind",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
    },
    {
        id: 20,
        name: "Git",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
    },
    {
        id: 21,
        name: "Netlify",
        image: "https://cdn.iconscout.com/icon/free/png-64/netlify-3628357-3032192.png"
    },
    {
        id: 22,
        name: "Heroku",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
    }
]

const About = () => {
    const { aboutRef } = useContext(GlobalContext);

    return (
        <section className='px-5 lg:px-10 py-4' id='about' ref={aboutRef}>
            <Title name="About Me" />
            <p className='text-lg pb-5'>
                My name is Mohamed Mufasil Mufeeth and I am a software engineer specialized in fullstack developing.
                I started web development in a strong knowledge and expertise in this field over time.
                I want this page to be a "not-so-formal" description of who I am,
                my main skills and why I think I am a great software engineer and why you should hire me.
                For a more formal introduction, you can download my résumé.
            </p>
            <Title name="Technologies and Tools" />
            <p className='text-lg pb-5'>
                Using a combination of cutting-edge technologies and reliable open-source software I build user-focused,
                performance and responsive websites for smartphones, tablets, and desktops.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {Skills.map((skill) => (
                    <SkillCard data={skill} key={skill.id} />
                ))}
            </div>
        </section>
    )
}

export default About;