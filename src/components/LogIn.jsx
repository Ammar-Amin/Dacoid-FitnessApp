import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LogIn() {

    let [info, setInfo] = useState({
        email: '',
        password: ''
    })

    let navigate = useNavigate()

    function handleChange(e) {
        let { name, value } = e.target;
        // console.log(name, value)
        setInfo({ ...info, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(localStorage.getItem('details'))
        let details = JSON.parse(localStorage.getItem('details'))
        console.log(details.email, details.password)
        if (info.email !== details.email) {
            alert("Email doesn't match the previous email")
        } else if (info.password !== details.password) {
            alert("Password doesn't match the previous password")
        } else {
            navigate('/goal')
        }

    }

    return (
        <div>
            <p className='text-xl font-semibold m-3 pb-4'>Welcome Back</p>
            <div className='w-[90%] m-auto relative'>
                <form onSubmit={handleSubmit} >
                    <div className='flex flex-col gap-4'>
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            className='px-4 py-2 bg-gray-100 border-none outline-none rounded-lg'
                            value={info.email}
                            onChange={handleChange}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            className='px-4 py-2 bg-gray-100 border-none outline-none rounded-lg'
                            value={info.password}
                            onChange={handleChange}
                        />
                    </div>

                    <span className='mt-[10px] ml-3 text-[1.8vh] text-slate-600 underline'>Forgot your password?</span>


                    <div className='w-full absolute top-[280%]'>
                        {/* <Link to='/goal'> */}
                        <input type='submit' value='Sign In' className='w-full p-2 text-center text-white bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] font-bold rounded-lg' />
                        {/* </Link> */}

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
                            Don't have an account yet? <Link to='/signup'>
                                <span className='text-blue-400 underline'>Create an account</span>
                            </Link>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
