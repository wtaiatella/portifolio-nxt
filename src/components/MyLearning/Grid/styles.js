import styled from 'styled-components';

export const Container = styled.div`
	max-width: 80%;
	margin: 30px auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, 250px);
	justify-content: center;
	gap: 30px;

	@media (max-width: 950px) {
	}
`;
