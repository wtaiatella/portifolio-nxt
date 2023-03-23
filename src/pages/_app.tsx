import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { UserStorage } from '../contexts/UserContext';
import { ConfigProvider } from 'antd';

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
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: '#0ecece',
						},
					}}
				>
					<Component {...pageProps} />
				</ConfigProvider>
			</UserStorage>
		</>
	);
}

export default MyApp;
