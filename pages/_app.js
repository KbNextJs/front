import Head from 'next/head';
import '../globals.css';
// import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>kb</title>
                <link rel="shortcut icon" href={'../img_up/shop_pds/kbgoldenlife/etc/kbgoldenlife1487641368.ico'} />
            </Head>

            <Component {...pageProps} />
        </>
    );
};
export const metadata = {
    icons: {
        icon: '/_next/static/media/logo.ico',
        apple: ['@image/logo.ico'],
        shortcut: ['@image/logo.ico'],
    },
};

export default MyApp;
