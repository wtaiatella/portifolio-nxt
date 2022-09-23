import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	margin: 0 auto;
	position: relative;

	image {
		position: absolute;
		top: 0px;
		left: 0px;
	}

	h2 {
		font-size: 35px;
		font-weight: 700;
		position: absolute;
		top: 25px;
		left: 40px;
		color: var(--color-back-dark-light);
	}
`;
