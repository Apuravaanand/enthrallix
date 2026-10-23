'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const faqs = [
        {
            question: 'How can I get started with Enthrallix?',
            answer: 'Getting started is simple. Reach out to us via our contact form or WhatsApp, and our engineering team will schedule an initial consultation to discuss your project requirements, scope, and objectives.',
        },
        {
            question: "Is my data secure with Enthrallix's solutions?",
            answer: 'Yes. We implement robust, industry-standard cybersecurity protocols, end-to-end encryption, and compliance-driven frameworks to ensure your enterprise data remains completely secure and protected.',
        },
        {
            question: 'Do you offer cloud migration and management services?',
            answer: 'We specialize in modern cloud infrastructure setup, seamless migration from legacy systems to cloud environments, and continuous monitoring and optimization across AWS, Azure, and Google Cloud.',
        },
        {
            question: 'What industries do you serve?',
            answer: 'We serve a diverse range of industries including fintech, healthcare, e-commerce, logistics, edtech, and SaaS startups, delivering tailored digital solutions designed for high scalability.',
        },
        {
            question: 'Do you provide customized software solutions?',
            answer: 'Every solution we build is tailored from the ground up to align with your specific operational workflow, tech stack preferences, and long-term business goals.',
        },
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Title & Detailed Description */}
                    <div className="lg:col-span-6 space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-8 h-[2px] bg-brand-600"></span>
                                <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">
                                    FAQ
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight leading-tight">
                                Frequently Asked Questions (FAQs)
                            </h2>
                        </div>

                        <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
                            <p>
                                At Enthrallix IT Consultancy and Services Pvt Ltd, we value clarity, transparency, and seamless customer experience. We understand that choosing the right IT partner for your business can involve many questions. To make the process easier, we&apos;ve compiled answers to some of the most commonly asked questions about our services, expertise, and approach.
                            </p>
                            <p>
                                Whether you&apos;re looking for <span className="font-semibold text-brand-900">custom software development, cloud solutions, cybersecurity, AI-driven automation, or IT consulting</span>, we have the expertise to provide <span className="font-semibold text-brand-900">tailored, future-ready solutions</span> that align with your business goals.
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500 pt-2">
                                If you don&apos;t find the information you&apos;re looking for here, feel free to{' '}
                                <Link href="/contact" className="text-brand-600 font-semibold hover:underline">
                                    contact us anytime
                                </Link>{' '}
                                — our experts are always ready to assist you!
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Accordion List with Smooth Transitions */}
                    <div className="lg:col-span-6 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-brand-600 bg-gray-50 shadow-sm' : 'border-gray-200/80 bg-gray-50/80 hover:border-gray-300'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`text-brand-600 text-xs transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''
                                                    }`}
                                            >
                                                ▶
                                            </span>
                                            <span className="text-sm sm:text-base font-bold text-brand-900 group-hover:text-brand-600 transition-colors">
                                                {faq.question}
                                            </span>
                                        </div>
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 pb-5 px-5' : 'max-h-0 opacity-0 px-5'
                                            }`}
                                    >
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 pt-3">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}