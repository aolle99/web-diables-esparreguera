import createMiddleware from 'next-intl/middleware';
import {defaultLocale, localePrefix, locales} from "@/config";

export default createMiddleware({
    defaultLocale,
    locales,
    localePrefix,
});

export const config = {
    matcher: [
        // Aplica el middleware a la raíz y rutas con prefijo de locales (exceptuando las privadas)
        '/((?!login|dashboard|api|_next|.*\\..*).*)',
    ],
};
