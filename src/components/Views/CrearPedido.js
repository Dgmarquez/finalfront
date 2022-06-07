import React from "react";

class CrearPedido extends React.Component {

    state = {

        lista_productos : [],
        index_productos : -1,
        selected_prod_cod : "",
        selected_prod_nombre: "",
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

        let cant_solicitada = parseInt(this.state.cant_solicitada);
        let cant_manifiesto = parseInt(this.state.cant_manifiesto);
        let cant_recibida = parseInt(this.state.cant_recibida);

        let proveedor = this.state.proveedorInput;
        
        if(codigo_prod != null && codigo_prod.length > 0
            && nombre_prod != null && nombre_prod.length > 0
            && !isNaN(cant_solicitada) && Number.isInteger(cant_solicitada) && cant_solicitada > 0
            && !isNaN(cant_manifiesto) && Number.isInteger(cant_manifiesto)
            && !isNaN(cant_recibida) && Number.isInteger(cant_recibida)
            && proveedor.length > 0
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

                //Despues de agregar el pedido se calcula el nuevo stock del producto
                for (let i = 0; i < this.state.lista_productos.length; i++) {
                    const element = this.state.lista_productos[i];
                    if(element.codigo == pedido.codigo_prod){
                        //Buscamos el producto con el mismo codigo y actualizamos su stock
                        this.state.lista_productos[i].stock = this.state.lista_productos[i].stock + pedido.cant_recibida;
                        localStorage.setItem("productos", JSON.stringify(this.state.lista_productos));
                    }
                }
                
                this.navegar(2);
        }else {
            console.log("Alguno de los campos tiene error");
        }

    }

    render() {

        //Obtenemos la lista de productos para el dropdown
        //console.log("Lista string: "+ localStorage.getItem("productos"));
        
        let lista_productos = JSON.parse(localStorage.getItem("productos"));
        if (lista_productos == null) {
            lista_productos = [];
        }

        //console.log("Listaaa [0]: "+lista_productos[0]);

        /*this.setState(
            {lista_productos : lista_productos}
        )*/
        
        this.state.lista_productos = lista_productos;

        let lista_productos_render = lista_productos.map((producto, index) => {
            return (<option value={index}>{producto.nombre}</option>);
        });

        return (
            <div>
                <p className="text-blue-600/75">Crear Pedido</p>
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-96">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Codigo Producto
                            </label>
                                <select defaultValue="-1" className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"  
                                onChange={(event) => {
                                        let value = parseInt(event.target.value);
                                        
                                        if(value < 0 ){
                                            this.setState({
                                                index: value,
                                                selected_prod_cod: "",
                                                selected_prod_nombre : "",
                                            });
                                        }else{
                                            this.setState({
                                                index: value,
                                                selected_prod_cod: this.state.lista_productos[value].codigo,
                                                selected_prod_nombre : this.state.lista_productos[value].nombre,
                                            });
                                        }
                                    }}>
                                    
                                    <option selected value="-1">Seleccionar producto</option>
                                    {lista_productos_render}
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-96">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Tipo de Pedido
                            </label>
                                <select defaultValue="venta" className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"  
                                onChange={(event) => {
                                    let value = event.target.value
                                    }}>
                                    
                                    <option value="venta">Venta</option>
                                    <option value="compra">Compra</option>
                                    
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Nombre Producto
                            </label>
                            <input disabled className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={this.state.selected_prod_nombre} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Cantidad Solicitada
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { cant_solicitada: value }
                                )
                            }} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Cantidad Manifiesto
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { cant_manifiesto: value }
                                )
                            }} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Cantidad Recibida
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { cant_recibida: value }
                                )
                            }} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Proveedor
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { proveedorInput: value }
                                )
                            }} />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.crearPedido}>
                                Crear
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => this.navegar(2)}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </ div>
        )
    }
}

export default CrearPedido