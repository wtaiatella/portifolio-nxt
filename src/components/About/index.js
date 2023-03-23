import { Container } from './styles';
import { SelfImage } from './SelfImage';
import { Title } from '../Title';

export function About() {
	return (
		<Container>
			<SelfImage />
			<div className='about-details'>
				<Title>About me</Title>

				<p>
					Enthusiastic about technologies, I spent good part of my
					professional career programming equipment for the automation
					of power plant substations, but I always wanted something
					more. After I had contact with web development because of a
					personal project, I realized that this is what I wanted to
					do from now on.
				</p>

				<p>
					Knowing this, as a self-taught person with a lot of
					resilience, I became interested in the world of web
					development and in my spare time, with great help from
					Google and Developer Communities, I learned Javascript,
					React and Nextjs.
				</p>

				<p>
					It&apos;s been two years since I started studying
					programming always learning new techniques to become a
					better programmer and to help me combine these technologies.
				</p>

				<p>
					Throughout my studies I developed several test pages and
					gathered here in this portfolio the ones I consider most
					important. Hope you like!!
				</p>
			</div>
		</Container>
	);
}
