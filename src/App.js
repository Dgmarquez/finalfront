import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import SideBar from "./components/Base/SideBar";
import CrearPedido from "./components/Views/CrearPedido";
import CrearProducto from "./components/Views/FormularioProducto";
import Inventario from "./components/Views/Inventario";
import Login from "./components/Views/Login";
import Pedidos from "./components/Views/Pedidos";
import EditarProducto from "./components/Views/EditarProducto";

const App = () => {
	const set_browser_state = (key, value) => {
		let state = JSON.parse(localStorage.getItem("state")) ?? {};
		state[key] = value;
		localStorage.setItem("state", JSON.stringify(state));
	};
	const [user, setUser] = useState();
	const [products, setProducts] = useState();
	const [pedidos, setPedidos] = useState();
	const set_user = (_user) => {
		setUser(_user);
		set_browser_state("user", _user);
	};
	const set_products = (_products) => {
		setProducts(_products);
		set_browser_state("products", _products);
	};
	const set_pedidos = (_pedidos) => {
		setPedidos(_pedidos);
		set_browser_state("pedidos", _pedidos);
	};
	const logout = () => {
		setUser();
		set_browser_state("user");
	};
	useEffect(() => {
		const loaded = JSON.parse(localStorage.getItem("state")) ?? {};
		set_user(loaded.user);
		set_products(loaded.products??[]);
		set_pedidos(loaded.pedidos??[]);
	}, []);
	return (
		<>
			{user ? (
				<BrowserRouter>
					<div className='flex'>
						<SideBar logout={logout} user={user.username} />
						<div className="grid h-screen w-screen place-items-center">
							<Routes>
								<Route path='/' element={<Inventario products={products} />} />
								<Route path='/orders' element={<Pedidos />} />
								<Route path='/new_product' element={<CrearProducto />} />
								<Route path='/new_order' element={<CrearPedido products={products}/>} />
								<Route path='/edit/*' element={<EditarProducto products={products} />} />
							</Routes>
						</div>
					</div>
				</BrowserRouter>
			) : (
				<Login set_user={set_user}/>
			)}
		</>
	);
};

export default App;
