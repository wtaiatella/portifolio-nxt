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
		text-shadow: var(--color-text-black) 3px 3px 20px;
		letter-spacing: 5px;
		position: absolute;
		text-transform: uppercase;
		color: white;
		padding: 0 20px;
		left: 15%;
		top: 30%;
		z-index: 99;
	}
`;
