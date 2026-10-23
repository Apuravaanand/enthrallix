import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { SERVICES } from '@/lib/constants';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        id: service.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const service = SERVICES.find((s) => s.id === id);

    if (!service) return { title: 'Service Not Found' };

    return {
        title: `${service.title} | Services`,
        description: service.description,
    };
}

// Inner component to handle asynchronous parameter reading & UI layout
async function ServiceContent({ params }: PageProps) {
    const { id } = await params;
    const service = SERVICES.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 min-h-screen py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Navigation Link */}
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 uppercase tracking-widest hover:text-brand-800 transition-colors mb-8 group"
                >
                    <span className="transform group-hover:-translate-x-1 transition-transform duration-200">
                        &larr;
                    </span>
                    <span>Back to Services</span>
                </Link>

                {/* Main Hero Header Card */}
                <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-600 to-indigo-500" />

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 mb-4">
                        <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                        <span className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                            Enthrallix Expertise
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-900 mb-6 tracking-tight">
                        {service.title}
                    </h1>

                    <p className="text-gray-600 text-base sm:text-xl leading-relaxed text-justify">
                        {service.description}
                    </p>
                </div>

                {/* Key Deliverables & Engineering Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
                        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 font-bold mb-4">
                            01
                        </div>
                        <h3 className="text-lg font-bold text-brand-900 mb-2">High Performance</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Engineered for optimal response speed, scalability, and seamless integration with modern cloud architectures.
                        </p>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
                        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 font-bold mb-4">
                            02
                        </div>
                        <h3 className="text-lg font-bold text-brand-900 mb-2">Tailored Architecture</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Custom solutions designed around your specific business requirements, workflows, and growth roadmap.
                        </p>
                    </div>
                </div>

                {/* Call To Action Box */}
                <div className="bg-gradient-to-br from-brand-900 to-brand-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                            Interested in {service.title}?
                        </h2>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            Connect with our team to discuss how we can tailor this solution to your enterprise requirements.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="whitespace-nowrap px-8 py-4 bg-white text-brand-900 rounded-xl text-sm font-bold hover:bg-gray-100 shadow-md transition transform hover:-translate-y-0.5"
                    >
                        Get in Touch &rarr;
                    </Link>
                </div>

            </div>
        </div>
    );
}

// Root page wrapper with Suspense boundary
export default function ServiceDetailPage(props: PageProps) {
    return (
        <Suspense fallback={<div className="py-24 text-center text-gray-500">Loading service details...</div>}>
            <ServiceContent {...props} />
        </Suspense>
    );
}