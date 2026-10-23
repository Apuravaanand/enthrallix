import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { SERVICES } from '@/lib/constants';
import FaqSection from '@/components/FaqSection';
import TestimonialSection from '@/components/TestimonialSection';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Explore the full spectrum of software engineering services provided by Enthrallix.',
};

export default function ServicesPage() {
    return (
        <div className="bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 min-h-screen">

            {/* Header Hero Banner */}
            <div className="pt-16 pb-12 md:pt-24 md:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/60 mb-4">
                    <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
                    <span className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                        Enterprise Solutions
                    </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight mb-4">
                    High-Performance Digital Services
                </h1>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Scalable, secure, and lightning-fast engineering solutions custom-built to accelerate your business growth.
                </p>
            </div>

            {/* Service Cards Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-2xl hover:border-brand-600/40 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer overflow-hidden"
                        >
                            {/* Top gradient glow on hover */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-600 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 transform origin-left" />

                            <div>
                                {/* Icon Badge & Index Number */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 font-bold text-lg group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
                                        0{index + 1}
                                    </div>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
                                        Enthrallix Core
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed text-justify mb-6 line-clamp-3">
                                    {service.description}
                                </p>
                            </div>

                            {/* Card Footer / CTA */}
                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-xs font-bold tracking-wider uppercase text-brand-600 group-hover:text-brand-700">
                                    Explore Service
                                </span>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-900 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-200">
                                    &rarr;
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <Suspense fallback={<div className="py-10 text-center text-gray-400">Loading FAQs...</div>}>
                <FaqSection />
            </Suspense>

            {/* Testimonials Section */}
            <Suspense fallback={<div className="py-10 text-center text-gray-400">Loading Testimonials...</div>}>
                <TestimonialSection />
            </Suspense>

        </div>
    );
}