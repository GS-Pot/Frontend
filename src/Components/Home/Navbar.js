import React from 'react'
import logo from '../../Assets/navlogo.svg'
// import Link from 'react-router-dom'
function Navbar() {
    return (
        <div className=' fixed w-[98vw] flex align-center justify-center z-20' >
            <nav className="flex items-center justify-between flex-wrap p-6 bg-[#57AC49] m-2 rounded-sm w-[98vw]">
                <img src={logo} alt="logo" />

                <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8">
                    <a href={'/'} className="font-semibold text-xl tracking-tight">Home</a>
                    <a href={'/'} className="font-semibold text-xl tracking-tight">Home</a>
                    <a href={'/'} className="font-semibold text-xl tracking-tight">Home</a>
                    <a href={'/'} className="font-semibold text-xl tracking-tight">Home</a>
                </div>
                <div className="flex items-between  gap-2 text-white mr-6">
                    <button className="inline-block text-sm px-4 py-2 leading-none  rounded text-white  hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</button>
                    <button className="inline-block text-sm px-4 py-2 leading-none border bg-white rounded text-[#57AC49] hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Signup</button>
                </div>
            </nav>


        </div>
    )
}

export default Navbar