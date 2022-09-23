import Modal from 'react-modal';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { marked } from 'marked';
import { projectProps } from '../../../services/types';

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

interface cardProps {
	project: projectProps;
}

export const Card: React.FC<cardProps> = ({ project }) => {
	const { name, type, readme, imgUrl, techs } = project;

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [about, setAbout] = useState('');

	useEffect(() => {
		console.log('importação do arquivo md');
		console.log(readme);

		const readData = async () => {
			fetch(readme)
				.then((response) => {
					return response.text();
				})
				.then((text) => {
					setAbout(marked.parse(text));
				});
		};
		readData();
	}, [readme]);

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
					<img src={imgUrl} alt='sample38' />

					<figcaption>
						<h3>{name}</h3>
						<h2>{type}</h2>
						{techs.length > 0
							? techs.map((tech) => <p key={tech}>tech</p>)
							: null}
						<p>React</p>
						<p>Typescript</p>
						<p>Github API</p>
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
						children={about}
					/>
				</Modal>
			</Container>
		</>
	);
};
