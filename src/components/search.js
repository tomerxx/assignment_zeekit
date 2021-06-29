import React, { useState, useEffect, useRef } from "react";
// import { ApiData, API_URL, Local } from "../services/services";
import "../style/style.scss";

const Search = (props) => {
	const [data, setData] = useState({
		input: "",
	});

	const { handleSearch, favoriteMode } = props;
	const initRef = useRef(false);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			initRef.current
				? handleSearch(data.input)
				: (initRef.current = true);
		}, 400);

		return () => clearTimeout(delayDebounceFn);
	}, [data.input]);

	const updateInput = (e) => setData({ ...data, input: e.target.value });
	const start = !data.input && !favoriteMode ? "start" : "";

	return (
		<div className={`search_content ${start}`}>
			<form  className={`${start}`}
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<label>Search</label>

				<input
					onChange={updateInput}
					value={favoriteMode ? "" : data.input}
					placeholder={"Search"}
				/>
			</form>
		</div>
	);
};
export default Search;
