import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent">
            <div className="container p-12 flex justify-between">
                <Link
                    href={"/"}
                    className="text-2xl md:text-5xl"
                >
                    <Image
                        width={70}
                        height={70}
                        src="/images/Logo.webp"
                        alt="Logo"
                    />
                </Link>
            </div>
        </footer>
    );
};

