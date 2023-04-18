import { Container } from './styles';
import Image from 'next/image';
import { projectProps } from '../../../services/types';

interface cardProps {
	project: projectProps;
}

export const Card: React.FC<cardProps> = ({ project }) => {
	const { name, type, imgUrl, techs, website, repo } = project;

	return (
		<>
			<Container>
				<figure className='snip1477'>
					<Image
						src={imgUrl}
						alt='Site Image'
						width={280}
						height={350}
					/>

					<figcaption>
						<h2>{name}</h2>
						<h3>{type}</h3>
						<div>
							{techs.length > 0
								? techs.map((tech) => (
										<span key={tech}>{tech}</span>
								  ))
								: null}
						</div>
						<div>
							<a href={website} target='_blank' rel='noreferrer'>
								SEE LIVE
							</a>
							<a href={repo} target='_blank' rel='noreferrer'>
								REPO
							</a>
						</div>
					</figcaption>
				</figure>
			</Container>
		</>
	);
};
