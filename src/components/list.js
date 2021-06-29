import React from "react";
import empty from "is-empty";
import Item from "./item"
import "../style/style.scss";


const List = (props) => {
const {data,addFavorite, favorite} = props;


const movies = !data.favorite_display ? data.movies : data.favorite
	return (
			<div className="list">
				{!empty(movies) ?
					movies.map((item,i) =>  {
						const isFavorite = data.favorite.find(o => o.imdbID === item.imdbID);
						return (
							<Item key={`item${i}`} item={item} isFavorite={isFavorite} addFavorite={addFavorite}/>
					)}) : 
					<div className="empty_msg">{ data.favorite_display ? "Your Favorite is Empty ):" : data.search ? "No Movies Found" : ""} </div> 
					}
				
			</div>
	);
};
export default List;