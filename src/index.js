import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'


let funct = (lala) => {
  console.log("desde index", lala);
}

let usuarios = [{usuario: "donny", pass:"123"}, {usuario: "donny2", pass:"1234"}]
localStorage.setItem('users', JSON.stringify(usuarios));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <App bus_mayor={funct} />
    </>
  </React.StrictMode>
);

