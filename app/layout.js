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
    key: 'mobileHeaderPopupState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});
export default function RootLayout({ children }) {
    return (
        <RecoilRoot>
            <html lang="en">
                <head>
                    <title>KB골든라이프케어</title>
                </head>
                <body>{children}</body>
            </html>
        </RecoilRoot>
    );
}
