import React from "react";

class Pedidos extends React.Component {

    state = {
        lista_pedidos: [{
            cant_solicitada: 10,
            cant_manifiesto: 14,
            cant_recibida: 8,
            codigo_prod: "arroz_diana",
            nombre_prod: "Arroz Diana"
        },
        {
            cant_solicitada: 10,
            cant_manifiesto: 14,
            cant_recibida: 8,
            codigo_prod: "pastas_doria",
            nombre_prod: "Pastas Doria"
        }]
    }

    llenarPedidos = () => {
        let new_listas_pedidos = [
            {
                cant_solicitada: 10,
                cant_manifiesto: 14,
                cant_recibida: 8,
                codigo_prod: "arroz_diana",
                nombre_prod: "Arroz Diana"
            },
            {
                cant_solicitada: 10,
                cant_manifiesto: 14,
                cant_recibida: 8,
                codigo_prod: "pastas_doria",
                nombre_prod: "Pastas Doria"
            }
        ];
        this.setState(
            { lista_pedidos: new_listas_pedidos }
        );
    }

    logout = () => {
        this.props.bus_logout();
    }

    render() {
        let pageBody = null;

        let render_listaPedidos = this.state.lista_pedidos.map((pedido) => {
            return(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {pedido.codigo_prod}
                </th>
                <td class="px-6 py-4">
                    {pedido.nombre_prod}
                </td>
                <td class="px-6 py-4">
                    {pedido.cant_solicitada}
                </td>
                <td class="px-6 py-4">
                    {pedido.cant_manifiesto}
                </td>
                <td class="px-6 py-4">
                    {pedido.cant_recibida}
                </td>
                <td class="px-6 py-4 text-right">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.login}>Eliminar</button>
                </td>
            </tr>
            );
        });

        if (this.state.lista_pedidos.length > 0) {
            pageBody = (
                <>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Código Producto
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nombre Producto
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Cant. Solicitada
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Cant. Manifiesto
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Cant. Recibida
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {render_listaPedidos}
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
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.logout}>
                    Cerrar Sesión
                </button>
                {pageBody}
            </>
        );

    }
}

export default Pedidos