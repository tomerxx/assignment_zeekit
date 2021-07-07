import React, { useState, useEffect, createContext } from "react";
import { Local } from "../services/services";
import empty from "is-empty";

export const DataContext = createContext();

export const StoreProvider = ({ children }) => {
	const [data, setData] = useState({
		movies: [],
		favorite: Local.getItems("favorite") || [],
		pending: false,
		favorite_display: true,
		search: "",
	});

	useEffect(() => {
		if (!empty(data.favorite)) Local.saveItems("favorite", data.favorite);
	}, [data.favorite]);

	return (
		<DataContext.Provider value={{ data: data, setData: setData }}>
			{children}
		</DataContext.Provider>
	);
};
