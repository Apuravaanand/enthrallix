import { MetadataRoute } from 'next';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return NAV_LINKS.map((link) => ({
        url: `${SITE_CONFIG.domain}${link.href}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: link.href === '/' ? 1.0 : 0.8,
    }));
}