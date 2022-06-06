import React from "react";

class CrearProducto extends React.Component {

    state = {
        codigoInput : "",
        nombreInput : "",
        precioInput : 0,
        proveedorInput : "",
    }

    navegar = (nav_to) => {
        this.props.bus_nav(nav_to);
    }

    crearProducto = () => {

        let codigo = this.state.codigoInput
        let nombre = this.state.nombreInput
        let precio = parseInt(this.state.precioInput)
        let proveedor = this.state.proveedorInput
        

        if (codigo.length > 0
            && nombre.length > 0
            && !isNaN(precio) && Number.isInteger(precio)
            && proveedor.length > 0) {

                let producto = {
                    codigo: codigo,
                    nombre: nombre,
                    precio: precio,
                    stock: 0,
                    proveedor: proveedor
                }

                let productos = JSON.parse(localStorage.getItem("productos"));
                if (productos == null) {
                    productos = [];
                }
        
                productos.push(producto);
                localStorage.setItem('productos', JSON.stringify(productos));
                this.navegar(1);
        }else{
            console.log("Alguno de los campos tiene error");
        }

        

        /*let i = 0;
        let found = false;
        while (!found && i < productos.length) {
            const element = productos[i];
            if (element.usuario === this.state.usuarioInput && element.pass === this.state.passInput) {
                found = true;
            }
            i++;
        }
        if (found) {
            //this.props.bus_agregar_fruta(this.state.usuarioInput, this.state.passInput);
            this.props.bus_goToInventory();
        } else {
            console.log("No se encontró el usuario");
        }*/

    }

    render() {
        return (
            <>
                <p class="text-blue-600/75">Crear Producto</p>
                <div class="w-full max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
  </div>
</div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Código
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { codigoInput: value }
                                )
                            }} />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Nombre
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { nombreInput: value }
                                )
                            }} />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Precio
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={event => {
                                const value = event.target.value;
                                this.setState(
                                    { precioInput: value }
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
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => this.crearProducto}>
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

export default CrearProducto