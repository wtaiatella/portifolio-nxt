import styled from 'styled-components';

export const Container = styled.section`
	margin: 0 auto;
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template:
		'name name' 0px
		'block img' auto
		/ 0.12fr 1fr;

	.about-name {
		font-size: 25px;
		letter-spacing: 3px;
		width: 90%;
		background: var(--color-back-dark);
		color: var(--color-text-dark);
		padding: 3px 0px;
		position: relative;
		margin: 0px auto;
		top: 40px;
		z-index: 999;
		text-align: center;
		grid-area: name;
	}

	.about-block {
		height: 80%;
		z-index: 99;
		grid-area: block;
		background: linear-gradient(
			45deg,
			var(--color-grad-end) 10%,
			var(--color-grad-start)
		);
	}

	.about-img img {
		width: 100%;
		max-width: 500px;
		justify-self: start;
		grid-area: img;
	}
`;
