"use client"
import React, { useState } from 'react';
import LanguageSelector from "@/components/layout/LanguageSelector";
import Link from "next/link";
import {useTranslations} from "next-intl";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("Common");

    const navLinks = [
        { href: '/', label: "Inici" },
        { href: '/about', label: 'La Colla' },
        { href: '/shows', label: 'Espectacles' },
        { href: '/news', label: 'Actualitat' },
        { href: '/media', label: 'Media' },
        { href: '/contact', label: 'Contacte' }
    ];

    return (
        <nav className="flex items-center justify-between p-4 bg-background-dark text-white bg-opacity-30">
            {/* Logo */}
            <div className="flex">
                <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            {/* Navigation Menu */}
            <div className={`flex-col md:flex-row md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex gap-2`}>
                {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="hover:text-gray-400">
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Language Switcher and Profile Avatar */}
            <div className="flex items-center space-x-4">
                <LanguageSelector />
                <Link href="/login" className="hover:text-gray-400">Login</Link>
                {/*<button type="button" className="flex items-center focus:outline-none"
                        aria-label="toggle profile dropdown">
                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                        <img
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            className="object-cover w-full h-full" alt="avatar"/>
                    </div>

                    <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                </button> */}
            </div>
        </nav>
    );
};

export default Navbar;