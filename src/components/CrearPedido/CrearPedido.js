import React from "react";

class CrearPedido extends React.Component {

    state = {
        selected_prod_cod : null,
        selected_prod_nombre: null,
        cant_solicitada : 0,
        cant_manifiesto : 0,
        cant_recibida : 0,
        proveedorInput : ""
    }

    navegar = (nav_to) => {
        this.props.bus_nav(nav_to);
    }

    crearPedido = () => {

        let codigo_prod = this.state.selected_prod_cod;
        let nombre_prod = this.state.selected_prod_nombre;
        let cant_solicitada = this.state.cant_solicitada;
        let cant_manifiesto = this.state.cant_manifiesto;
        let cant_recibida = this.state.cant_recibida;
        
        if(codigo_prod != null && codigo_prod.length > 0
            && nombre_prod != null && nombre_prod.length > 0
            && !isNaN(cant_solicitada) && Number.isInteger(cant_solicitada) && cant_solicitada > 0
            && !isNaN(cant_manifiesto) && Number.isInteger(cant_manifiesto)
            && !isNaN(cant_recibida) && Number.isInteger(cant_recibida)
            ){
                let pedido = {
                    codigo_prod: codigo_prod,
                    nombre_prod : nombre_prod,
                    cant_solicitada : cant_solicitada,
                    cant_manifiesto : cant_manifiesto,
                    cant_recibida : cant_recibida
                }

                let pedidos = JSON.parse(localStorage.getItem("pedidos"));
                if (pedidos == null) {
                    pedidos = [];
                }

                pedidos.push(pedido);
                localStorage.setItem("pedidos", JSON.stringify(pedidos));
                this.navegar(1);
        }else {
            console.log("Alguno de los campos tiene error");
        }

    }

    render() {

        //Obtenemos la lista de productos para el dropdown
        let lista_productos = JSON.parse(localStorage.getItem("productos"));
        if (lista_productos == null) {
            lista_productos = [];
        }

        let lista_productos_render = lista_productos.map((producto) => {
            return (<option value={producto.codigo}>{producto.nombre}</option>);
        });

        return (
            <>
                <p class="text-blue-600/75">Crear Pedido</p>
                <div class="w-full max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="flex justify-center">
                            <div class="mb-3 xl:w-96">
                                <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"  
                                onChange={function (event){this.setState({value: event.target.value})}}>
                                    <option selected>Seleccionar Producto</option>
                                    {lista_productos_render}
                                </select>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Cantidad Solicitada
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { cant_solicitada: value }
                                )
                            }} />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Cantidad Manifiesto
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { cant_manifiesto: value }
                                )
                            }} />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Cantidad Recibida
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { cant_recibida: value }
                                )
                            }} />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Proveedor
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { proveedorInput: value }
                                )
                            }} />
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => this.crearPedido}>
                                Crear
                            </button>
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => this.navegar(1)}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default CrearPedido