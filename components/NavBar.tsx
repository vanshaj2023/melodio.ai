import React from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='flex px-5 py-2 bg-black justify-between'>
            <div className='h-10 w-40 '>
                <Image src={logo} alt="logo" />
            </div>
            <div className='px-4 py-2.5 bg-green-500 rounded-full'>
                <button type="submit" className='text-black'>SignUp</button>
            </div>
        </div>
    )
}

export default NavBar
