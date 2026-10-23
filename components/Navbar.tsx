'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo wrapped properly in Link */}
                <Link href="/" className="flex items-center gap-2 focus:outline-none">
                    <Image
                        src="/enthrallix_logo.png"
                        alt={`${SITE_CONFIG.name} Logo`}
                        width={130}
                        height={38}
                        className="h-8 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-brand-600 ${isActive ? 'text-brand-600 font-semibold' : 'text-gray-600'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        className="px-4 py-2 text-sm font-medium text-white bg-brand-900 rounded-lg hover:bg-brand-700 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-600 hover:text-brand-900 focus:outline-none rounded-lg"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown with High Z-Index & Absolute Positioning */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg px-4 pt-4 pb-6 space-y-3 z-50">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-brand-900 rounded-lg hover:bg-brand-700 transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}