import React, { useContext } from "react";
import Search from "./search";
import { Local } from "../services/services";
import { DataContext } from "./store";

const Header = () => {
	const { data, setData } = useContext(DataContext);

	const showFavorite = () => {
		setData({ ...data, favorite_display: true, search: "" });
	};

	return (
		<header>
			<div className="user_name">
				Hello <span>{Local.getItems("Login")}</span>
			</div>
			<button className="button" onClick={showFavorite}>
				{"My Favorite"}
			</button>
			<Search />
		</header>
	);
};
export default Header;
