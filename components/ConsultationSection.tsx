import Link from 'next/link';

export default function ConsultationSection() {
    const stats = [
        {
            value: '10+',
            label: 'Expert IT Professionals on Our Team',
        },
        {
            value: '20+',
            label: 'Channel Partners',
        },
        {
            value: '99.99%+',
            label: 'Client Satisfaction Rate',
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Consultation Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

                    {/* Left Side: Copy */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-8 h-[2px] bg-brand-600"></span>
                            <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">
                                STRATEGIC GUIDANCE
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight leading-tight">
                            Take Advantage Of a Consultation
                        </h2>

                        <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                            <p>
                                Making the right technology decisions can be challenging, but you don’t have to do it alone. At Enthrallix, we offer expert consultations to help you analyze your current IT infrastructure, identify opportunities for improvement, and implement solutions that drive real results. Whether you need guidance on cloud migration, cybersecurity, digital transformation, or custom software development, our experienced consultants are here to provide clear, actionable insights tailored to your business needs.
                            </p>
                            <p>
                                A consultation with our team means more than just advice—it’s a chance to understand how technology can work for you. We take the time to listen to your challenges, assess your goals, and create a roadmap that aligns with your vision. Our hands-on approach ensures that every recommendation is not just theoretical but practical, helping you optimize operations, improve security, and maximize efficiency.
                            </p>
                            <p>
                                With years of industry expertise and deep technical knowledge, our consultants provide strategic guidance that empowers businesses to stay competitive, secure, and future-ready. Whether you’re a startup looking to build a strong IT foundation or an enterprise seeking advanced solutions, we provide the right expertise to help you make informed decisions with confidence.
                            </p>
                            <p>
                                The best part? Our consultations are focused on providing real value, not just generic solutions. We believe that every business is unique, and that’s why we tailor our recommendations to fit your specific needs, budget, and long-term goals. From identifying cost-saving opportunities to enhancing operational efficiency, our insights are designed to help you get the most out of your technology investments.
                            </p>
                            <p className="font-medium text-brand-900 pt-2">
                                Take the first step toward smarter IT solutions today. Book a consultation with Enthrallix and let us help you turn challenges into opportunities and ideas into reality.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-3.5 rounded-lg text-white font-medium bg-brand-900 hover:bg-brand-700 shadow-md hover:shadow-lg transition duration-200"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Key Highlights Box */}
                    <div className="lg:col-span-4 bg-gray-50 border border-gray-200/80 rounded-3xl p-8 sm:p-10 space-y-6 shadow-sm">
                        <h3 className="text-xl font-bold text-brand-900 border-b border-gray-200 pb-4">
                            Why Schedule a Call?
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-600 font-bold">✓</span>
                                <span>Tailored IT infrastructure &amp; cloud analysis</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-600 font-bold">✓</span>
                                <span>Practical security &amp; performance roadmap</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-600 font-bold">✓</span>
                                <span>Clear cost-saving &amp; efficiency opportunities</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-600 font-bold">✓</span>
                                <span>No generic advice—focused strictly on your goals</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Banner: Impact Statistics Grid */}
                <div className="bg-brand-900 rounded-3xl text-white p-8 sm:p-12 shadow-xl border border-brand-800">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-800">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="pt-6 md:pt-0 md:px-6 flex flex-col justify-center items-center">
                                <div className="text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-sm sm:text-base text-gray-300 font-medium max-w-xs">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}