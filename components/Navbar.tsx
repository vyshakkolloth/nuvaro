"use client";
import { Facebook, Grid2X2, Instagram, Linkedin, Search, Youtube, Menu, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='max-w-[1440px] px-6 md:px-[104px] mx-auto pt-6 md:pt-10 absolute top-0 left-0 w-full z-50'>
            <div className="flex flex-row justify-between items-center">
                <div className="">
                    <Image
                        src="/Nuvaro_homes.png"
                        alt="Nuvaro Home"
                        width={182}
                        height={50}
                        priority
                        className="w-32 md:w-[182px] h-auto"
                    />
                </div>

                <div className="hidden md:flex items-center justify-center flex-row ">
                    <ul className='flex flex-row gap-6 lg:gap-10 items-center text-white font-semibold'>
                        <li className='cursor-pointer hover:text-gray-300 transition-colors'><Instagram size={20} /></li>
                        <li className='cursor-pointer hover:text-gray-300 transition-colors'><Facebook size={20} /></li>
                        <li className='cursor-pointer hover:text-gray-300 transition-colors'><Linkedin size={20} /></li>
                        <li className='cursor-pointer hover:text-gray-300 transition-colors'><Youtube size={20} /></li>
                        <li className='cursor-pointer hover:text-gray-300 transition-colors'><Search size={20} /></li>
                        <li className='cursor-pointer border-2 border-white rounded-full p-1 hover:bg-white hover:text-black transition-colors'><Grid2X2 size={20} /></li>
                    </ul>
                </div>

                <div className="md:hidden text-white z-50">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center md:hidden">
                    <ul className='flex flex-col gap-8 items-center text-white font-semibold text-xl'>
                        <li className='cursor-pointer hover:text-gray-300' onClick={() => setIsMenuOpen(false)}>Home</li>
                        <li className='cursor-pointer hover:text-gray-300' onClick={() => setIsMenuOpen(false)}>About</li>
                        <li className='cursor-pointer hover:text-gray-300' onClick={() => setIsMenuOpen(false)}>Projects</li>
                        <li className='cursor-pointer hover:text-gray-300' onClick={() => setIsMenuOpen(false)}>Contact</li>
                        <li className="flex gap-6 mt-8">
                            <Instagram />
                            <Facebook />
                            <Linkedin />
                            <Youtube />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar