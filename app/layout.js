'use client';
import React, { createContext, useContext } from 'react';
import '../globals.css';
import '../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import { atom, RecoilRoot } from 'recoil';
import Head from 'next/head';
export const headerPopupState = atom({
    key: 'headerPopupState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const mobileHeaderPopupState = atom({
    key: 'headerPopupState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export default function RootLayout({ children }) {
    return (
        <RecoilRoot>
            <html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>{children}</body>
            </html>
        </RecoilRoot>
    );
}
