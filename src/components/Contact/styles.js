import styled from 'styled-components';

export const Container = styled.section`
	background: var(--color-back-dark);
	position: relative;

	h1 {
		font-family: 'Titillium Web', sans-serif;
		transform-origin: top left;
		transform: rotate(270deg);
		text-align: center;
		position: absolute;
		top: 350px;
		left: 0px;
		text-transform: uppercase;
		color: var(--color-text-title);
		font-size: 50px;
		letter-spacing: 10px;
	}

	.content {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		max-width: 80%;
		margin: 0 auto;
		padding: 3em 0;
	}

	@media (max-width: 1200px) {
		.content {
			grid-template-columns: 1fr;
		}
	}
`;
