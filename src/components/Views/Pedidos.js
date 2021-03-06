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

        let new_listas_pedidos = JSON.parse(localStorage.getItem("state")).pedidos;
        console.log("New lista: "+ new_listas_pedidos);
        if(new_listas_pedidos == null){
            new_listas_pedidos = [];
        }
        //this.state.lista_pedidos = new_listas_pedidos;
        this.state.lista_pedidos = new_listas_pedidos;

    }

    /*ir_crearPedido = () => {
        this.props.bus_nav(4);
    }

    ir_Inventario = () => {
        this.props.bus_nav(1);
    }

    logout = () => {
        this.props.bus_logout();
    }*/

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
                                        C??digo Producto
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
                    <p className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
                        Lista Vacia
                    </p>

                    <button className="hover:text-green-700 font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 mx-10">Pagar</button>
                </>
            )
        }


        return (
            <div>
                {pageBody}
            </div>
        );

    }
}

export default Pedidos