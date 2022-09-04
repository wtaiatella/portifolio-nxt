import { Container } from './styles';
import { SelfImage } from './SelfImage';

export function About() {
	return (
		<Container>
			<SelfImage />
			<div className='about-details'>
				<div className='about-title'>
					<img src='./assets/img/stripes.png' alt='' />
					<h2>About me...</h2>
				</div>

				<p>
					Enthusiastic about programming, I spent good part of my
					professional career programming equipment for the automation
					of power plant substations, but I always wanted something
					more. After I had contact with web development because of a
					personal project, I realized that this is the career I want
					to pursue going forward.
				</p>

				<p>
					Like every programmer, I&apos;m always looking for the best
					way to solve programming problems using the latest available
					tools. Considering this, I have been looking for courses
					that teach the development of modern solutions focusing on
					the most used frameworks in the market.
				</p>

				<p>
					I haven&apos;t had the opportunity to do any professional
					work at all, but below you can see some of pages I&apos;ve
					developed during my studies.
				</p>
			</div>
		</Container>
	);
}
