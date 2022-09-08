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
	.knowledge-text {
		background: var(--color-back-dark);
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
		text-shadow: var(--color-text-black) 3px 3px 20px;
		letter-spacing: 5px;
		position: absolute;
		top: 30%;
		right: 18%;

		text-transform: uppercase;
		color: white;
		padding: 0 20px;
		margin-left: 10%;
	}

	.knowledge-img img {
		object-fit: cover;
		object-position: left top;
		width: 100%;
		height: 80%;
	}
`;
