import React, { useState } from "react";
import { Local } from "../services/services";

const Login = () => {
	const [login, setLogin] = useState("");

	const updateInput = (e) => setLogin(e.target.value);

	const sendParams = () => {
		Local.saveItems("Login", login);
	};

	return (
		<header>
			<form onSubmit={sendParams}>
				<label>Name</label>
				<input
					required
					onChange={updateInput}
					value={login}
					placeholder={"Name"}
				/>

				<button type="submit">Login</button>
			</form>
		</header>
	);
};
export default Login;
