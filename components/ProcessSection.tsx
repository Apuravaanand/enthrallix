import Image from 'next/image';

export default function ProcessSection() {
    const steps = [
        {
            number: '01',
            title: 'Research & Investigate Projects',
            description: 'We carefully study your needs to find the best solutions.',
            image: '/process-img1.jpg',
        },
        {
            number: '02',
            title: 'Develop Plans',
            description: 'We create clear and effective strategies to achieve your goals.',
            image: '/process-img2.jpg',
        },
        {
            number: '03',
            title: 'Testing Policies',
            description: 'We thoroughly test every detail to ensure quality and reliability.',
            image: '/process-img3.jpg',
        },
        {
            number: '04',
            title: 'Launch Projects',
            description: 'We deliver and implement solutions smoothly for your success.',
            image: '/process-img4.jpg',
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Section Header */}
                <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="w-8 h-[2px] bg-brand-600"></span>
                    <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">
                        OUR PROCESS
                    </span>
                    <span className="w-8 h-[2px] bg-brand-600"></span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight leading-tight mb-3">
                    Flowless Process We Follow
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-16">
                    Our Step-by-Step Process to Deliver Flawless and Reliable Solutions.
                </p>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center relative group">

                            {/* Circular Image Container with Badge */}
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 bg-gray-100">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition duration-500"
                                />

                                {/* Step Number Badge */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border-2 border-white">
                                    {step.number}
                                </div>
                            </div>

                            {/* Step Content */}
                            <h3 className="text-lg font-bold text-brand-900 mb-2">{step.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xs">
                                {step.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}