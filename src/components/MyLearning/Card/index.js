import { CourseModal } from './CourseModal';
import { Container } from './styles';
import { useState } from 'react';

export function Card({ course }) {
	const { name, description, cardImg } = course;

	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};
	console.log('Montando cartão');
	console.log(course);

	return (
		<>
			<Container>
				<figure className='snip1477'>
					<img src={cardImg} alt={name} />
					<div className='title'>
						<div>
							<h2>{name}</h2>
						</div>
					</div>
					<figcaption>
						<p>{description}</p>
					</figcaption>
					<a onClick={handleOpenModal}></a>
				</figure>
				<CourseModal
					open={openModal}
					setOpen={() => setOpenModal()}
					course={course}
				/>
			</Container>
		</>
	);
}
