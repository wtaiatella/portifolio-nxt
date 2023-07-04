import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
	grid-template-rows: 400px;
	position: relative;

	.image {
		position: relative;
		max-height: 80%;
	}
	.text {
		background: var(--color-back-dark);
	}

	.text-highlight {
		color: var(--color-text-orange);
	}

	h1 {
		font-family: 'Titillium Web', sans-serif;
		transform-origin: top left;
		transform: rotate(90deg);
		position: absolute;
		top: 30px;
		left: 100%;
		text-transform: uppercase;
		color: var(--color-text-title);
		font-size: 45px;
		letter-spacing: 10px;
	}

	p {
		font-family: 'Titillium Web', sans-serif;
		font-size: 50px;
		font-weight: 700;
		text-shadow: 1px 1px 1px black, 0 0 1em black, 0 0 0.2em black;
		letter-spacing: 5px;
		position: absolute;
		top: 30%;
		right: 18%;
		text-transform: uppercase;
		color: white;
		margin-left: 10%;
	}

	@media (max-width: 850px) {
		grid-template-columns: 75% 25%;
		grid-template-rows: 300px;
		h1 {
			top: 20px;
			font-size: 35px;
			letter-spacing: 7px;
		}
		p {
			font-size: 40px;
			letter-spacing: 4px;

			margin-left: 5%;
		}
	}

	@media (max-width: 600px) {
		grid-template-columns: 80% 20%;
		grid-template-rows: 250px;
		h1 {
			top: 12px;
			font-size: 33px;
			letter-spacing: 4px;
		}
		p {
			text-shadow: 1px 1px 1px black, 0 0 1em black, 0 0 0.2em black;
			font-size: 30px;
			letter-spacing: 4px;
			margin-left: 4%;
			right: 12%;
		}
	}
`;
