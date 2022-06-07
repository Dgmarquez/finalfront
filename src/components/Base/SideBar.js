const SideBar = (props) => {
	const path = window.location.pathname;
	return (
		<div id='sidebar'>
			<ul>
				<li className='no-back'>
					<img src='/assets/logo.webp'></img>
				</li>
				<li className='no-back'>
					<p>{props.user}</p>
				</li>
				<li className={path == "/" ? "active flex" : "flex"}>
					<img className="icon" src='https://img.icons8.com/stickers/100/undefined/warehouse.png' />
					<a href='/'>Inventario</a>
				</li>
				<li className={path == "/new_product" ? "active flex" : "flex"}>
					<img className="icon" src='https://img.icons8.com/stickers/100/undefined/insert-row-below.png' />
					<a href='/new_product'>Añadir producto</a>
				</li>
				<li className={path.startsWith("/edit") ? "active flex" : "flex"}>
					<img className="icon" src='https://img.icons8.com/stickers/100/undefined/insert-row-below.png' />
					<a href='/edit'>Editar producto</a>
				</li>
				<li className={path == "/orders" ? "active flex" : "flex"}>
					<img className="icon" src='https://img.icons8.com/stickers/100/undefined/purchase-order.png' />
					<a href='/orders'>Pedidos</a>
				</li>
				<li className={path == "/new_order" ? "active flex" : "flex"}>
					<img
						className='icon'
						src='https://img.icons8.com/stickers/100/undefined/add-shopping-cart--v2.png'
					/>
					<a href='/new_order'>Nuevo pedido</a>
				</li>
				<li className='no-back'>
					<button
						className='flex bg-red-500 hover:bg-red-700 text-white font-bold py-2 pr-4 rounded focus:outline-none focus:shadow-outline'
						type='button'
						onClick={props.logout}
					>
						<img
							className='icon'
							src='https://img.icons8.com/stickers/100/undefined/login-rounded-right.png'
						/>
						Cerrar Sesión
					</button>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
