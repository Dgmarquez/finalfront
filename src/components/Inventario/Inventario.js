import React from "react";

class Inventario extends React.Component {

    state = {
        lista_productos: [/*{
            codigo: 0,
            nombre: "Arroz Diana",
            precio: 50,
            stock: 0,
            proveedor: "Distri Costa"
        },
        {
            codigo: 1,
            nombre: "Azucar Manuelita",
            precio: 20,
            stock: 0,
            proveedor: "Distri Costa"
        }*/]
    }

    logout = () => {
        this.props.bus_logout();
    }

    ir_crearProducto = () => {
        this.props.bus_nav(3);
    }

    cargarLista = () => {
        let productos = JSON.parse(localStorage.getItem("productos"));
        if (productos == null) {
            productos = [];
        }
        this.state.lista_productos = productos;
    }

    render() {
        this.cargarLista()
        let pageBody = null;
        if (this.state.lista_productos.length > 0) {

            let render_listaProductos = this.state.lista_productos.map((producto) => {
                return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {producto.codigo}
                        </th>
                        <td class="px-6 py-4">
                            {producto.nombre}
                        </td>
                        <td class="px-6 py-4">
                            {producto.precio}
                        </td>
                        <td class="px-6 py-4">
                            {producto.stock}
                        </td>
                        <td class="px-6 py-4">
                            {producto.proveedor}
                        </td>
                        <td class="px-6 py-4">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.login}>Eliminar</button>
                        </td>
                    </tr>
                );
            });

            pageBody = (
                <>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Código
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nombre
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Precio
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Stock
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Proveedor
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Acción
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {render_listaProductos}
                            </tbody>
                        </table>
                    </div>
                </>
            )
        } else {
            pageBody = (
                <>
                    <p>
                        Lista Vacia
                    </p>

                    <button>Pagar</button>
                </>
            )
        }


        return (
            <>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.ir_crearProducto}>
                    Crear Producto
                </button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.logout}>
                    Cerrar Sesión
                </button>
                {pageBody}
            </>
        );

    }
}

export default Inventario