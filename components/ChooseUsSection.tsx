import Image from 'next/image';
import Link from 'next/link';

export default function ChooseUsSection() {
    return (
        <section className="py-20 md:py-28 bg-[#f4f6f8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Overlapping Collage Layout */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-[480px] sm:h-[540px]">

                            {/* Image 1: Circular image on the top-left */}
                            <div className="absolute top-0 left-0 w-44 sm:w-56 h-44 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                                <Image
                                    src="/about-img1.jpg"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Image 2: Vertical rounded card in the center-right */}
                            <div className="absolute top-8 right-4 sm:right-12 w-48 sm:w-60 h-64 sm:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-xl z-0">
                                <Image
                                    src="/about-img2.jpg"
                                    alt="Professional working"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Dark Testimonial/Quote Card on the bottom-left */}
                            <div className="absolute bottom-0 left-0 w-64 sm:w-72 bg-brand-900 text-white p-6 rounded-2xl shadow-2xl z-20">
                                <div className="text-brand-accent text-3xl font-serif mb-2">“</div>
                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                                    Our team is committed to delivering reliable and innovative solutions tailored to your needs. Whether you are a startup or an established company, we are here to support your journey with the right technology.
                                </p>
                                <Link
                                    href="/about"
                                    className="inline-block px-4 py-2 text-xs font-semibold text-brand-900 bg-brand-accent rounded-lg hover:bg-emerald-400 transition"
                                >
                                    LEARN MORE
                                </Link>
                            </div>

                            {/* Image 4: Small circular overlapping image at the bottom center-right */}
                            <div className="absolute bottom-12 right-12 sm:right-24 w-28 sm:w-36 h-28 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg z-30">
                                <Image
                                    src="/about-img4.jpg"
                                    alt="Meeting discussion"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Heading & Value Proposition Feature Boxes */}
                    <div className="lg:col-span-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-8 h-[2px] bg-brand-600"></span>
                            <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">
                                INTRODUCTION
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight leading-tight mb-4">
                            Choose Us To Enhance Your Organization
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                            Enthrallix IT Consultancy & Services offers simple and effective technology solutions for businesses. We specialize in IT consulting, software development, and system integration to help you work smarter and grow faster.
                        </p>

                        {/* Feature Box 1: Cybersecurity & Compliance */}
                        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-xs mb-4 hover:border-brand-600 transition">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-50 text-brand-600 rounded-xl shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-brand-900 mb-1">Cybersecurity & Compliance</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        We deliver advanced security solutions to safeguard businesses from cyber threats and data breaches. Our compliance-driven approach ensures regulatory adherence, risk management, and a secure digital infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Box 2: Industry Certified & Trusted */}
                        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:border-brand-600 transition">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-50 text-brand-accent rounded-xl shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-brand-900 mb-1">Industry Certified & Trusted</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        We uphold the highest industry standards, delivering reliable and compliant IT solutions. Our expertise ensures businesses receive trusted, secure, and efficient technology services.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}