import Image from 'next/image';
import { Container } from './styles';

export function Title({ children }) {
	return (
		<Container>
			<div className='image'>
				<Image
					src='/img/stripes.png'
					alt='stripes of title'
					width={96}
					height={101}
					quality={100}
					style={{
						objectFit: 'contain',
						objectPosition: 'center center',
					}}
				/>
			</div>
			<h2>{children}</h2>
		</Container>
	);
}
