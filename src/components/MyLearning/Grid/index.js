import { Container } from './styles';
import { Card } from '../Card';
import { useEffect, useState } from 'react';

export function Grid() {
	const [courses, setCourses] = useState('');

	useEffect(() => {
		console.log('importação de cursos');
		const readCourses = async () => {
			fetch('/coursesAbout/courses.json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data.courses);
					setCourses(data.courses);
				});
		};
		readCourses();
	}, []);
	return (
		<Container>
			{courses.length > 0
				? courses.map((course) => (
						<Card
							course={course}
							key={course.intitution + course.name}
						/>
				  ))
				: null}
		</Container>
	);
}
