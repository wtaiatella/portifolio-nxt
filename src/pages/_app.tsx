import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { UserStorage } from '../contexts/UserContext';

const theme = {
	colors: {
		primary: '',
	},
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<UserStorage>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</UserStorage>
		</>
	);
}

export default MyApp;
