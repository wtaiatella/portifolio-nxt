import { Container } from './styles';
import { SelfImage } from './SelfImage';
import { Title } from '../Title';

export function About() {
	return (
		<Container id='about'>
			<SelfImage />
			<div className='about-details'>
				<Title>About me</Title>

				<p>
					During my professional career I worked as a substation
					automation programmer building robust solutions that would
					guarantee the safety of the electrical power system
					operation. At that time I developed control logics,
					performed tests on them and configured ethernet network
					architectures.
				</p>

				<p>
					But some years ago I had the opportunity to learn a little
					about web development due a personal project and I loved it
					very much. After this, as a self-taught person with a lot of
					resilience, I became interested in the world of web
					development and in my spare time, with great help from
					Google and Developer Communities, I learned some important
					concepts about HTML, CSS, Javascript, Node, React, Nextjs,
					responsive web pages, APIs, Git an GitHub and React
					Components
				</p>

				<p>
					Since then, I always search for new techniques to become a
					better programmer and to help me combine these technologies.
				</p>

				<p>
					Throughout my studies I developed several pages and gathered
					here in this portfolio the ones I consider most important.
					Hope you like!!
				</p>
			</div>
		</Container>
	);
}
