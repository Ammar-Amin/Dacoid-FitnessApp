import React from 'react'
import { Link } from 'react-router-dom'

export default function Schedule() {
    return (
        <div className='w-full h-screen relative'>
            <i className="ri-arrow-left-s-line font-bold p-1 bg-slate-100 rounded-md absolute top-[6%] left-[10%]"></i>
            <p className='text-2xl text-center font-semibold py-[38px]'>Workout Schedule</p>


            <div className='w-full flex justify-between text-3xl p-4 text-slate-600 fixed bottom-0'>
                <div className='w-[30%] ml-[10px] flex justify-between'>
                    <Link to='/tracker'>
                        <i className="ri-home-2-line"></i>
                    </Link>
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
