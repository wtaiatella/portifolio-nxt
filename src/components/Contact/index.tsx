import { Form } from './Form';
import { Info } from './Info';
import { Container } from './styles';

export function Contact() {
	return (
		<Container>
			<h1>contact</h1>
			<div className='content'>
				<Form />
				<Info />
			</div>
		</Container>
	);
}
