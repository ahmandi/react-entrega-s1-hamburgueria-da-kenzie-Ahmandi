import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: -webkit-fill-available;
	padding: 0.6rem;

	background-color: #f5f5f5;

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 0.625rem 10%;
	}
`;

export const SearchContainer = styled.div`
	width: 90%;
	height: 3.75rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	border-radius: 0.5rem;
	border: 2px solid rgba(224, 224, 224, 1);
	padding: 0 0.625rem;

	background-color: #fff;

	@media (min-width: 1024px) {
		width: 22.813rem;
	}
`;

export const Img = styled.img`
	width: 158.94px;
	height: 36.83px;
`;

export const Input = styled.input`
	border: none;
	outline: none;
	::placeholder {
		color: #e0e0e0;
		font-weight: 400;
		font-size: 17px;
		line-height: 19px;
	}
`;

export const Button = styled.button`
	width: 6.688rem;
	height: 2.5rem;

	border-radius: 0.5rem;
	border: none;

	font-size: 0.875rem;
	color: #fff;
	background-color: rgba(39, 174, 96, 1);

	transition: all 250ms;
	cursor: pointer;

	&:hover {
		background-color: rgba(147, 215, 175, 1);
		color: #888;
	}

	&:active {
		background-color: rgba(39, 174, 96, 1);
		color: #fff;
		box-shadow: 0 0.5em 0.5em -0.4em rgba(39, 174, 96, 1);
		transform: translateY(0.08rem);
	}
`;
