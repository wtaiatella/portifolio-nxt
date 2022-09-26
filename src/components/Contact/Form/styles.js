import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	p {
		color: white;
		font-size: 2em;
		font-weight: 700;
		letter-spacing: 2px;
	}

	form {
		margin-top: 2em;
	}

	.form-details {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 20px;
	}

	.form-inputs {
		border: none;
		color: var(--color-text-dark);
		background: var(--color-text-title);
		font-family: 'Poppins', sans-serif;
		font-size: 1.3em;
		padding: 10px 20px;
		margin-bottom: 20px;
		border-radius: 7px;
		width: 100%;
	}

	button {
		position: relative;
		display: block;
		box-sizing: border-box;

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
		font-size: 1.5em;
		margin-top: 1em;
	}
`;
