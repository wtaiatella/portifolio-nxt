import styled from 'styled-components';

export const Container = styled.div`
	width: 250px;
	figure.snip1477 {
		font-family: 'Titillium Web', sans-serif;
		position: relative;
		overflow: hidden;
		margin: 10px;
		width: 250px;
		color: #141414;
		text-align: left;

		* {
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
		}

		img {
			max-width: 100%;
			vertical-align: top;
		}

		figcaption {
			position: absolute;
			top: calc(77%);
			width: 100%;
			background-color: #ffffff;
			padding: 15px 25px 65px;

			:before {
				position: absolute;
				content: '';
				z-index: 2;
				bottom: 100%;
				left: 0;
				width: 100%;
				height: 80px;
				background-image: -webkit-linear-gradient(
					top,
					transparent 0%,
					#ffffff 100%
				);
				background-image: linear-gradient(
					to bottom,
					transparent 0%,
					#ffffff 100%
				);
			}

			p,
			h3,
			h2 {
				margin: 0 0 10px;
				color: var(--color-back-dark-light);
			}

			h3 {
				line-height: 25px;
				font-size: 1.5em;
				font-weight: bold;
				text-transform: uppercase;
			}

			h2 {
				line-height: 20px;
				font-size: 1em;
				font-weight: bold;
				text-transform: uppercase;
			}

			p {
				font-size: 1em;
				letter-spacing: 1px;
				line-height: 10px;
			}
		}

		a {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 2;
		}
	}

	figure.snip1477:hover figcaption {
		top: 42%;
	}
`;
