import styled from 'styled-components';

export const Container = styled.div`
	margin-left: 80px;
	h2 {
		color: white;
		font-size: 35px;
		letter-spacing: 2px;
	}
	h3 {
		color: white;
		margin-top: 40px;
		font-size: 20px;
		font-weight: 300;
		letter-spacing: 3px;
	}

	p {
		color: var(--color-text-dark);
		margin-top: 5px;
		font-size: 17px;
		font-weight: 300;
		letter-spacing: 3px;
	}

	a {
		color: var(--color-text-dark);
	}

	.contact-socialmedia h2 {
		margin-top: 40px;
		margin-bottom: 20px;
	}

	.contact-socialmedia ul {
		display: flex;
	}

	.contact-socialmedia li {
		list-style-type: none;
	}

	.contact-socialmedia img {
		width: 50px;
		color: white;
	}

	.contact-socialmedia li + li {
		margin-left: 50px;
	}

	@media (max-width: 1200px) {
		margin-left: 0px;
		margin-top: 50px;
		h3 {
			margin-top: 30px;
		}
	}

	@media (max-width: 630px) {
		margin-left: 0px;
		margin-top: 40px;
		h2 {
			font-size: 1.5em;
			letter-spacing: 2px;
		}
		h3 {
			margin-top: 25px;
			font-size: 1.3em;
			font-weight: 300;
			letter-spacing: 3px;
		}
		.contact-socialmedia li + li {
			margin-left: 30px;
		}
	}
`;
