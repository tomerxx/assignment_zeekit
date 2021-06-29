import React, { useState, useEffect } from "react";
import Search from "./search";
import List from "./list";
import Login from "./login";
import { ApiData, Local } from "../services/services";
import { API_URL, API_KEY } from "../services/constant";
import "../style/style.scss";

const App = () => {
	const [data, setData] = useState({
		movies: [],
		favorite: Local.getItems("favorite") || [],
		pending: false,
		favorite_display: false,
		search: "",
		error: "",
	});

	useEffect(() => {
		Local.saveItems("favorite", data.favorite);
	}, [data.favorite]);

	const handleSearch = (value) => {
		setData({ ...data, pending: true, favorite_display: false });
		ApiData.getItems(API_URL, {
			apikey: API_KEY,
			s: value,
		}).then(
			(res) => {
				console.log(res);
				res.data.Response == "True"
					? setData({...data,movies: res.data.Search,favorite_display: false,pending: false,search: value,})
					: setData({...data,movies: [],favorite_display: false,pending: false,search: value,error: res.data.Error,});
			},
			(rej) => {
				console.log(rej);
				setData({...data,movies: [],favorite_display: false,pending: false,});
			},
		);
	};

	const addFavorite = (movie) => {
		data.favorite.find((o) => o.imdbID === movie.imdbID)
			? setData({...data,favorite: [...data.favorite.filter((item) => item.imdbID !== movie.imdbID,),],search: "",})
			: setData({...data,favorite: [...data.favorite, movie],search: "",});
	};

	const showFavorite = () => {
		setData({...data,favorite_display: true,search: "",});};

	if (!Local.getItems("Login")) return <Login />;
	return (
		<div className="wrapper">
			<header>
				<div className="user_name">
					Hello <span>{Local.getItems("Login")}</span>
				</div>

				<button
					className="button"
					onClick={() => {
						showFavorite();
					}}>
					{"My Favorite"}
				</button>
				<Search
					handleSearch={handleSearch}
					favoriteMode={data.favorite_display}
				/>
			</header>
			<div>
				{!data.pending && (
					<List data={data} addFavorite={addFavorite} />
				)}
				<div className="loading">
					{data.pending && <div>Loading ... </div>}
				</div>
			</div>
		</div>
	);
};
export default App;
