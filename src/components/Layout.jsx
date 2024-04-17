import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {

    let [time, setTime] = useState('')

    setInterval(function () {
        let date = new Date();
        // console.log(date.toLocaleTimeString());
        setTime(date.toLocaleTimeString())
    }, 1000)

    return (
        <div>
            <div className='w-[90%] m-auto h-[44px] flex justify-between items-center'>
                <div>{time}</div>
                <div className='flex gap-2'>
                    <i class="ri-base-station-line"></i>
                    <i class="ri-wifi-line"></i>
                    <i class="ri-battery-low-line"></i>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
