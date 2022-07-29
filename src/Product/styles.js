import styled from 'styled-components';

export const Container = styled.div`
	min-width: 18.75rem;
	height: 21.625rem;

	border-radius: 5px;
	border: 2px solid rgba(224, 224, 224, 1);

	padding: 0 0 1.5rem 0;
`;

export const Portrait = styled.div`
	background-color: #f5f5f5;
	display: flex;
	justify-content: center;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;

	text-align: initial;

	gap: 0.7rem;
	padding: 1.5rem 0 0 1.5rem;
`;

export const Name = styled.h1`
	font-weight: 700;
	font-size: 18px;
	line-height: 24px;

	color: #333333;
`;

export const Category = styled.h2`
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;

	color: #828282;
`;

export const Price = styled.h3`
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	color: #27ae60;
`;

export const Img = styled.img`
	width: 11.063rem;
	height: 11.063rem;
`;
