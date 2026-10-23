import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';
import ChooseUsSection from '@/components/ChooseUsSection';
import ProcessSection from '@/components/ProcessSection';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    description: SITE_CONFIG.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section: Left-Right on desktop, Top-Bottom on mobile */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left Column: Headings & Call to Actions */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-700 uppercase bg-brand-50 rounded-full border border-brand-100">
                IT Consultancy & Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-900 tracking-tight leading-tight">
                Enthrallix IT Consultancy – Excellence in Digital Solution
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
                We provide expert IT consulting, software development, and system integration.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-lg text-white font-medium bg-brand-900 hover:bg-brand-700 transition"
                >
                  Start a Project
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 rounded-lg text-gray-700 font-medium bg-white border border-gray-300 hover:bg-gray-50 transition"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Column: Responsive Workspace Image with Shadow & Rounded Shape */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden bg-brand-50/50">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/hero-developer.jpg"
                    alt="Enthrallix Developer Workspace"
                    fill
                    className="object-cover object-center transform"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      {/* <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900">Core Capabilities</h2>
            <p className="text-gray-600 mt-2">Targeted software solutions built for performance and growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-xl border border-gray-200 bg-white hover:border-brand-600 transition duration-200 shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action
      <section className="py-16 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your technology stack?</h2>
          <p className="text-brand-100 max-w-xl mx-auto mb-8 text-sm">
            Partner with Enthrallix to build fast, scalable, and resilient digital products.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-medium bg-brand-accent text-brand-900 hover:bg-emerald-400 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}

      <ChooseUsSection />
      <ProcessSection />
    </>
  );
}