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

export default function RootLayout({ children }) {
    return (
        <RecoilRoot>
            <html lang="en">
                <Head>
                    <title>kbgoldenlifecare개발2일차</title>
                    <link rel="icon" href="./public/kbgoldenlife1487641368.ico" sizes="any" />
                </Head>
                <body>{children}</body>
            </html>
        </RecoilRoot>
    );
}
