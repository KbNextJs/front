import Head from 'next/head';
// import '../css/globals.css';
// import { RecoilRoot } from 'recoil';


const MyApp = ({Component, pageProps}) => {
	return (
	<>
		<Head>
			<title>kb</title>

		</Head>
		
			<Component {...pageProps}/>
		
	</>
	)
}
export const metadata = {
	icons: {
		icon:'/_next/static/media/logo.ico',
		apple: ['@image/logo.ico'],
		shortcut: ['@image/logo.ico'],
	},
}

export default MyApp;