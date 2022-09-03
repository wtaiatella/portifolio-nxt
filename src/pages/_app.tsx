import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: '',
	},
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
