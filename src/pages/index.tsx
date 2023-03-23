import Head from 'next/head';
import { FrontScreen } from '../components/FrontScreen';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { MyLearning } from '../components/MyLearning';
import { Portifolio } from '../components/Portifolio';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Contact } from '../components/Contact';
import { Floating } from '../components/Floating';

export default function Home({ GITHUB_TOKEN }: { GITHUB_TOKEN: string }) {
	const { setGoogleToken } = useContext(UserContext);

	useEffect(() => {
		setGoogleToken(GITHUB_TOKEN);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [GITHUB_TOKEN]);

	return (
		<>
			<Head>
				<title>Wagner Elias Taiatella</title>
				<meta name='Portifolio' content='My personal protifolio' />
				<link rel='icon' href='/code-optimization.ico' />
			</Head>
			<FrontScreen />
			<Header />
			<About />
			<MyLearning />
			<Portifolio />
			<Contact />
			<Floating />
		</>
	);
}

export const getServerSideProps = async () => {
	const GITHUB_TOKEN: string = `${process.env.GITHUB_TOKEN}`;

	return {
		props: {
			GITHUB_TOKEN,
		},
	};
};
