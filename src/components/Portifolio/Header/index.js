import Image from 'next/image';
import { Container } from './styles';

export function Header() {
	return (
		<Container>
			<div className='text'>
				<h1>portifolio</h1>
				<p>
					some <span className='text-highlight'>pages</span> that
					I&apos;ve done
				</p>
			</div>
			<div className='image'>
				<Image
					src='/img/portifolio-image.png'
					alt='Portifolio Image header'
					quality={100}
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'left center',
					}}
				/>
			</div>
		</Container>
	);
}
