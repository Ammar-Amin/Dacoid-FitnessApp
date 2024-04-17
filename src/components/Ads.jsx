import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/proj-img/img1.jpg'


export default function Ads() {
    return (
        <div>
            <Link to='/signup' >
                <p className='text-blue-400 underline text-end m-4'>
                    Skip
                </p>
            </Link>
            <div className='w-[80%] m-auto'>
                <img src={img1} alt="image.png" />
            </div>

            <h1 className='m-5 text-xl font-bold' >Track Your Goal</h1>
            <p className='m-5'>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>

            <div className='absolute right-[10%] bottom-[10%]'>
                <Link to='/ad2' >
                    <i class="ri-arrow-right-s-line p-4 text-2xl font-bold text-white bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] rounded-full"></i>
                </Link>
            </div>

        </div>
    )
}
