import Modal from 'react-modal';
import { Container } from './styles';
import { course } from '../courses.json';
import { useState } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import file from '../README.md';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		maxWidth: '1300px',
		maxHeight: '700px',
		zIndex: '9999',

		transform: 'translate(-50%, -50%)',
	},
};
// Modal.setAppElement(document.getElementById('root'));

export function Card() {
	const { name, description } = course[0];
	console.log(course[0].name);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Container>
				<figure className='snip1477'>
					<img src='/img/logos/origamid logo.png' alt='sample38' />
					<div className='title'>
						<div>
							<h2>{name}</h2>
						</div>
					</div>
					<figcaption>
						<p>{description}</p>
					</figcaption>
					<a onClick={openModal}></a>
				</figure>
				<Modal
					isOpen={isModalOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel='Example Modal'
				>
					<ReactMarkdown
						// eslint-disable-next-line react/no-children-prop
						children={file}
					/>
				</Modal>
			</Container>
		</>
	);
}
