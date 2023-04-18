import styled from 'styled-components';

export const Container = styled.div`
	figure.snip1477 {
		font-family: 'Titillium Web', sans-serif;
		position: relative;
		overflow: hidden;
		color: #141414;
		text-align: left;

		* {
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
		}

		figcaption {
			position: absolute;
			top: calc(75%);
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

			span,
			h3,
			h2,
			a {
				color: var(--color-back-dark-light);
			}

			h2 {
				line-height: 25px;
				font-size: 1.5em;
				font-weight: bold;
				text-transform: uppercase;
				margin-bottom: 10px;
			}

			h3 {
				line-height: 20px;
				font-size: 1em;
				font-weight: bold;
				text-transform: uppercase;
				margin-bottom: 15px;
			}

			div {
				height: 60px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: center;
			}

			span {
				font-size: 1em;
				letter-spacing: 1px;
				line-height: 10px;
				margin-right: 10px;
			}

			a {
				display: inline-block;
				margin-right: 20px;
				box-sizing: border-box;
				width: 80px;
				padding: 5px 5px;
				border-radius: 5px;
				background: linear-gradient(
					45deg,
					var(--color-grad-start) 60%,
					var(--color-grad-end)
				);
				color: white;
				letter-spacing: 1px;
				text-align: center;
				font-weight: 700;
			}
		}
	}

	figure.snip1477:hover figcaption {
		top: 30%;
	}
`;
