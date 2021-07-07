import React, {useContext} from "react";
import empty from "is-empty";
import Item from "./item"
import { DataContext } from "./store";
import "../style/style.scss";


const List = (props) => {
const {data} = useContext(DataContext);
const movies = !data.favorite_display ? data.movies : data.favorite

if(data.pending ) return  <div>Loading ... </div>  

	return (
			<div className="list">
				{!empty(movies) ?
					movies.map((item,i) =>  {
						const isFavorite = data.favorite.find(o => o.imdbID === item.imdbID);
						return (
							<Item key={`item${i}`} item={item} />
					)}) : 
					<div className="empty_msg">{ data.favorite_display ? "Your Favorite is Empty ):" : data.search ? "No Movies Found" : ""} </div> 
					}
				
			</div>
	);
};
export default List;