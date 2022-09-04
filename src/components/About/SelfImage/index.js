import Image from 'next/image';
import { Container } from './styles';

export function SelfImage() {
	return (
		<Container>
			<h1 className='about-name'>WAGNER TAIATELLA</h1>
			<div className='about-block'></div>
			<Image
				src='/img/WagnerTaiatella.png'
				alt='Wagner Elias Taiatella'
				layout='intrinsic'
				objectFit='cover'
				width={400}
				height={500}
				objectPosition='center center'
				quality={100}
			/>
		</Container>
	);
}
