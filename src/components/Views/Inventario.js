import React, { useEffect, useState } from "react";

const Inventario = (props) => {
	const edit = (_, product) => {
		props.edit(product);
	};
	const products_list = props.products?.map((product, index) => (
		<tr
			className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
			key={product.code}
		>
			<th
				scope='row'
				className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
			>
				{product.code}
			</th>
			<td className='px-6 py-4'>{product.name}</td>
			<td className='px-6 py-4'>{product.price}</td>
			<td className='px-6 py-4'>{product.stock}</td>
			<td className='px-6 py-4'>{product.provider}</td>
			<td className='px-6 py-4'>
				<a
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					// type='button'
					href={"/edit/" + index}
				// onClick={(_) => edit(_, product)}
				>
					Editar
				</a>
				<a
					className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					style={{marginLeft: '5px', cursor: 'pointer'}}
					onClick={ () => {
						let state = JSON.parse(localStorage.getItem("state"));
						const products = state.products;
						state.products = products.filter(
							prod => String(prod.code) !== String(product.code)
						);
						localStorage.setItem("state", JSON.stringify(state));
						window.location.href = "/";
					}}
				>
					Borrar
				</a>
			</td>
		</tr>
	)) ?? (
			<div className='p-6 text-xl text-center'>
				<h1>Actualmente no hay productos creados</h1>
				<p>
					Pero puedes crear uno <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" href='/new_product'>aquí</a>
				</p>
			</div>
		);

	return (
		<div>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th scope='col' className='px-6 py-3'>
								Código
							</th>
							<th scope='col' className='px-6 py-3'>
								Nombre
							</th>
							<th scope='col' className='px-6 py-3'>
								Precio
							</th>
							<th scope='col' className='px-6 py-3'>
								Stock
							</th>
							<th scope='col' className='px-6 py-3'>
								Proveedor
							</th>
							<th scope='col' className='px-6 py-3'>
								Acción
							</th>
						</tr>
					</thead>
					<tbody>{products_list}</tbody>
				</table>
			</div>
		</div>
	);
};

export default Inventario;
