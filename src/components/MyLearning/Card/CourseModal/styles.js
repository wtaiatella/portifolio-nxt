import styled from 'styled-components';

export const Container = styled.div`
	.knowledg-grid {
		display: grid;
		grid-template:
			'bar name   name        name        name'
			'bar   .    tech      tech-cont   tech-cont'
			'bar   .    rep       rep-link      cert'
			'bar   .   period     per-cont    cert-link'
			'bar   .   pg-title    pg-title    cert-link'
			'bar   .   pg-cont    pg-cont     cert-link'
			/20px 25px 0.8fr 1.7fr 1fr;
		max-width: 1000px;
		width: 100%;
		margin: 0 auto 50px;
	}

	.know-name {
		grid-area: name;
		font-size: 20px;
		font-weight: bold;
		margin: 5px 0;
	}

	.know-tech {
		grid-area: tech;
	}

	.know-tech-cont {
		grid-area: tech-cont;
	}

	.know-cont {
		color: var(--color-back-dark);
		align-self: center;
	}

	.know-rep {
		grid-area: rep;
	}

	.know-rep-link {
		grid-area: rep-link;
		display: flex;
		flex: 1;
		align-self: center;
	}

	.know-rep-link li + li {
		margin-left: 40px;
	}

	.know-rep-link li:hover {
		text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.5);
	}

	.know-period {
		grid-area: period;
	}

	.know-period-cont {
		grid-area: per-cont;
	}

	.know-pages-title {
		grid-area: pg-title;
	}

	.know-pages-cont {
		grid-area: pg-cont;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 30px;
		padding: 0 30px;
	}

	.know-pages-cont img {
		object-fit: contain;
		object-position: center;
		width: 100%;
		height: 100%;
	}

	.know-pages-cont img:hover {
		box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.5);
	}

	.know-cert {
		grid-area: cert;
	}

	.know-cert-link {
		grid-area: cert-link;
		align-self: start;
	}

	.know-cert-link img {
		object-fit: contain;
		object-position: center center;
		width: 100%;
		height: 100%;
	}

	.know-cert-link img:hover {
		box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.5);
	}

	.know-bar {
		grid-area: bar;
	}

	.know-title {
		font-weight: bold;
		align-self: center;
	}
`;
