import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import Test from './pages/Test';
import CreateProduct from './pages/CreateProduct';
import ProductList from './pages/ProductList';
import Detail from './pages/Detail';
import EditProduct from './pages/EditProduct';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/login" exact component={Login} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/shop" exact component={Shop} />
				<Route path="/test" exact component={Test} />
				<Route path="/create/product" exact component={CreateProduct} />
				<Route path="/admin/product" exact component={ProductList} />
				<Route path="/admin/prod" exact component={ProductList} />
				<Route path="/product/:productId" exact component={Detail} />
				<Route
					path="/admin/product/edit/:productId"
					exact
					component={EditProduct}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
