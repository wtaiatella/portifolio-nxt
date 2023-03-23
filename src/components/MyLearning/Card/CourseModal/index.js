import { Modal, Button } from 'antd';
import styles from './styles.module.css';

export function CourseModal({ open, setOpen, course }) {
	console.log('modal do card');

	const { name, institution, logoImg, techs, repos, date, pages, cert } =
		course;

	const handleModalClose = () => {
		console.log('Close Course Modal');
		setOpen(false);
	};

	const styleModal = {
		top: '15%',
	};
	return (
		<>
			<Modal
				closable
				title={'Course Details'}
				open={open}
				centered
				onCancel={handleModalClose}
				footer={[
					<Button key='ok' type='primary' onClick={handleModalClose}>
						OK
					</Button>,
				]}
				style={styleModal}
			>
				<div>
					<a
						className={styles.courseHeader}
						href={institution.address}
						target='_blank'
						rel='noreferrer'
					>
						<img
							width={100}
							height={100}
							src={institution.img}
							alt='imagem'
						/>
						<h1 className={styles.courseInstitution}>
							{institution.name}
						</h1>
					</a>

					<div className={styles.aboutTitle}>
						<img src='./img/stripes.png' alt='' />
						<h2>{name}</h2>
					</div>

					<div className={styles.field}>
						<p className={styles.fieldTitle}>
							Learned Technologies:
						</p>
						<ul>
							{techs.map((tech) => (
								<li key={tech}>{tech}</li>
							))}
						</ul>
					</div>

					{repos ? (
						<>
							<div className={styles.field}>
								<p className={styles.fieldTitle}>Repository:</p>
								<ul>
									{repos.map((repo) => (
										<li key={repo.address + repo.name}>
											<a
												href={repo.address}
												target='_blank'
												rel='noreferrer'
											>
												{repo.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</>
					) : null}

					<div className={styles.field}>
						<p className={styles.fieldTitle}>Period performed:</p>
						<p>{date}</p>
					</div>

					{pages ? (
						<>
							<p className={styles.fieldTitle}>
								Pages performed during the program:
							</p>
							<ul className={styles.fieldImages}>
								{pages.map((page) => (
									<li key={page.address + page.img}>
										<a
											href={page.address}
											target='_blank'
											rel='noreferrer'
										>
											<img
												width={150}
												height={150}
												src={page.img}
												alt='imagem'
											/>
										</a>
									</li>
								))}
							</ul>
						</>
					) : null}
					<p className={styles.fieldTitle}>Certification:</p>
					<div className={styles.fieldImages}>
						<a href={cert.address} target='_blank' rel='noreferrer'>
							<img
								width={300}
								height={167}
								src={cert.img}
								alt='imagem'
							/>
						</a>
					</div>
				</div>
			</Modal>
		</>
	);
}
