import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	width: 70px;
	height: 70px;
	bottom: 40px;
	right: 40px;
	background-color: #25d366;
	color: #fff;
	border-radius: 50px;
	text-align: center;
	font-size: 30px;
	box-shadow: 2px 2px 3px #999;
	z-index: 10000;

	img {
		width: 46px;
		color: white;
		margin-top: 12px;
	}

	@media (max-width: 850px) {
		width: 60px;
		height: 60px;
		bottom: 30px;
		right: 30px;
		img {
			width: 36px;
			margin-top: 12px;
		}
	}

	@media (max-width: 500px) {
		width: 50px;
		height: 50px;
		bottom: 15px;
		right: 15px;
		img {
			width: 28px;
			margin-top: 10px;
		}
	}
`;
