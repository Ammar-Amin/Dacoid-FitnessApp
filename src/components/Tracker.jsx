import React from 'react'
import { Link } from 'react-router-dom'
import upper from '../assets/proj-img/upperBody.jpg'
import lower from '../assets/proj-img/lowerBody.avif'
import full from '../assets/proj-img/fullBody.jpg'
import graph from '../assets/proj-img/graph.png'

export default function Tracker() {
    return (
        <div className='w-full h-screen relative'>
            <i className="ri-arrow-left-s-line font-bold p-1 bg-slate-100 rounded-md absolute top-[6%] left-[10%]"></i>
            <p className='text-2xl text-center font-semibold pt-[38px] pb-[20px]'>Workout Tracker</p>


            <div className='w-[90%] m-auto'>
                <Link to='/schedule' >
                    <img src={graph} alt='img'
                        className='mb-4 w-full h-[90px] object-cover'
                    />
                </Link>

                <div className='flex p-2 bg-gradient-to-r from-[#dbe3ff] to-white rounded-lg'>
                    <i className="ri-alert-line text-2xl mt-1 mr-2 text-[#8099FF]"></i>
                    <div className='text-[14px]'>
                        <p>You've burned fewer calories than</p>
                        <p className='mt-[-4px]'>yesterday. Time to get moving!</p>
                    </div>
                </div>

                <div className='flex justify-between items-center my-3'>
                    <p className='font-semibold'>Upcoming Workout</p>
                    <span className='text-[13px] text-blue-400'>See more</span>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='h-[75px] px-4 flex justify-between items-center shadow-lg rounded-lg border-[1px] border-slate-200'>
                        <img src={full} alt='Image'
                            className='w-[50px] h-[50px] object-cover rounded-full' />
                        <div className='text-[13px] ml-[-30px] mb-3'>
                            <p>Upper Body Workout</p>
                            <p className='text-[11px] text-slate-400 mt-1'>Today 8am</p>
                        </div>

                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>

                    </div>

                    <div className='h-[75px] px-4 flex justify-between items-center shadow-lg rounded-lg border-[1px] border-slate-200'>
                        <img src={lower} alt='Image'
                            className='w-[50px] h-[50px] object-cover rounded-full' />
                        <div className='text-[13px] ml-[-30px] mb-3'>
                            <p>Lower Body Workout</p>
                            <p className='text-[11px] text-slate-400 mt-1'>4 Feb, 3:30pm</p>
                        </div>

                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>

                    </div>
                </div>

                <p className='my-3 font-semibold'>What Do You Want to Train</p>

                <div className='flex justify-between items-center bg-[#8CB1FF99] rounded-lg z-[-1]'>
                    <div className='m-4'>
                        <p className='text-[13px] mb-1'>Full Body Workout</p>
                        <div className='text-[10px] flex flex-col gap-[3px]'>
                            <p>Arms</p>
                            <p>Chest</p>
                            <p>Back</p>
                            <p>Shoulder</p>
                            <p>Legs</p>
                        </div>
                    </div>

                    <img className='w-[100px] h-[100px] m-4 object-cover rounded-full' src={upper} alt='Image' />
                </div>

            </div>

            <div className='h-[72px]' ></div>

            <div className='w-full flex justify-between text-3xl p-4 text-slate-600 bg-white fixed bottom-0'>
                <div className='w-[30%] ml-[10px] flex justify-between'>
                    <i className="ri-home-2-line"></i>
                    <i className="ri-nodejs-fill"></i>
                </div>


                <div className='w-[30%] mr-[10px] flex justify-between'>
                    <i className="ri-camera-line"></i>
                    <i className="ri-user-3-line"></i>
                </div>
            </div>

            <div className='fixed bottom-[8%] left-[42%]'>
                <i className="ri-search-line text-3xl text-white p-4 bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] rounded-full"></i>
            </div>

        </div >
    )
}
