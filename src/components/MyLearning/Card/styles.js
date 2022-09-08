import styled from 'styled-components';

export const Container = styled.div`
	@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,700);
	@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
	figure.snip1477 {
		font-family: 'Raleway', Arial, sans-serif;
		position: relative;
		overflow: hidden;
		margin: 10px;
		min-width: 230px;
		max-width: 315px;
		width: 100%;
		color: #ffffff;
		text-align: center;
		font-size: 16px;
		background-color: #000000;
	}
	figure.snip1477 *,
	figure.snip1477 *:before,
	figure.snip1477 *:after {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-transition: all 0.55s ease;
		transition: all 0.55s ease;
	}
	figure.snip1477 img {
		max-width: 100%;
		backface-visibility: hidden;
		vertical-align: top;
		opacity: 0.9;
	}
	figure.snip1477 .title {
		position: absolute;
		top: 58%;
		left: 25px;
		padding: 5px 10px 10px;
	}
	figure.snip1477 .title:before,
	figure.snip1477 .title:after {
		height: 2px;
		width: 400px;
		position: absolute;
		content: '';
		background-color: #ffffff;
	}
	figure.snip1477 .title:before {
		top: 0;
		left: 10px;
		-webkit-transform: translateX(100%);
		transform: translateX(100%);
	}
	figure.snip1477 .title:after {
		bottom: 0;
		right: 10px;
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%);
	}
	figure.snip1477 .title div:before,
	figure.snip1477 .title div:after {
		width: 2px;
		height: 300px;
		position: absolute;
		content: '';
		background-color: #ffffff;
	}
	figure.snip1477 .title div:before {
		top: 10px;
		right: 0;
		-webkit-transform: translateY(100%);
		transform: translateY(100%);
	}
	figure.snip1477 .title div:after {
		bottom: 10px;
		left: 0;
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
	}
	figure.snip1477 h2,
	figure.snip1477 h4 {
		margin: 0;
		text-transform: uppercase;
	}
	figure.snip1477 h2 {
		font-weight: 400;
	}
	figure.snip1477 h4 {
		display: block;
		font-weight: 700;
		background-color: #ffffff;
		padding: 5px 10px;
		color: #000000;
	}
	figure.snip1477 figcaption {
		position: absolute;
		bottom: 42%;
		left: 25px;
		text-align: left;
		opacity: 0;
		padding: 5px 60px 5px 10px;
		font-size: 0.8em;
		font-weight: 500;
		letter-spacing: 1.5px;
	}
	figure.snip1477 figcaption p {
		margin: 0;
	}
	figure.snip1477 a {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	figure.snip1477:hover img,
	figure.snip1477.hover img {
		zoom: 1;
		filter: alpha(opacity=35);
		-webkit-opacity: 0.35;
		opacity: 0.35;
	}
	figure.snip1477:hover .title:before,
	figure.snip1477.hover .title:before,
	figure.snip1477:hover .title:after,
	figure.snip1477.hover .title:after,
	figure.snip1477:hover .title div:before,
	figure.snip1477.hover .title div:before,
	figure.snip1477:hover .title div:after,
	figure.snip1477.hover .title div:after {
		-webkit-transform: translate(0, 0);
		transform: translate(0, 0);
	}
	figure.snip1477:hover .title:before,
	figure.snip1477.hover .title:before,
	figure.snip1477:hover .title:after,
	figure.snip1477.hover .title:after {
		-webkit-transition-delay: 0.15s;
		transition-delay: 0.15s;
	}
	figure.snip1477:hover figcaption,
	figure.snip1477.hover figcaption {
		opacity: 1;
		-webkit-transition-delay: 0.2s;
		transition-delay: 0.2s;
	}
`;
