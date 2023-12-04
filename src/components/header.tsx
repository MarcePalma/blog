"use client"

import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { UserContext } from '@/context/UserContext'


const navLinks = [
    {
        title: 'About',
        path: '#about',
    },
    {
        title: 'Projects',
        path: '#projects',
    },
    {
        title: 'Contact',
        path: '#contact',
    }
]
export default function Header() {

    const { user } = useContext(UserContext);
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={"/"}
                    className="text-2xl md:text-5xl text-white font-semibold"
                >
                    <Image
                        width={70}
                        height={70}
                        src="/images/Logo.webp"
                        alt="Logo"
                    />
                </Link>
                <section className='flex gap-4'>
                    {!user.token ? (
                        <>
                            <Link href="/auth/login">
                                <button
                                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                                >
                                    Login
                                </button>
                            </Link>
                            <Link href="/auth/registrarse">
                                <button
                                    className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75"
                                >
                                    Register
                                </button>
                            </Link>
                        </>
                    ) : (
                        <p className='text-white'>Bienvenido, {user.nombre}!</p>
                    )}
                </section>
            </div>
        </nav>
    )
}