import styled from 'styled-components';

export const Container = styled.section`
	background-position: right bottom;
	background-color: var(--color-back-dark);
	position: relative;
	height: calc(100vh - 100px);
	overflow: 'hidden';

	z-index: 1;
	padding: 0 10% 0 15%;

	.intro-title {
		position: relative;
		z-index: 10;
		color: white;
		font-weight: 700;
	}

	p {
		font-size: 3em;
		padding-top: 5vh;
	}

	h1 {
		font-size: 5em;
		line-height: 90px;
		margin-top: 1vh;
	}

	.intro-highlight {
		position: relative;
		z-index: 10;
		color: var(--color-text-orange);
		line-height: 80px;
		font-weight: 700;
		font-size: 5em;
		margin-top: 12vh;
	}

	.intro-focus {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: 15em;
		padding: 15px;
		margin-right: 15px;
		background: rgba(0, 0, 0, 0.5);
		color: var(--color-text-dark);
		text-transform: uppercase;
		letter-spacing: 5px;
		text-align: center;
		font-weight: 700;
		font-size: 2.5em;
		margin-top: 2vh;
	}

	.intro-btn {
		position: relative;
		display: block;
		box-sizing: border-box;
		margin-right: 10%;
		z-index: 10;
		width: 100%;
		max-width: 12em;
		padding: 15px 20px;
		border-radius: 5px;
		background: linear-gradient(
			45deg,
			var(--color-grad-start) 60%,
			var(--color-grad-end)
		);
		color: white;
		letter-spacing: 3px;
		text-align: center;
		font-weight: 700;
		font-size: 2em;
		margin-top: 12vh;
	}

	@media (max-width: 1300px), (max-height: 900px) {
		h1 {
			font-size: 4em;
			line-height: 80px;
		}

		.intro-highlight {
			font-size: 4em;
			line-height: 70px;
			margin-top: 10vh;
		}

		.intro-focus {
			font-size: 2em;
		}
	}

	@media (max-width: 920px), (max-height: 820px) {
		p {
			font-size: 2.5em;
			padding-top: 4vh;
		}

		h1 {
			font-size: 3.5em;
			line-height: 70px;
			margin-top: 0.7vh;
		}

		.intro-highlight {
			font-size: 3.5em;
			line-height: 60px;
			margin-top: 8vh;
		}

		.intro-focus {
			font-size: 1.7em;
			max-width: 12em;
		}

		.intro-btn {
			font-size: 1.5em;
			margin-top: 8vh;
		}
	}

	@media (max-width: 800px), (max-height: 720px) {
		padding: 0 10% 0 10%;

		p {
			font-size: 2em;
		}

		h1 {
			font-size: 3em;
		}

		.intro-highlight {
			font-size: 3em;
			line-height: 50px;
		}

		.intro-focus {
			font-size: 1.5em;
			line-height: 30px;
		}

		.intro-btn {
			font-size: 1.5em;
			margin-top: 8vh;
		}
	}

	@media (max-width: 640px), (max-height: 640px) {
		padding: 0 10% 0 10%;

		p {
			font-size: 1.7em;
		}

		h1 {
			font-size: 2.5em;
		}

		.intro-highlight {
			font-size: 2.5em;
			line-height: 50px;
		}

		.intro-focus {
			font-size: 1.3em;
			line-height: 30px;
		}

		.intro-btn {
			font-size: 1.4em;
			margin-top: 8vh;
		}
	}

	@media (max-width: 400px), (max-height: 600px) {
		height: 100vh;
		p {
			font-size: 1.2em;
			padding-top: 10vh;
		}

		h1 {
			font-size: 1.7em;
			line-height: 30px;
			margin-top: 1vh;
		}

		.intro-highlight {
			font-size: 1.7em;
			line-height: 30px;
			margin-top: 10vh;
		}

		.intro-focus {
			font-size: 1em;
			line-height: 30px;
			max-width: 18em;
			padding: 10px;
		}

		.intro-btn {
			font-size: 1em;
			margin-top: 10vh;
			max-width: 15em;
		}
	}
`;
