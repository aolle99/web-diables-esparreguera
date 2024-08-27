"use client"
import React, {ChangeEvent, useEffect, useTransition} from 'react';
import {useLocale} from "next-intl";
import {useParams, useRouter} from "next/navigation";
import {Locale} from "@/config";

const languages = [
    { code: 'ca', name: 'Catalan', flag: '🇪🇸' },
    { code: 'es', name: 'Español', flag: '🇬🇧' },
    { code: 'en', name: 'English', flag: '🇫🇷' },
];

const LanguageSelector = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const {locale} = useParams();


    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value as Locale;

        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    }

    useEffect(() => {
        console.log(locale)
    }, [locale])

    return (
        <div className="flex items-center space-x-2">
            <select
                onChange={handleOnChange}
                className="px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                value={locale}
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;