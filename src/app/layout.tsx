import {ReactNode} from 'react';
import './globals.css';
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import type {Metadata} from "next";

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export const metadata: Metadata = {
    title: "Colla de Diables Esparreguera",
    description: "La Colla Infantil de Diables d'Esparreguera neix el maig del 2017 amb la finalitat de difondre i fomentar la cultura dels balls de diables i de la festa del foc",
};
export default async function RootLayout({children, params: {locale}}: Props) {
    const messages = await getMessages();
    return (
        <html lang={locale} className="dark">
        <NextIntlClientProvider messages={messages}>
            <body>{children}</body>
        </NextIntlClientProvider>
        </html>
    );
}