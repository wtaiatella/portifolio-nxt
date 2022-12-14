import Image from 'next/image';
import { Container } from './styles';

export function SelfImage() {
	return (
		<Container>
			<h1 className='name'>WAGNER TAIATELLA</h1>
			<div className='block'></div>
			<div className='image'>
				<Image
					src='/img/WagnerTaiatella.png'
					alt='Wagner Elias Taiatella'
					layout='fill'
					objectFit='cover'
					objectPosition='center center'
					quality={100}
				/>
			</div>
		</Container>
	);
}
