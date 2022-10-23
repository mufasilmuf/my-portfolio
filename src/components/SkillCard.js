import React from 'react';

const SkillCard = (props) => {
    const { name, image } = props.data;

    return (
        <div data-aos="fade-up" className='bg-gray-50 rounded-lg p-4 flex'>
            <img src={image} alt={name} className='w-12 h-12 bg-transparent' />
            <span className='text-xl font-mono pl-4 mt-2 break-words'>{name}</span>
        </div>
    )
}

export default SkillCard;