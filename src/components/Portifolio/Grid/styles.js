import styled from 'styled-components';

export const Container = styled.div`
	max-width: 80%;
	margin: 60px auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, 280px);
	justify-content: center;
	gap: 50px;

	@media (max-width: 950px) {
	}
`;
