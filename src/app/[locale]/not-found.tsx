"use client"
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import {getTranslations} from "next-intl/server";
import {usePathname} from "@/navigation";
import {useTranslations} from "next-intl";

export default function NotFound() {
    const pathname = usePathname()
    console.log(pathname)
    if(pathname.includes('en') || pathname.includes('es')) {
        const t = useTranslations('404');
        return (
            <main className="flex h-full flex-col items-center justify-center gap-2">
                <FaceFrownIcon className="w-10 text-gray-400" />
                <h2 className="text-xl font-semibold">{t('title')}</h2>
                <p>{t('message')}</p>
                <Link
                    href="/"
                    className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                >
                    {t('goHome')}
                </Link>
            </main>
        );
    }
    else {
        return (
            <main className="flex h-full flex-col items-center justify-center gap-2">
                <FaceFrownIcon className="w-10 text-gray-400" />
                <h2 className="text-xl font-semibold">Pàgina no trobada</h2>
                <p>La pàgina que busques no existeix.</p>
                <Link
                    href="/"
                    className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                >
                    Torna a la pàgina d'inici
                </Link>
            </main>
        );
    }

}