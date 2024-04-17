import React from 'react'
import { Link } from 'react-router-dom'
import img2 from '../assets/proj-img/img2.jpg'

export default function Ads2() {
    return (
        <div>
            <Link to='/signup' >
                <p className='text-blue-400 underline text-end m-4'>
                    Skip
                </p>
            </Link>
            <div className='w-[83%] m-auto'>
                <img src={img2} alt="image.png" />
            </div>

            <h1 className='m-5 text-xl font-bold' >Get Burn</h1>
            <p className='m-5'>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>

            <div className='absolute right-[10%] bottom-[10%]'>
                <Link to='/signup' >
                    <i className="ri-arrow-right-s-line p-4 text-2xl font-bold text-white bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] rounded-full"></i>
                </Link>
            </div>

        </div>
    )
}
