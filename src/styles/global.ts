import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {

	--color-grad-start: #fc5c02;
  	--color-grad-end: #f2df0f;
	--color-back-dark: #2a2a2e;
	--color-back-dark-light: #2d2d32;
	--color-text-orange: #f88f04;
	--color-text-dark: #999999;
	--color-text-title: #414144;
	--color-text-black: black;
	--color-stick: #999999;
	font-size: 16px;
}

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	
}


a {
	color: inherit;
	text-decoration: none;
}


body {
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	/* font-size: calc(10px + 1.5vmax); */


	/* @media (max-width: 1200px) {
		//16 pix * 0,9375 = 15px
		font-size: 93.75%;
	}
	
	@media (max-width: 900px) {
		//16 pix * 0,875 = 15px
		font-size: 87.5%;
	} */
}

body, input, textarea, select, button {
	
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
	font-weight: 700;
}


button {
	cursor: pointer;
}

.text-highlight {
		color: var(--color-text-orange);
	}

.hidden {
	display: none;
}

`;
