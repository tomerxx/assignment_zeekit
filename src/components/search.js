import React, { useState, useEffect, useRef, useContext } from "react";
// import { ApiData, API_URL, Local } from "../services/services";
import "../style/style.scss";
import { DataContext } from "./store";
import { ApiData } from "../services/services";
import { API_URL, API_KEY } from "../services/constant";


const Search = (props) => {
	const [char, setChar] = useState({
		input: "",
	});
	
	const {setData,data} = useContext(DataContext);

	const favoriteMode = data.favorite_display;
	const initRef = useRef(false);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			initRef.current  				// initRef is false only first time to step on api in first time
				? handleSearch(char.input)
				: (initRef.current = true);
		}, 400);

		return () => clearTimeout(delayDebounceFn);
	}, [char.input]);

	const handleSearch = (value) => {
		setData({ ...data, pending: true, favorite_display: false });
		ApiData.getItems(API_URL, {
			apikey: API_KEY,
			s: value,
		}).then(
			(res) => {
				setData({...data,movies: res.data.Search || [],favorite_display: false,pending: false,search: value,})
			},
			(rej) => {
				setData({...data,movies: [],favorite_display: false,pending: false,});
			},
		);
	};


	const updateInput = (e) => setChar({ ...char, input: e.target.value });
	const start = !char.input && !favoriteMode ? "start" : "";

	return (
		<div className={`search_content ${start}`}>
			<form  className={`${start}`}
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<label>Search</label>

				<input
					onChange={updateInput}
					value={favoriteMode ? "" : char.input}
					placeholder={"Search"}
				/>
			</form>
		</div>
	);
};
export default Search;
