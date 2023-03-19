import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';

export function FrontScreen() {
	return (
		<Container>
			<p className='intro-title'>Hey there!</p>
			<h1 className='intro-title'>I&apos;m Wagner Taiatella</h1>
			<h2 className='intro-highlight'>Front End Web Developer</h2>
			<h3 className='intro-focus'>focus on learning</h3>
			<a href='#portifolio' className='intro-btn'>
				KNOW MY WORK
			</a>
			<Image
				alt='Mountains'
				src='/img/header-image.png'
				fill
				style={{
					objectFit: 'cover',
					objectPosition: 'right botton',
				}}
				quality={100}
			/>
		</Container>
	);
}
