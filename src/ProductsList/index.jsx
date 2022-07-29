import Product from '../Product';
import { Container } from './styles';

function ProductsList({ products, handleClick, filteredProducts }) {
	return (
		<Container>
			{filteredProducts.length > 0
				? filteredProducts?.map((product, index) => (
						<Product product={product} key={index} handleClick={handleClick} />
				  ))
				: products?.map((product, index) => (
						<Product product={product} key={index} handleClick={handleClick} />
				  ))}
		</Container>
	);
}

export default ProductsList;
