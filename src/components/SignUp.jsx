import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div>
            <p className='text-xl font-bold m-5 pb-4'>Create an account</p>
            <div className='w-[90%] m-auto relative'>
                <form>
                    <div className='flex flex-col gap-4'>
                        <input type='text' placeholder='First Name' className='px-4 py-2 bg-gray-100 border-none outline-none rounded-lg' />
                        <input type='text' placeholder='Last Name' className='px-4 py-2 bg-gray-100 border-none outline-none rounded-lg' />
                        <input type='email' placeholder='Email' className='px-4 py-2 bg-gray-100 border-none outline-none rounded-lg' />
                        <input type='password' placeholder='Password' className='px-4 py-2 bg-gray-100 border-none outline-none rounded-lg' />
                    </div>

                    <div className='my-5 flex items-center'>
                        <input type='checkbox' className='w-4 h-4' />
                        <span className='ml-1 text-[1.8vh] text-slate-600'>By prodeeding, I agree to all <span className='text-blue-400 underline' underline>T&C</span> and <span className='text-blue-400 underline'>Privacy Policy</span></span>
                    </div>

                    <div className='w-full absolute bottom-[-120%]'>
                        <input type='submit' value='Create an Account' className='w-full p-2 text-center text-white bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] font-bold rounded-lg' />

                        <div className='flex justify-center items-center'>
                            <div className='w-[50%] h-[1px] bg-slate-400 mt-1'></div>
                            <p className='text-center text-[14px] m-4'>or</p>
                            <div className='w-[50%] h-[1px] bg-slate-400 mt-1'></div>
                        </div>

                        <div className='flex justify-center mb-5'>
                            <i class="ri-google-fill mx-2 px-3 py-2 text-blue-500 border border-black rounded-lg"></i>
                            <i class="ri-facebook-fill mx-2 px-3 py-2 text-green-600 border border-black rounded-lg"></i>
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
