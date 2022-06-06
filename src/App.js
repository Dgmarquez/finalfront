
import React, { useState } from 'react';
import Inventario from './components/Inventario'
import './index.css';

/*import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom";*/
import Login from './components/Login/Login';
import Pedidos from './components/Pedidos/Pedidos';
import CrearProducto from './components/CrearProducto/CrearProducto';
import CrearPedido from './components/CrearPedido';

class App extends React.Component {
    state = {
        //page : 0
        page: this.props.page
    }

    logout = () => {
        localStorage.setItem("logueado", "false");
        this.setState(
            {page: 0}
        )
    }

    goToInventory = () => {
        this.setState(
            {page: 1}
        )
    }

    navegar = (nav_to) => {
        this.setState(
            {page: nav_to}
        )
    }

    agregarFruta = (nombre, precio) => {
        let newFruta = { nombre: nombre, precio: precio, cantidad: 0 };
        this.state.frutas.push(newFruta);
        this.setState(
            { frutas: this.state.frutas }
        );
        console.log("Lista Despues: " + this.state.frutas);
    }

    actualizarCantidad = (nombre, cantidad) => {
        let list = this.state.frutas;
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            if (element.nombre == nombre) {
                list[i].cantidad = cantidad;
            }
        }
        this.forceUpdate()
    }

    render() {
        if(this.state.page == 0){
            return <Login bus_goToInventory={this.goToInventory}/>
        }else if(this.state.page == 1){
            return <Inventario bus_logout={this.logout} bus_nav={this.navegar}/>
        }else if(this.state.page == 2){
            return <Pedidos bus_logout={this.logout} bus_nav={this.navegar}/>
        }else if(this.state.page == 3){
            return <CrearProducto bus_logout={this.logout} bus_nav={this.navegar}/>
        }else{
            return <CrearPedido bus_logout={this.logout} bus_nav={this.navegar}/>
        }
    }
}

export default App
