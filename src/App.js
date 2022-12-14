import { useEffect, useState } from 'react';
import api from './Services/api';
import ProductsList from './ProductsList';
import Cart from './Cart';
import './App.css';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState([]);

	useEffect(() => {
		api
			.get()
			.then((response) => response)
			.then((response) => setProducts(response.data))
			.catch((error) => console.log(error));
	}, []);

	function showProducts(input) {
		const produto = products.filter((product) =>
			product.name.toLowerCase().includes(input.toLowerCase())
		);
		setFilteredProducts(produto);
		console.log(filteredProducts);
	}

	function handleClick(productId) {
		const productFind = products.find((product) => product.id === productId);

		if (currentSale.includes(productFind)) {
			toast.error('O produto já está no carrinho!', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			setCurrentSale([...currentSale, productFind]);
		}
	}

	function handleRemoval(removal) {
		const ProductFilter = currentSale.filter((item) => item !== removal);
		setCurrentSale(ProductFilter);
	}

	function handleRemoveAll() {
		setCurrentSale([]);
	}

	return (
		<div className="App">
			<Header showProducts={showProducts} />
			<div className="test">
				<ProductsList
					products={products}
					handleClick={handleClick}
					filteredProducts={filteredProducts}
				/>
				<Cart
					currentSale={currentSale}
					handleRemoval={handleRemoval}
					handleRemoveAll={handleRemoveAll}
				/>
				<ToastContainer />
			</div>
		</div>
	);
}

export default App;
