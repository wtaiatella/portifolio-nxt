import { CourseModal } from './CourseModal';
import { Container } from './styles';
import { useState } from 'react';
import Image from 'next/image';

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
					<Image src={cardImg} alt={name} width={280} height={350} />
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
