import Modal from 'react-modal';
import { Container } from './styles';
import { useState } from 'react';

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
	.know-name {
			
	}
};
// Modal.setAppElement(document.getElementById('root'));

Modal.setAppElement('#__next');

export function CourseModal({ open, setOpen, course }) {
	console.log('modal do card');

	const { name, description, logoImg, techs, repo, date, pages, cert } =
		course;

	const handleModalCancel = () => {
		console.log('Close Course Modal');
		setOpen(false);
	};

	return (
		<>
			<Container>
				<Modal
					isOpen={open}
					onRequestClose={handleModalCancel}
					style={customStyles}
					contentLabel='Example Modal'
				>
					<div class='knowledg-grid'>
						<p class='know-name'>{name}</p>
						<p class='know-tech know-title'>
							Learned Technologies:
						</p>
						<p class='know-tech-cont know-cont'>
							HTML, UX/UI Basics, Wireframe, Adobe XD, CSS Basics,
							Responsive Basics, CSS Flexbox, CSS Grid
						</p>
						<p class='know-rep know-title'>Repository:</p>
						<ul class='know-rep-link'>
							<li>
								<a
									class='know-cont'
									href='https://github.com/wtaiatella/origamid'
									target='_blank'
									rel='noreferrer'
								>
									GitHub
								</a>
							</li>
						</ul>
						<p class='know-period know-title'>Period performed:</p>
						<p class='know-period-cont know-cont'>{date}</p>
						<p class='know-pages-title know-title'>
							pages performed during the program:
						</p>
						<div class='know-pages-cont'>
							<a
								href='https://html-css-js.wtaiatella.com.br/origamid/Web-Desing-Completo/bikcraft'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src='./assets/img/origamid-bikcraft.png'
									alt=''
								/>
							</a>
							<a
								href='https://html-css-js.wtaiatella.com.br/origamid/CSS-GridLayout/'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src='./assets/img/origamid-wildbeast.png'
									alt=''
								/>
							</a>
							<a
								href='https://html-css-js.wtaiatella.com.br/origamid/CSS-Flexbox/flexblog/'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src='./assets/img/origamid-flexblog.png'
									alt=''
								/>
							</a>
						</div>
						<p class='know-cert know-title'>Certification:</p>
						<div class='know-cert-link'>
							<a
								href='https://www.origamid.com/certificate/53b5ab97/'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src='./assets/img/origamid-webdesign-certification.png'
									alt=''
								/>
							</a>
						</div>
						<div class='know-bar'>
							<img src='/assets/img/block.png' alt='' />
						</div>
					</div>
				</Modal>
			</Container>
		</>
	);
}
