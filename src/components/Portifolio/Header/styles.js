import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 30% 70%;
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
		transform: rotate(270deg);
		text-align: center;
		position: absolute;
		top: 360px;
		left: 0px;
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
		text-transform: uppercase;
		color: white;
		padding: 0 20px;
		left: 15%;
		top: 30%;
		z-index: 99;
	}

	@media (max-width: 850px) {
		grid-template-columns: 25% 75%;
		grid-template-rows: 300px;
		h1 {
			top: 270px;
			font-size: 35px;
			letter-spacing: 7px;
		}
		p {
			font-size: 40px;
			letter-spacing: 4px;
			margin-left: 0%;
			left: 10%;
		}
	}

	@media (max-width: 600px) {
		grid-template-columns: 20% 80%;
		grid-template-rows: 250px;
		h1 {
			top: 230px;
			font-size: 33px;
			letter-spacing: 4px;
		}
		p {
			text-shadow: 1px 1px 1px black, 0 0 1em black, 0 0 0.2em black;
			font-size: 30px;
			letter-spacing: 4px;
			margin-left: 4%;
			left: 7%;
			top: 25%;
		}
	}
`;
