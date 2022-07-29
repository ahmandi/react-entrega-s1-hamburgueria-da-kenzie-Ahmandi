import { Button } from '../Header/styles';
import {
	Container,
	Portrait,
	Info,
	Img,
	Name,
	Category,
	Price,
} from './styles';

function Product({ handleClick, product }) {
	return (
		<>
			<Container>
				<Portrait>
					<Img src={product.img} alt="Fast Food" />
				</Portrait>
				<Info>
					<Name>{product.name}</Name>
					<Category>{product.category}</Category>
					<Price>R${product.price}</Price>
					<Button onClick={() => handleClick(product.id)}>Adicionar</Button>
				</Info>
			</Container>
		</>
	);
}

export default Product;
