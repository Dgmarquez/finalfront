import React, { useState } from "react";

const Login = (props) => {
	const [error, setError] = useState();
	const [usernameInput, setUsernameInput] = useState();
	const [passwordInput, setPasswordInput] = useState();

	const login = () => {
		let usuarios = JSON.parse(localStorage.getItem("users"));
		if (usuarios != null) {
			let i = 0;
			let found = false;
			while (!found && i < usuarios.length) {
				const element = usuarios[i];
				if (
					element.username === usernameInput &&
					element.password === passwordInput
				) {
					found = true;
				}
				i++;
			}
			if (found) {
				props.set_user({username: usernameInput, password: passwordInput});
			} else {
                setError("No se encontró el usuario");
			}
		}
	};

	return (
		<>
			<div className='grid h-screen w-screen place-items-center'>
				<div className='w-full max-w-xs'>
					<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
						<div className='mb-4'>
							<img src='assets/logo.webp' alt='icon'></img>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='username'
							>
								Usuario
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='username'
								type='text'
								placeholder='username'
								onChange={(event) => setUsernameInput(event.target.value)}
                                />
						</div>
						<div className='mb-6'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='password'
                                >
								Contraseña
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
								id='password'
								type='password'
								placeholder='·······'
								onChange={(event) => setPasswordInput(event.target.value)}
							/>
							<p className='text-red-700'>{error}</p>
						</div>
						<div className='flex items-center justify-between'>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								type='button'
								onClick={login}
							>
								Ingresar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
