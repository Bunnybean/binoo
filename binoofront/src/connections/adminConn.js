import URL from '../config';

//Products CRUD

//Create Product
const addProduct = (userId, token, product) => {
	// product = formdata. 데이터가 여기로 잘 넘어왔는지 확인
	// for (var value of product.values()) {
	// 	console.log(value);
	// }

	return fetch(`${URL}/product/create/${userId}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`, //header에 'Content-Type': 'application/json'가
			// 없는 이유는 formdata를 보내기때문(image를 포함하니까)
		},
		body: product, //product = formdata
	})
		.then(response => {
			return response.json();
		})
		.catch(err => {
			console.log(err);
		});
};

// Read Products (for admin, no images)
const allProducts = (userId, token) => {
	// return fetch(`${URL}/admin/products/${userId}`, {
	return fetch(`${URL}/products`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

//Delete
const deleteOneProduct = (productId, userId, token) => {
	return fetch(`${URL}/product/${productId}/${userId}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

//Update Product
const editProduct = (productId, userId, token, product) => {
	return fetch(`${URL}/product/${productId}/${userId}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: product,
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export { addProduct, allProducts, deleteOneProduct, editProduct };
