import type { MetadataRoute } from 'next';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
    return NAV_LINKS.map((link) => ({
        url: `${SITE_CONFIG.domain}${link.href}`,
        changeFrequency: 'monthly',
        priority: link.href === '/' ? 1.0 : 0.8,
    }));
}