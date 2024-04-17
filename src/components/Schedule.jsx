import React from 'react'
import { Link } from 'react-router-dom'

export default function Schedule() {
    return (
        <div className='w-full h-screen relative'>
            <Link to='/tracker' >
                <i className="ri-arrow-left-s-line font-bold p-1 bg-slate-100 rounded-md absolute top-[2%] left-[10%]"></i>
            </Link>
            <p className='text-2xl text-center font-semibold pt-[10px] pb-[3px]'>Workout Schedule</p>

            <div className='text-center text-slate-600'>
                <i className='ri-arrow-left-s-line ' />
                <span className='mx-2 text-[12px] font-semibold'>Feb 2024</span>
                <i className='ri-arrow-right-s-line ' />
            </div>

            <div className='dates w-full mt-2 mb-8 flex justify-evenly'>
                <div className='w-[18%] pb-[20px] pt-[5px] text-center rounded-lg'>
                    <p className='text-[10px]'>Sun</p>
                    <p className='mt-[-6px] text-3xl'>5</p>
                </div>
                <div className='w-[18%] pb-[20px] pt-[5px] text-center text-white bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] rounded-lg'>
                    <p className='text-[10px]'>Mon</p>
                    <p className='mt-[-6px] text-3xl'>6</p>
                </div>
                <div className='w-[18%] pb-[20px] pt-[5px] text-center rounded-lg'>
                    <p className='text-[10px]'>Tue</p>
                    <p className='mt-[-6px] text-3xl'>7</p>
                </div>
                <div className='w-[18%] pb-[20px] pt-[5px] text-center rounded-lg'>
                    <p className='text-[10px]'>Wed</p>
                    <p className='mt-[-6px] text-3xl'>8</p>
                </div>
                <div className='w-[18%] pb-[20px] pt-[5px] text-center rounded-lg'>
                    <p className='text-[10px]'>Thu</p>
                    <p className='mt-[-6px] text-3xl'>9</p>
                </div>
            </div>

            <span className='absolute top-[36%] right-[10%] text-[12px] px-2 text-white bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0] rounded-xl'>Ab Workout, 7:30am</span>
            <span className='absolute top-[45%] right-[29%] text-[12px] px-2 text-white bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0] rounded-xl'>Upperbody Workout, 9am</span>
            <span className='absolute top-[65%] right-[29%] text-[12px] px-2 bg-gray-100 rounded-xl'>Lowerbody Workout, 1pm</span>

            <div className='time&Line'>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>06:00 AM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>07:00 AM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>08:00 AM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>09:00 AM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>10:00 AM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>11:00 AM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>12:00 AM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>01:00 PM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>02:00 PM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>03:00 PM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>04:00 PM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>05:00 PM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>06:00 PM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>07:00 PM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>08:00 PM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
                <div>
                    <p className='mx-5 text-[12px] font-semibold'>09:00 PM</p>
                    <div className='my-2 w-full h-[0.5px] bg-slate-600 '></div>
                </div>
            </div>

            <div className='fixed bottom-[20%] right-[10%]'>
                <i className="ri-add-line text-3xl text-white p-4 bg-gradient-to-r from-[#E9B1E0] to-[#D3A5F2] rounded-full"></i>
            </div>

            <div className='h-[72px]' ></div>

            <div className='w-full flex justify-between text-3xl p-4 text-slate-600 bg-white fixed bottom-0'>
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
