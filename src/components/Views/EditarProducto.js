import React from "react";
import FormularioProducto from "./FormularioProducto";
import Inventario from "./Inventario";

const EditarProducto = (props) => {
	const path = window.location.pathname.split("/");
	let body = "";
	if (path.length == 2) {
		body = <Inventario products={props.products} />;
	} else if (path.length == 3) {
		const index = path[2];
		let product = props.products[index];
		body = <FormularioProducto product={product} />;
	} else {
		body = <h1>404</h1>;
	}
	return <div>{body}</div>;
};

export default EditarProducto;
