import styled from 'styled-components';

export const Container = styled.div`
	max-width: 100%;
	max-height: 100%;
	overflow: scroll;

	display: flex;
	flex-direction: row;

	padding: 1rem;
	gap: 1rem;

	@media (min-width: 1024px) {
		flex-wrap: wrap;
		align-content: flex-start;
		padding: 0.625rem 1%;
		overflow: hidden;
	}
`;
