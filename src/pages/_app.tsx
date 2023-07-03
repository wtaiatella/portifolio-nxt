import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { UserStorage } from '../contexts/UserContext';
import { createServer } from 'http';
import { createWebSocketServer } from '../utils/websocket';

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

const server = createServer((req, res) => {
	/* Lógica do servidor HTTP do Next.js */
});

createWebSocketServer(server);

export default MyApp;
