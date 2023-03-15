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
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'right botton',
					}}
					quality={100}
				/>
			</div>
		</Container>
	);
}
