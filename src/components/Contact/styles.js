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
		top: 280px;
		left: 0px;
		text-transform: uppercase;
		color: var(--color-text-title);
		font-size: 45px;
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

	@media (max-width: 850px) {
		h1 {
			top: 210px;
			left: 0px;
			font-size: 35px;
			letter-spacing: 7px;
		}
	}

	@media (max-width: 600px) {
		h1 {
			top: 200px;
			left: 0px;
			font-size: 33px;
			letter-spacing: 4px;
		}
		.content {
			max-width: 100%;
			margin: 0 50px 0 50px;
			padding: 3em 0;
		}
	}
`;
