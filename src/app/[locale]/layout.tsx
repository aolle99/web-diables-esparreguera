import "@/app/globals.css"
import React from "react";
import Navbar from "@/components/layout/public/navbar";
import Footer from "@/components/layout/public/footer";
import {locales} from "@/config";

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}


export default function HomeLayout({
                                       children,

                                   }: Readonly<{
    children: React.ReactNode;


}>) {


    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main className="min-h-screen w-full">
                {children}
            </main>
            <Footer/>
        </>
    );
}
