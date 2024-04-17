import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
    return (
        <div>
            <p className='text-xl font-bold m-5 pb-4'>Welcome Back</p>
            <div className='w-[90%] m-auto relative'>
                <form>
                    <div className='flex flex-col gap-4'>
                        <input type='email' placeholder='Email' className='px-4 py-2 bg-gray-100 border-none outline-none rounded-lg' />
                        <input type='password' placeholder='Password' className='px-4 py-2 bg-gray-100 border-none outline-none rounded-lg' />
                    </div>

                    <span className='mt-[10px] ml-3 text-[1.8vh] text-slate-600 underline'>Forgot your password?</span>


                    <div className='w-full absolute top-[300%]'>
                        <input type='submit' value='Sign In' className='w-full p-2 text-center text-white bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] font-bold rounded-lg' />

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
