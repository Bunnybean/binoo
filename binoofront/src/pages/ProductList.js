import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import { isLoginMode } from '../connections/authConn';
import { allProducts, deleteOneProduct } from '../connections/adminConn';

//css
import './ProductList.css';

//icons
import { MdDeleteForever } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';

const ProductList = () => {
	const { user, token } = isLoginMode();

	const [products, setProducts] = useState([]);
	const [deletedProduct, setDeletedProduct] = useState(false);

	//Backend 연결 후 활성화
	const displayProducts = () => {
		allProducts(user._id, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				//console.log(data);
				setProducts(data);
			}
		});
	};

	const deleteProduct = productId => {
		deleteOneProduct(productId, user._id, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				displayProducts();
			}
		});
	};

	useEffect(() => {
		displayProducts();
	}, []);

	return (
		<div>
			<div class="row">
				<div class="col-2">
					<Sidebar />
				</div>
				<div class="col-10">
					<div>
						<div class="container">
							<h3>Edit Products</h3>
							<table class="table table-dark table-hover">
								<thead>
									<tr>
										<th>#</th>
										<th scope="col">Product</th>
										<th scope="col">Edit</th>
										<th scope="col">Delete</th>
									</tr>
								</thead>
								<tbody>
									{/* Backend 연결 후 활성화 */}
									{products.map((product, index) => (
										<tr>
											<th scope="row" key={index}>
												{index + 1}
											</th>
											<td>{product.name}</td>
											<td>
												<Link
													to={`/admin/category/update/${product._id}`}
												>
													<BiEditAlt />
												</Link>
											</td>
											<td>
												<Link
													onClick={() => {
														deleteProduct(product._id);
													}}
												>
													<MdDeleteForever />
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
