import styled from 'styled-components';

export const Container = styled.header`
	position: sticky;
	top: 0px;
	z-index: 9999;
	.menu {
		height: 100px;
		background-color: var(--color-back-dark-light);
		position: -webkit-sticky;
		position: sticky;
		top: 0px;
		z-index: 9999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.menu ul {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		justify-content: center;
		position: relative;
	}

	.line {
		display: flex;
		justify-content: center;
	}
	.line + .line {
		margin-left: 60px;
	}

	.menu li + li {
		margin-left: 60px;
	}

	.menu li {
		padding: 10px;
	}

	.menu a {
		text-decoration: none;
		font-family: 'Titillium Web', sans-serif;
		color: var(--color-text-dark);
		font-size: 1.2em;
		font-weight: 600;
		letter-spacing: 3px;
		position: relative;
	}

	.menu a::before {
		content: '';
		position: absolute;
		top: 50%;
		left: -25px;
		width: 15px;
		height: 2px;
		margin-top: 0px;
		background: var(--color-stick);
	}

	.menu a:hover {
		color: var(--color-text-orange);
		--color-stick: #f88f04;
	}

	@media (max-width: 950px) {
		.line + .line {
			margin-left: 30px;
		}

		.menu li + li {
			margin-left: 30px;
		}

		.menu a {
			font-size: 0.9em;
			letter-spacing: 2px;
		}
	}

	@media (max-width: 680px) {
		.menu ul {
			flex-direction: column;
			justify-content: center;
			.line + .line {
				margin-left: 0px;
			}
		}
	}
`;
