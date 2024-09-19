import Script from 'next/script';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>강동 케어센터 소개</title>
                {/* <Script type="text/javascript" src="../img_up/_addon/jquery/1.11.3/jquery.min.js"></Script> */}
                {/* <Script src="./jquery.js" strategy="beforeInteractive"></Script> */}
            </head>
            <body>{children}</body>
        </html>
    );
}
