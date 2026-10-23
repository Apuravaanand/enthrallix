import Image from 'next/image';

export default function TestimonialSection() {
    return (
        <section className="py-20 md:py-28 bg-gray-50/50 overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-8 h-[2px] bg-brand-600"></span>
                        <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">
                            TESTIMONIALS
                        </span>
                        <span className="w-8 h-[2px] bg-brand-600"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight leading-tight">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-3">
                        Trusted by founders, executives, and growing enterprises worldwide.
                    </p>
                </div>

                {/* Testimonial Card Grid / Wrapper */}
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center">

                        {/* Client Image Column */}
                        <div className="md:col-span-5 relative h-72 md:h-full min-h-[300px] bg-gray-100">
                            <Image
                                src="/testimonial1.jpg"
                                alt="Client Testimonial"
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
                        </div>

                        {/* Testimonial Quote Content Column */}
                        <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                            <div>
                                <div className="text-brand-600 text-5xl font-serif leading-none mb-4">“</div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic mb-6">
                                    Enthrallix transformed our technical infrastructure completely. Their engineering expertise, attention to security compliance, and commitment to delivery timelines helped us scale our platform seamlessly. An incredible team to partner with!
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-brand-900">Jonathan Reynolds</h3>
                                <p className="text-xs sm:text-sm text-gray-500">CTO, GlobalTech Solutions</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}