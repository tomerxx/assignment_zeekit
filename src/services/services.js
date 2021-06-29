import axios from "axios";
export const ApiData = new (function () {
	this.getItems = async ( url=null, params=null ) =>
		await axios.get(url, { params });
})();

export const Local = new (function () {
	this.saveItems = (key, obj) => {
		return sessionStorage.setItem(key, JSON.stringify(obj));
	};
	this.getItems = (key) => {
		return JSON.parse(sessionStorage.getItem(key)) || "";
	};
	
})();
  
