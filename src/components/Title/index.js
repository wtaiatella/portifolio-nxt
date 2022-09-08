import Image from 'next/image';
import { Container } from './styles';

export function Title({ children }) {
	return (
		<Container>
			<div className='image'>
				<Image
					src='/img/stripes.png'
					alt='stripes of title'
					layout='intrinsic'
					objectFit='contain'
					width={96}
					height={101}
					objectPosition='center center'
					quality={100}
				/>
			</div>
			<h2>{children}</h2>
		</Container>
	);
}
