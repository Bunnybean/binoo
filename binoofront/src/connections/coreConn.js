import URL from '../config';

// Get one product by product id
const getOneProduct = productId => {
	return fetch(`${URL}/product/${productId}`, {
		method: 'GET',
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

// Get All Products
const allProducts = () => {
	return fetch(`${URL}/products`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export { getOneProduct, allProducts };
