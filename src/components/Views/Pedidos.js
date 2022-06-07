import React from "react";

class Pedidos extends React.Component {

    state = {
        lista_pedidos: []
    }

    llenarPedidos = () => {
        /*let new_listas_pedidos = [
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
        );*/

        let new_listas_pedidos = JSON.parse(localStorage.getItem("pedidos"));
        console.log("New lista: "+ new_listas_pedidos);
        if(new_listas_pedidos == null){
            new_listas_pedidos = [];
        }
        //this.state.lista_pedidos = new_listas_pedidos;
        this.state.lista_pedidos = new_listas_pedidos;

    }

    ir_crearPedido = () => {
        this.props.bus_nav(4);
    }

    ir_Inventario = () => {
        this.props.bus_nav(1);
    }

    logout = () => {
        this.props.bus_logout();
    }

    render() {

        this.llenarPedidos();

        let pageBody = null;

        let render_listaPedidos = this.state.lista_pedidos.map((pedido) => {
            return(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {pedido.codigo_prod}
                </th>
                <td className="px-6 py-4">
                    {pedido.nombre_prod}
                </td>
                <td className="px-6 py-4">
                    {pedido.cant_solicitada}
                </td>
                <td className="px-6 py-4">
                    {pedido.cant_manifiesto}
                </td>
                <td className="px-6 py-4">
                    {pedido.cant_recibida}
                </td>
                <td className="px-6 py-4 text-right">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.login}>Eliminar</button>
                </td>
            </tr>
            );
        });

        if (this.state.lista_pedidos.length > 0) {
            pageBody = (
                <>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Código Producto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nombre Producto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cant. Solicitada
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cant. Manifiesto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
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
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.ir_crearPedido}>
                        Crear Pedido
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.ir_Inventario}>
                        Inventario
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.logout}>
                    Cerrar Sesión
                </button>
                {pageBody}
            </ div>
        );

    }
}

export default Pedidos