import styled from 'styled-components';

export const Container = styled.section`
	display: grid;
	grid-template-columns: minmax(400px, 1fr) 1.5fr;
	position: relative;
	margin: 0 auto;
	padding: 50px 2%;
	border: 1px solid;

	.about-details {
		/* margin-top: 50px; */
		width: 100%;
		/* padding-right: 80px; */
	}

	.about-details p {
		font-size: 1.2em;
		color: var(--color-back-dark-light);
	}

	.about-details p {
		margin-top: 30px;
	}

	@media (max-width: 850px) {
		display: flex;
		flex-direction: column;

		.about-details {
			margin-top: 30px;
			width: 100%;
			padding: 0 30px;
		}
	}
`;
