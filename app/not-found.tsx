import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="py-32 text-center max-w-md mx-auto px-4">
            <h1 className="text-6xl font-extrabold text-brand-900 mb-4">404</h1>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 text-sm mb-6">The page you are looking for does not exist or has been moved.</p>
            <Link
                href="/"
                className="inline-block px-6 py-2.5 text-sm font-medium text-white bg-brand-900 rounded-lg hover:bg-brand-700 transition"
            >
                Return Home
            </Link>
        </div>
    );
}