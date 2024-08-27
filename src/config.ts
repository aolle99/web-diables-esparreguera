import {Pathnames, LocalePrefix} from 'next-intl/routing';

export type Locale = (typeof locales)[number];
export const defaultLocale = 'ca' as const;
export const locales = ['ca', 'es', 'en'] as const;

export const pathnames = {
    '/': '/',
    '/pathnames': {
        ca: '/',
        es: '/pathnames',
        en: '/pathnames'
    }
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'as-needed';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`;