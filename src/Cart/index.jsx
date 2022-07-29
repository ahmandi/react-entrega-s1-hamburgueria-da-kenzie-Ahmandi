import {
	Container,
	Checkout,
	Product,
	SmContainer,
	ImgContainer,
	Img,
	ItemName,
	Total,
	Title,
	Button,
} from './styles';

function Cart({ currentSale, handleRemoval, handleRemoveAll }) {
	const addTotal = currentSale.reduce((valorAnterior, valorAtual) => {
		return valorAnterior + valorAtual.price;
	}, 0);

	return (
		<>
			<Container>
				<Title>Carrinho de compras</Title>
				<Checkout>
					<ul>
						{currentSale.length === 0 ? (
							<>
								<p>Seu carrinho está vazio</p>
								<p>Adicionar items</p>
							</>
						) : (
							<>
								{currentSale?.map((item, index) => (
									<Product key={index}>
										<SmContainer>
											<ImgContainer>
												<Img src={item.img} alt="Item Comprado" />
											</ImgContainer>
											<ItemName>
												<p>{item.name}</p>
												<p>{item.category}</p>
											</ItemName>
										</SmContainer>
										<button onClick={() => handleRemoval(item)}>Remover</button>
									</Product>
								))}
								<Total>
									<p>Total</p>
									<p>R$ {addTotal.toFixed(2)}</p>
								</Total>
								<Button onClick={() => handleRemoveAll(currentSale)}>
									Remover Todos
								</Button>
							</>
						)}
					</ul>
				</Checkout>
			</Container>
		</>
	);
}

export default Cart;
