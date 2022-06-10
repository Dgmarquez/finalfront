import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

class FormularioProducto extends React.Component {
	state = {
		codeInput: this.props.product ? this.props.product.code : "",
		nameInput: this.props.product ? this.props.product.name : "",
		priceInput: this.props.product ? this.props.product.price : 0,
		providerInput: this.props.product ? this.props.product.provider : "",
		stockInput: this.props.product ? this.props.product.stock : 0,
		error: "",
	};
	form_has_error() {
		if (this.state.codeInput.length < 0) {
			return "Código inválido.";
		} else if (this.state.nameInput.length < 0) {
			return "Nombre inválido.";
		} else if (this.state.priceInput < 0) {
			return "Precio inválido.";
		} else if (this.state.providerInput.length < 0) {
			return "Proveedor inválido.";
		} else if (this.state.stockInput < 0) {
			return "Stock inválido.";
		}
		return false;
	}
	crearProducto = () => {
		const error = this.form_has_error();
		if (error) {
			this.setState({ error: error });
		} else {
			let producto = {
				code: this.state.codeInput,
				name: this.state.nameInput,
				price: this.state.priceInput,
				provider: this.state.providerInput,
				stock: this.state.stockInput,
			};
			let state = JSON.parse(localStorage.getItem("state"));
			const products = state.products;
			const productWithSameCode = products.find(
				prod => String(prod.code) === String(producto.code));

			const productWithSameName = products.find(
				prod => String(prod.name) === String(producto.name));
      if (productWithSameCode) {
        this.setState({ error: 'Ya existe un producto con este Codigo' });
      } else if (productWithSameName) {
        this.setState({ error: 'Ya existe un producto con este Nombre' });
      }else{
        state.products.push(producto);
        localStorage.setItem("state", JSON.stringify(state));
        window.location.href = "/";
	  }
		}
	};
	editarProducto = () => {
		const error = this.form_has_error();
		if (error) {
			this.setState({ error: error });
		} else {
			let producto = {
				code: this.props.product.code,
				name: this.state.nameInput,
				price: this.state.priceInput,
				provider: this.state.providerInput,
				stock: this.state.stockInput,
			};
			let state = JSON.parse(localStorage.getItem("state"));
			const index = state.products.findIndex((p) => p.code == producto.code);
			if (index == -1) {
				this.setState({ error: "No encontrado" });
			} else {
				state.products[index] = producto;
				localStorage.setItem("state", JSON.stringify(state));
				window.location.href = "/";
			}
		}
	};

	render() {
		return (
			<div>
				<p className='text-blue-600/75 text-xl font-bold mx-20'>
					{this.props.product ? "Editar" : "Crear"} Producto
				</p>
				<div className='w-full max-w-xs'>
					<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='code'
							>
								Código
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
								id='code'
								type='text'
								disabled={this.props.product != undefined}
								defaultValue={this.props.product?.code}
								onChange={(event) => {
									const value = event.target.value;
									this.setState({ codeInput: value });
								}}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='name'
							>
								Nombre
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
								id='name'
								type='text'
								defaultValue={this.props.product?.name}
								onChange={(event) => {
									const value = event.target.value;
									this.setState({ nameInput: value });
								}}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='price'
							>
								Precio
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
								id='price'
								type='number'
								defaultValue={this.props.product?.price}
								onChange={(event) => {
									const value = event.target.value;
									this.setState({ priceInput: value });
								}}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='provider'
							>
								Proveedor
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
								id='provider'
								type='text'
								defaultValue={this.props.product?.provider}
								onChange={(event) => {
									const value = event.target.value;
									this.setState({ providerInput: value });
								}}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='stock'
							>
								Stock
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
								id='stock'
								type='number'
								defaultValue={this.props.product?.stock}
								onChange={(event) => {
									const value = event.target.value;
									this.setState({ stockInput: value });
								}}
							/>
						</div>
						<p className='text-red-700'>{this.state.error}</p>
						<div className='flex items-center justify-between'>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
								href='/'
								type='button'
								onClick={() =>
									this.props.product
										? this.editarProducto()
										: this.crearProducto()
								}
							>
								{this.props.product ? "Editar" : "Crear"}
							</button>
							<a	className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' href='/'>
								Cancelar
							</a>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default FormularioProducto;
