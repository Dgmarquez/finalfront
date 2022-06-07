import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";


let default_users = [
	{ username: "daniel", password: "123" },
	{ username: "donny", password: "123" },
	{ username: "joel", password: "123" }
];
localStorage.setItem("users", JSON.stringify(default_users));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<App />
	</>
);
