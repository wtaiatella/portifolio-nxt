import Image from 'next/image';
import { Container } from './styles';

export function Header() {
	return (
		<Container>
			<div className='image'>
				<Image
					src='/img/knowledge-image.png'
					alt='knowledge Image header'
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'left center',
					}}
					quality={100}
				/>
			</div>

			<div className='text'>
				<h1>knowledge</h1>
				<p>
					What I&apos;m{' '}
					<span className='text-highlight'>learning</span>
				</p>
			</div>
		</Container>
	);
}
