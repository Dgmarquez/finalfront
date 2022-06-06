import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'


let funct = (lala) => {
  console.log("desde index", lala);
}

let usuarios = [{usuario: "donny", pass:"123"}, {usuario: "donny2", pass:"1234"}]
localStorage.setItem('users', JSON.stringify(usuarios));

const root = ReactDOM.createRoot(document.getElementById('root'));

let logueado = localStorage.getItem("logueado") || "false";
let page;
if(logueado == "true"){
  page = 1;
}else{
  page = 0;
}

root.render(
  <>
    <App page={page} />
  </>
);

