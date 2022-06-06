import React from "react";

class Login extends React.Component {

    state = {
        usuarioInput: "",
        passInput: 0
    }

    login = () => {

        let usuarios = JSON.parse(localStorage.getItem("users"));
        console.log("usuarios: "+ usuarios);
        if (usuarios != null) {
            let i = 0;
            let found = false;
            while (!found && i < usuarios.length) {
                const element = usuarios[i];
                if (element.usuario === this.state.usuarioInput && element.pass === this.state.passInput) {
                    found = true;
                }
                i++;
            }
            if (found) {
                //this.props.bus_agregar_fruta(this.state.usuarioInput, this.state.passInput);
                localStorage.setItem("logueado", "true");
                this.props.bus_goToInventory();
            } else {
                console.log("No se encontró el usuario");
            }
        }
    }

    render() {
        return (
            <>
                <div class="grid h-screen w-screen place-items-center">
                    <div class="w-full max-w-xs">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Usuario
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Usuario" onChange={event => {
                                    const value = event.target.value;
                                    this.setState(
                                        { usuarioInput: value }
                                    )
                                }} />
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Contraseña
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={event => {
                                    const value = event.target.value;
                                    this.setState(
                                        { passInput: value }
                                    )
                                }} />
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.login}>
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                

            </>
        )
    }
}

export default Login