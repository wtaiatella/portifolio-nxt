import styled from 'styled-components';

export const Container = styled.section`
	display: grid;
	grid-template-columns: 1fr 1.2fr;
	position: relative;
	margin: 0 auto;
	padding: 50px 80px;
	border: 1px solid;

	.about-details {
		/* margin-top: 50px; */
		width: 100%;
		/* padding-right: 80px; */
	}

	.about-title {
		display: flex;
		max-width: 1000px;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}

	.about-title img {
		position: absolute;
		top: 12px;
		left: -30px;
	}

	.about-title h2 {
		font-size: 35px;
		font-weight: 700;
		width: 100%;
		margin: 40px 0;
	}

	.about-details p {
		font-size: 1.2em;
	}

	.about-details p + p {
		margin-top: 30px;
	}
`;
