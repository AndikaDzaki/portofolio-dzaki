"use client"; 

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className='w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50 transition-all duration-300'>
            <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
                
                {/* BAGIAN LOGO */}
                <Link href="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    Andika Dzaki
                </Link>

                {/* DESKTOP MENU: Tersembunyi di mobile (hidden), muncul di layar medium ke atas (md:flex) */}
                <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link 
                                href={link.href} 
                                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* MOBILE MENU BUTTON (HAMBURGER): Muncul di mobile, tersembunyi di desktop (md:hidden) */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none transition-colors"
                >
                    {isOpen ? (
                        // Icon Silang (X) ketika menu terbuka
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Icon Hamburger (Garis 3) ketika menu tertutup
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </div>

            {/* MOBILE MENU DROPDOWN: Akan dirender jika state isOpen bernilai true */}
            <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col px-6 space-y-4 font-medium text-gray-600 text-lg">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} // Tutup menu otomatis setelah di-klik
                                className="block w-full hover:text-blue-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;