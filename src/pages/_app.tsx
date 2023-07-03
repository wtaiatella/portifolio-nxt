import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { UserStorage } from '../contexts/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<UserStorage>
				<GlobalStyle />

				<Component {...pageProps} />
			</UserStorage>
		</>
	);
}

export default MyApp;
