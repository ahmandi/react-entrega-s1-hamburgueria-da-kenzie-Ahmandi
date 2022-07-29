import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	padding-top: 0.45rem;
`;

export const Checkout = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 5px;
	}
	::-webkit-scrollbar-thumb {
		background: gray;
		border-radius: 5px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #828282;
	}

	width: 100%;
	min-height: 5rem;
	max-height: 29.375rem;

	background-color: rgba(245, 245, 245, 1);

	border: none;
	border-radius: 0px 0px 5px 5px;

	padding: 1.153rem;
	margin: 0 0 1rem 0;

	p {
		font-weight: 700;
		font-size: 18px;
		line-height: 24px;

		text-align: center;

		color: #333333;
	}

	p + p {
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;

		text-align: center;

		color: #828282;
	}

	@media (min-width: 425px) {
		min-width: 23rem;
		max-width: 23rem;
	}
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	font-weight: 700;
	font-size: 18px;
	line-height: 24px;

	color: #fff;
	background-color: #27ae60;

	border: none;
	border-radius: 5px 5px 0px 0px;

	padding: 1.153rem;

	@media (min-width: 425px) {
		min-width: 23rem;
		max-width: 23rem;
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 3.75rem;

	font-weight: 600;
	font-size: 16px;
	line-height: 19px;

	border-radius: 0.5rem;
	border: none;

	color: #828282;
	background-color: rgba(224, 224, 224, 1);

	transition: all 250ms;
	cursor: pointer;

	&:hover {
		background-color: rgba(130, 130, 130, 1);
		color: #e0e0e0;
	}

	&:active {
		box-shadow: 0 0.5em 0.5em -0.4em rgba(130, 130, 130, 1);
		transform: translateY(0.08rem);
	}
`;

export const Total = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	padding: 1rem 0;
	margin-top: 0.5rem;

	border-top: 2px solid #e0e0e0;

	p {
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
	}

	p + p {
		color: #828282;
	}
`;

export const Product = styled.li`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	gap: 1rem;

	margin: 0.5rem;

	button {
		border: none;
		cursor: pointer;

		background-color: transparent;
		color: #bdbdbd;

		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
	}
`;

export const SmContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const ImgContainer = styled.div`
	width: 5.5rem;
	height: 5.5rem;

	display: flex;
	justify-content: center;
	align-items: center;

	background: #e0e0e0;
	border-radius: 5px;
`;

export const Img = styled.img`
	width: 4.375rem;
	height: 4.375rem;
`;

export const ItemName = styled.div`
	display: flex;
	flex-direction: column;

	gap: 0.7rem;

	p {
		font-weight: 700;
		font-size: 14px;
		line-height: 24px;
		color: #333333;
	}

	p + p {
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		color: #828282;
	}
`;
