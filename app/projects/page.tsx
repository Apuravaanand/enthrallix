import { Metadata } from 'next';
import { PROJECTS } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Showcase of selected digital projects and technical architectures built by Enthrallix.',
};

export default function ProjectsPage() {
    return (
        <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-brand-900 mb-4">Featured Work</h1>
            <p className="text-gray-600 mb-12 max-w-2xl">A selection of engineering projects focused on speed, stability, and scale.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm">
                        <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{project.category}</span>
                        <h2 className="text-2xl font-bold text-brand-900 mt-2 mb-3">{project.title}</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}