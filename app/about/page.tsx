import Image from 'next/image';
import ConsultationSection from '@/components/ConsultationSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Enthrallix, our technical vision, and our engineering philosophy.',
};

export default function AboutPage() {
    return (
        <div className="bg-white py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight mb-4">
                        About Enthrallix
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        Enthrallix was founded on a strict technical philosophy: digital products should be exceptionally fast, maintainable, and built with uncompromising engineering integrity.
                    </p>
                </div>

                {/* Alternating Sections Container */}
                <div className="space-y-16 md:space-y-24">

                    {/* 1. Empowering Businesses Section (Odd - Image Right: about1) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
                                Empowering Businesses with Smart IT Solutions
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                At Enthrallix, we believe that technology is the foundation of modern business success. In today’s fast-paced digital world, companies need innovative, secure, and scalable solutions to stay competitive. That’s where we come in. We specialize in tailored IT consulting, software development, cloud solutions, cybersecurity, and digital transformation to help businesses streamline their operations and achieve long-term success.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                Our team of highly skilled professionals works closely with clients to create technology strategies that align with their business goals and unlock new opportunities for growth.
                            </p>
                        </div>
                        <div className="lg:col-span-5 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                            <Image
                                src="/about1.jpg"
                                alt="Empowering Businesses with Smart IT Solutions"
                                fill
                                className="object-cover object-center hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>

                    {/* 2. Client-First Approach Section (Even - Image Left: about2) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-5 lg:order-1 order-2 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                            <Image
                                src="/about2.jpg"
                                alt="A Team That Puts Your Business First"
                                fill
                                className="object-cover object-center hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="lg:col-span-7 lg:order-2 order-1 space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
                                A Team That Puts Your Business First
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                We know that every business is unique, and one-size-fits-all solutions don’t work. That’s why we take a client-first approach, ensuring that every service we provide is tailored to your specific needs.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                Our team of IT experts is passionate about solving complex challenges, whether it’s developing custom software, securing business data, or implementing advanced cloud infrastructure. We listen, strategize, and implement solutions that don’t just meet expectations but exceed them. At Enthrallix, we don’t just deliver technology—we deliver value.
                            </p>
                        </div>
                    </div>

                    {/* 3. Future-Ready Technology Section (Odd - Image Right: about3) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
                                Future-Ready Technology, Today
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                Technology is always evolving, and businesses must keep up to stay ahead. At Enthrallix, we don’t just keep up with trends—we anticipate them. Our expertise spans across AI, machine learning, DevOps, big data, and enterprise IT infrastructure, ensuring that your business is always equipped with the latest advancements.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                Whether you need automation solutions to improve efficiency or cloud migration services to enhance scalability, we provide future-proof solutions that help businesses thrive in an ever-changing digital landscape.
                            </p>
                        </div>
                        <div className="lg:col-span-5 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                            <Image
                                src="/about3.jpg"
                                alt="Future-Ready Technology, Today"
                                fill
                                className="object-cover object-center hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>

                    {/* 4. Security & Reliability Section (Even - Image Left: about4) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-5 lg:order-1 order-2 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                            <Image
                                src="/about4.jpg"
                                alt="Security & Reliability You Can Trust"
                                fill
                                className="object-cover object-center hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="lg:col-span-7 lg:order-2 order-1 space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
                                Security &amp; Reliability You Can Trust
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                In a world where cyber threats and data breaches are becoming more common, protecting your business is our priority. We provide comprehensive cybersecurity solutions, risk management strategies, and compliance consulting to keep your data safe.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                Our security-first approach ensures that businesses remain protected from cyber threats while maintaining operational efficiency. We don’t just implement security measures; we create a culture of resilience and trust, ensuring your business runs smoothly with minimal risks.
                            </p>
                        </div>
                    </div>

                    {/* 5. Growth & Mission Section (Odd - Image Right: about5) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
                                Your Growth, Our Mission
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                At Enthrallix, our mission is simple—to empower businesses with smart technology solutions that drive growth and efficiency. We are committed to delivering innovation, ensuring reliability, and building long-lasting partnerships with our clients.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                From startups to large enterprises, we help businesses of all sizes navigate the digital landscape with confidence. Let’s work together to transform your business, enhance productivity, and achieve success in the digital era.
                            </p>
                        </div>
                        <div className="lg:col-span-5 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                            <Image
                                src="/about5.jpg"
                                alt="Your Growth, Our Mission"
                                fill
                                className="object-cover object-center hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>

                </div>

            </div>

            {/* Consultation Section */}
            <div className="mt-20 md:mt-28">
                <ConsultationSection />
            </div>
        </div>
    );
}