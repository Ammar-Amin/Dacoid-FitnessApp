import React from 'react'
import { Link } from 'react-router-dom'

export default function Goals() {
    return (
        <div className='w-full h-screen relative'>
            <p className='text-2xl text-center font-semibold py-9'>What are your goals?</p>
            <div className='w-[90%] m-auto'>
                <form>
                    <div className='flex flex-col gap-4'>
                        <div className='px-4 py-3 font-semibold bg-gray-100 rounded-lg flex justify-between items-center'>
                            <span className='ml-1 text-[1.8vh] text-slate-600'>Weight Loss</span>
                            <input type='checkbox' className='w-4 h-4' />
                        </div>
                        <div className='px-4 py-3 font-semibold bg-gray-100 rounded-lg flex justify-between items-center'>
                            <span className='ml-1 text-[1.8vh] text-slate-600'>Muscle Gain</span>
                            <input type='checkbox' className='w-4 h-4' />
                        </div>
                        <div className='px-4 py-3 font-semibold bg-gray-100 rounded-lg flex justify-between items-center'>
                            <span className='ml-1 text-[1.8vh] text-slate-600'>Flexibility and Mobility</span>
                            <input type='checkbox' className='w-4 h-4' />
                        </div>
                        <div className='px-4 py-3 font-semibold bg-gray-100 rounded-lg flex justify-between items-center'>
                            <span className='ml-1 text-[1.8vh] text-slate-600'>General Fitness</span>
                            <input type='checkbox' className='w-4 h-4' />
                        </div>
                        <div className='px-4 py-3 font-semibold bg-gray-100 rounded-lg flex justify-between items-center'>
                            <span className='ml-1 text-[1.8vh] text-slate-600'>Event - specific training</span>
                            <input type='checkbox' className='w-4 h-4' />
                        </div>
                        <div className='px-4 py-3 font-semibold bg-gray-100 rounded-lg flex justify-between items-center'>
                            <span className='ml-1 text-[1.8vh] text-slate-600'>Mindfulness and Mental Health</span>
                            <input type='checkbox' className='w-4 h-4' />
                        </div>
                    </div>

                    <div className='w-[90%] absolute bottom-[8%]'>
                        <Link to='/tracker'>
                            <input type='submit' value='Confirm' className='w-full p-2 text-center text-white bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] font-bold rounded-lg' />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
