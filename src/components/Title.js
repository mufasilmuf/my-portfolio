import React from 'react'

const Title = (props) => {
    const { name } = props;

    return (
        <div className='text-2xl text-blue-500 font-semibold'>{name}</div>
    )
}

export default Title