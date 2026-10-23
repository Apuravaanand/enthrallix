'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Integration point: Replace timeout with your Formspree/Web3Forms/Formcarry endpoint POST call if needed
            await new Promise((resolve) => setTimeout(resolve, 600));
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                <h3 className="text-lg font-semibold mb-1">Message Sent Successfully</h3>
                <p className="text-sm">Thank you for getting in touch with Enthrallix. We will respond shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition"
                    placeholder="Enter Your Name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition"
                    placeholder="Enter Your E-mail"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Inquiry
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition"
                    placeholder="Tell us about your project or technical goals..."
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 px-6 text-white font-medium bg-brand-900 rounded-lg hover:bg-brand-700 disabled:opacity-50 transition-colors"
            >
                {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
            </button>
        </form>
    );
}