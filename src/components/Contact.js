import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import GlobalContext from '../context/GlobalContext';
import Title from './Title';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { contactRef } = useContext(GlobalContext);
    const [submitData, setSubmitData] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const regex = {
        name: /^[a-zA-Z]+$/,
        email: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    }

    const formSubmit = async (data) => {
        axios({
            method: 'post',
            url: 'https://mshopbackend.herokuapp.com/api/protfolio-form',
            data: data
        })
            .then((res) => {
                setSubmitData(true)
                setFormStatus(res.data)
            })
            .catch((err) => {
                setSubmitData(true)
                setFormStatus(err.response.data)
            })

        reset({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <section className='px-5 lg:px-10 py-4 bg-gray-50' id='contact' ref={contactRef}>
            <h2 className='text-3xl text-center'>Contact</h2>
            <Title name="Connect with me" />
            <p className='text-xl py-2'>If you want to more about me or my work. pls contact me.</p>
            {!submitData ? <form className='w-full lg:w-1/2' onSubmit={handleSubmit(formSubmit)}>
                <label className='text-lg font-semibold'>Name</label>
                <br />
                <input
                    type="text"
                    name='name'
                    placeholder='Enter your name here'
                    className='bg-gray-700 text-white p-2 rounded-md w-full my-2'
                    {...register('name', {
                        required: 'Name is required.',
                    })}
                />
                <p className='text-red-700'>{errors.name?.message}</p>
                <br />
                <label className='text-lg font-semibold'>Email</label>
                <br />
                <input
                    type="email"
                    name='email'
                    placeholder='Enter your email here'
                    className='bg-gray-700 text-white p-2 rounded-md w-full my-2'
                    {...register('email', {
                        required: 'Email is required.',
                        pattern: {
                            value: regex.email,
                            message: "Email is not valid."
                        }
                    })}
                />
                <p className='text-red-700'>{errors.email?.message}</p>
                <br />
                <label className='text-lg font-semibold'>Message</label>
                <br />
                <textarea
                    type="text"
                    name='message'
                    placeholder='Enter your message here'
                    className='bg-gray-700 text-white p-2 rounded-md w-full my-2'
                    {...register("message", {
                        required: "Message is required.",
                        minLength: {
                            value: 15,
                            message: "Message must be greater then 15 character."
                        }
                    })}
                />
                <p className='text-red-700'>{errors.message?.message}</p>
                <br />
                <button type={'submit'} className='bg-blue-600 text-white rounded-md px-3 mt-2 p-1'>Submit</button>
            </form>
                : <div className='p-5 shadow-md rounded-md w-full lg:w-1/2'>
                    <p className={`text-center text-xl font-semibold ${formStatus.status ? 'text-green-600' : 'text-red-600'}`}>{formStatus.message}</p>
                    <p></p>
                </div>}
        </section>
    )
}

export default Contact;