import styled from 'styled-components';

export const Container = styled.div`
	figure.snip1477 {
		font-family: 'Titillium Web', sans-serif;
		position: relative;
		overflow: hidden;
		margin: 0px;
		width: 250px;
		color: white;
		text-align: left;
		background-color: var(--color-back-dark);

		*,
		*:before,
		*:after {
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			-webkit-transition: all 0.55s ease;
			transition: all 0.55s ease;
		}
		img {
			max-width: 100%;
			backface-visibility: hidden;
			vertical-align: top;
			opacity: 0.9;
		}
		.title {
			position: absolute;
			top: 50%;
			left: 25px;
			padding: 5px 8px 5px;
			max-width: 80%;

			h2 {
				font-size: 1.5em;
				font-weight: bold;
				line-height: 30px;
				color: var(--color-text-dark);
				margin: 0;
				text-transform: uppercase;
			}

			:before,
			:after {
				height: 2px;
				width: 400px;
				position: absolute;
				content: '';
				background-color: #ffffff;
			}

			:before {
				top: 0;
				left: 10px;
				-webkit-transform: translateX(100%);
				transform: translateX(100%);
			}
			:after {
				bottom: 0;
				right: 10px;
				-webkit-transform: translateX(-100%);
				transform: translateX(-100%);
			}

			div:before,
			div:after {
				width: 2px;
				height: 300px;
				position: absolute;
				content: '';
				background-color: #ffffff;
			}
			div:before {
				top: 10px;
				right: 0;
				-webkit-transform: translateY(100%);
				transform: translateY(100%);
			}

			div:after {
				bottom: 10px;
				left: 0;
				-webkit-transform: translateY(-100%);
				transform: translateY(-100%);
			}
		}

		figcaption {
			position: absolute;
			top: 33%;
			left: 25px;
			text-align: left;
			opacity: 0;
			padding: 5px 60px 5px 10px;
			font-size: 0.8em;
			font-weight: 500;
			letter-spacing: 1.5px;

			p {
				margin: 0;
			}
		}

		a {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}

	figure.snip1477:hover {
		img {
			zoom: 1;
			filter: alpha(opacity=35);
			-webkit-opacity: 0.35;
			opacity: 0.35;
		}

		.title {
			:before,
			:after,
			div:before,
			div:after {
				-webkit-transform: translate(0, 0);
				transform: translate(0, 0);
			}

			:before,
			:after {
				-webkit-transition-delay: 0.15s;
				transition-delay: 0.15s;
			}

			h2 {
				color: var(--color-text-orange);
				-webkit-transition-delay: 0.15s;
				transition-delay: 0.15s;
			}
		}

		figcaption {
			opacity: 1;
			-webkit-transition-delay: 0.2s;
			transition-delay: 0.2s;
		}
	}
`;
