import styled from 'styled-components';

export const Container = styled.section`
	position: relative;

	max-width: 500px;
	height: 400px;
	margin: 0 8% 0 5%;

	display: grid;
	align-items: center;
	justify-content: center;
	grid-template:
		'name name' 0px
		'block img' auto
		/ 60px 1fr;

	.name {
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

	.block {
		height: 80%;
		z-index: 99;
		grid-area: block;
		background: linear-gradient(
			45deg,
			var(--color-grad-end) 10%,
			var(--color-grad-start)
		);
	}

	.image {
		width: 100%;
		justify-self: start;
		grid-area: img;
		overflow: hidden;
		min-height: 100%;
		position: relative;
	}

	@media (max-width: 850px) {
		max-width: 500px;
		height: 400px;
		margin: 0 10% 0 10%;
	}

	@media (max-width: 550px) {
		max-width: 500px;
		height: 400px;
		margin: 0 10% 0 10%;
	}
`;
