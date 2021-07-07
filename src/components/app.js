//ver 3
import React, { useContext } from "react";
import Header from "./header";
import List from "./list";
import Login from "./login";
import { StoreProvider } from "./store";
import "../style/style.scss";
import { Local } from "../services/services";

const App = () => {

	if (!Local.getItems("Login")) return <Login />;

	return (
		<StoreProvider>
			<Header />
			<List />
		</StoreProvider>
	);
};
export default App;
