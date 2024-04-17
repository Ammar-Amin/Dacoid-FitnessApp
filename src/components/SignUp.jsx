import React, { useState } from 'react'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'

export default function SignUp() {
    let [details, setDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })

    let [checked, setChecked] = useState(false)

    let navigate = useNavigate();

    function handleChange(e) {
        let { name, value } = e.target;
        // console.log(name, value);
        setDetails({
            ...details,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (details.firstname === '') {
            alert('Please enter your first name');
        } else
            if (details.lastname === '') {
                alert('Please enter your last name');
            } else
                if (details.email && details.password === '') {
                    alert('Somethings missing eather email OR password ');
                } else
                    if (checked == false) {
                        alert('Check the box to proceed farther');
                    } else
                        if (details.firstname && details.lastname && details.email && details.password && checked) {
                            localStorage.setItem('details', JSON.stringify(details))
                            console.log(details)
                            navigate('/login')
                        }
    }

    return (
        <div>
            <p className='text-xl font-semibold m-3 pb-4'>Create an account</p>
            <div className='w-[90%] m-auto relative'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <input
                            type='text'
                            placeholder='First Name'
                            className='px-4 py-[7px] bg-gray-100 border-none outline-none rounded-lg'
                            name='firstname'
                            value={details.firstname}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            placeholder='Last Name'
                            className='px-4 py-[7px] bg-gray-100 border-none outline-none rounded-lg'
                            name='lastname'
                            value={details.lastname}
                            onChange={handleChange}
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            className='px-4 py-[7px] bg-gray-100 border-none outline-none rounded-lg'
                            name='email'
                            value={details.email}
                            onChange={handleChange}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            className='px-4 py-[7px] bg-gray-100 border-none outline-none rounded-lg'
                            name='password'
                            value={details.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='my-4 flex items-center'>
                        <input type='checkbox' className='w-4 h-4' checked={checked} onChange={() => setChecked(!checked)} />
                        <span className='ml-1 text-[11px] text-slate-600'>By prodeeding, I agree to all <span className='text-blue-400 underline'>T&C</span> and <span className='text-blue-400 underline'>Privacy Policy</span></span>
                    </div>

                    <div className='w-full absolute bottom-[-120%]'>
                        <input
                            type='submit'
                            value='Create an Account'
                            className='w-full p-2 text-center text-white bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] font-bold rounded-lg'
                        />

                        <div className='flex justify-center items-center'>
                            <div className='w-[50%] h-[1px] bg-slate-400 mt-1'></div>
                            <p className='text-center text-[14px] m-4'>or</p>
                            <div className='w-[50%] h-[1px] bg-slate-400 mt-1'></div>
                        </div>

                        <div className='flex justify-center mb-5'>
                            <i className="ri-google-fill mx-2 px-3 py-2 text-blue-500 border border-black rounded-lg"></i>
                            <i className="ri-facebook-fill mx-2 px-3 py-2 text-green-600 border border-black rounded-lg"></i>
                        </div>

                        <div className='text-[2vh] text-center'>
                            Already have an account? <Link to='/login'>
                                <span className='text-blue-400 underline'>Login</span>
                            </Link>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
