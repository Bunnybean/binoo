import React, { useState, useEffect } from 'react';
import { isLoginMode } from '../connections/authConn';
import { addProduct } from '../connections/adminConn';
import Sidebar from '../components/Sidebar';

//css
import './CreateProduct.css';

const CreateProduct = () => {
	//successMessage & errorMessage 나중에 다시 확인
	const [successMessage, setSuccessMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const { user, token } = isLoginMode();

	const [values, setValues] = useState({
		name: '',
		description: '',
		price: '',
		category: '',
		quantity: '',
		photo: '',
		success: '',
		redirectToProfile: false,
		formData: '',
		error: '',
	});

	const {
		name,
		description,
		price,
		category,
		quantity,
		success,
		redirectToProfile,
		photo,

		error,
	} = values;

	const createFormData = () => {
		setValues({
			...values,
			formData: new FormData(),
		});
	};

	useEffect(() => {
		createFormData();
	}, []);

	const handleImage = event => {
		let imageFile = event.target.files[0];
		setValues({ ...values, photo: imageFile });
	};

	const handleChange = name => event => {
		const value = event.target.value;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = event => {
		console.log(values.id);
		event.preventDefault();

		const formData = new FormData();
		formData.append('photo', values.photo);
		formData.append('name', values.name);
		formData.append('description', values.description);
		formData.append('price', values.price);
		formData.append('category', values.category);
		formData.append('quantity', values.quantity);

		//formData에 data가 잘 들어갔는지 확인
		// for (var value of formData.values()) {
		// 	console.log(value);
		// }

		addProduct(user._id, token, formData).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					...values,
					name: '',
					description: '',
					photo: '',
					price: '',
					quantity: '',
					success: data.name,
				});
				setSuccessMessage(true);
				console.log('message', setSuccessMessage);
				console.log('data', data);
			}
		});
	};

	return (
		<div>
			{/* <Navbar /> */}
			<div class="row">
				<div class="col-2">
					<Sidebar />
				</div>
				<div class="col-10">
					<div class="container">
						<h3 className="title">Add Product</h3>
						{/* display success message if product is created */}
						{successMessage ? (
							<h6 className=" alert alert-info ">
								{success} is created
							</h6>
						) : null}
						{/* display error message if fail to create product */}
						{error ? (
							<h6 className="text-danger alert alert-danger space">
								Fail to create '{success}' product.
								<br />
							</h6>
						) : null}
						<form onSubmit={handleSubmit}>
							<div className="image-container">
								<input
									type="file"
									onChange={handleImage}
									required
									name="photo"
									accept="image/*"
								/>
							</div>

							<div className="form-group">
								<label className="text-muted">Name</label>
								<input
									onChange={handleChange('name')}
									type="text"
									className="form-control"
									value={name}
									required
								/>
							</div>

							<div className="form-group">
								<label className="text-muted">Description</label>
								<textarea
									onChange={handleChange('description')}
									className="form-control"
									value={description}
									required
								/>
							</div>

							<div className="form-group">
								<label className="text-muted">Price</label>
								<input
									onChange={handleChange('price')}
									type="number"
									className="form-control"
									value={price}
									required
									min="1"
								/>
							</div>

							<div className="form-group">
								<label className="text-muted">Category</label>
								<select
									onChange={handleChange('category')}
									className="form-control"
									required
								>
									<option>Please select</option>
									<option value="1">Soap</option>
									<option value="2">Salt</option>
									<option value="3">Bath Boom</option>
								</select>
							</div>

							<div className="form-group">
								<label className="text-muted">Quantity</label>
								<input
									onChange={handleChange('quantity')}
									type="number"
									className="form-control"
									value={quantity}
									required
									min="1"
								/>
							</div>

							<button className="btn btn-dark">Create Product</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateProduct;
