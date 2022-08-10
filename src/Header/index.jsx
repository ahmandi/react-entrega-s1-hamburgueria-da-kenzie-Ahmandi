import { useState } from 'react';
import Logo from '../svg/logo.svg';
import { Container, SearchContainer, Img, Input, Form, Button } from './styles';

function Header({ showProducts }) {
	const [filter, setFilter] = useState('');

	return (
		<Container>
			<Img src={Logo} alt="Logo" />
			<Form>
				<SearchContainer>
					<Input
						onChange={(e) => setFilter(e.target.value)}
						value={filter}
						type="text"
						placeholder="Digitar Pesquisa"
					/>
					<Button
						onClick={(e) => {
							e.preventDefault();
							showProducts(filter);
						}}
					>
						Pesquisar
					</Button>
				</SearchContainer>
			</Form>
		</Container>
	);
}

export default Header;
