export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>고객의 소리</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
