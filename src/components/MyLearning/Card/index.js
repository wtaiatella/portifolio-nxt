import Modal from 'react-modal';
import { Container } from './styles';
import { course } from '../courses.json';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import file from '../README.md';
import { marked } from 'marked';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		maxWidth: '1000px',
		maxHeight: '700px',
		zIndex: '9999',

		transform: 'translate(-50%, -50%)',
	},
};
// Modal.setAppElement(document.getElementById('root'));

Modal.setAppElement('#__next');

export function Card() {
	const { name, description, about } = course[0];
	console.log(course[0].name);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [readMe, setReadMe] = useState('');

	useEffect(() => {
		console.log('importação do arquivo md');
		const readData = async () => {
			// const dataRead = await import(about);
			// setReadMe(dataRead);
			//const readmePath = require('../');

			fetch('../README.md')
				.then((response) => {
					return response.text();
				})
				.then((text) => {
					setReadMe(marked.parse(text));
				});
		};
		readData();
	}, [about]);

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
						children={readMe}
					/>
				</Modal>
			</Container>
		</>
	);
}
