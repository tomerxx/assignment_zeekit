//ver 1
import React, { useState, useEffect,createContext } from "react";
import Search from "./search";
import List from "./list";
import Login from "./login";
import { Local } from "../services/services";
import "../style/style.scss";
import empty from "is-empty";

export const DataContext = createContext(); 

const App = () => {
	const [data, setData] = useState({
		movies: [],
		favorite: Local.getItems("favorite") || [],
		pending: false,
		favorite_display: true,
		search: "",
	});
	
	useEffect(() => {
		if(!empty(data.favorite)) Local.saveItems("favorite", data.favorite);
	}, [data.favorite]);
	
	if (!Local.getItems("Login")) return <Login />;

	const showFavorite = () => {
		setData({...data,favorite_display: true,search: "",});};
	
	return (
	<DataContext.Provider value={{data:data,setData:setData}}>
		<div className="wrapper">
			<header>
				<div className="user_name">
					Hello <span>{Local.getItems("Login")}</span>
				</div>
				<button className="button" onClick={showFavorite}>{"My Favorite"}</button>
				<Search />
			</header>
			
				{!data.pending ? <List/> : <div>Loading ... </div>}  
		</div>
	</DataContext.Provider>
	);
};
export default App;
