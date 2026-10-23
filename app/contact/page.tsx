import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with Enthrallix for custom software and web development inquiries.',
};

export default function ContactPage() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto my-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200/90 rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12 text-brand-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Left Column: Direct Contact Details & Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 mb-4">
                                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
                                <span className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                                    Let’s Connect
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-brand-900">
                                Let’s Build Something <span className="text-brand-600">Great Together!</span>
                            </h1>
                            <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                                Schedule your complimentary consultation—simple, fast, and hassle-free. Our technical team is ready to help you scale.
                            </p>
                        </div>

                        {/* Direct Contact Info Cards */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-brand-300 transition duration-200">
                                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</p>
                                    <p className="text-sm font-semibold text-brand-900">+91 9607859800</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-brand-300 transition duration-200">
                                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email</p>
                                    <p className="text-sm font-semibold text-brand-900">reachus@enthrallix.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-brand-300 transition duration-200">
                                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Location</p>
                                    <p className="text-sm font-semibold text-brand-900">Mumbai, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                                Follow on Social
                            </p>
                            <div className="flex items-center gap-3">
                                <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center text-brand-900 hover:bg-brand-900 hover:text-white transition duration-200">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" /></svg>
                                </a>
                                <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center text-brand-900 hover:bg-brand-900 hover:text-white transition duration-200">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center text-brand-900 hover:bg-brand-900 hover:text-white transition duration-200">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form Embed */}
                    <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
}