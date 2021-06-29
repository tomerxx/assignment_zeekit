import React, {useState} from "react";
import Popup from "./popup";

const Item = (props) => {
const [popup,setPopup] = useState(false)
const {item,addFavorite,isFavorite} = props;
const close = ()=>{setPopup(false)}
	return (<>
        <div className="item"  >
        <div className="poster" style={{backgroundImage: `url(${item.Poster})`}} onClick={()=>{setPopup(true)}} />
        <div className="item_footer">
        <div className="favorite">
            <div title="Add / Remofe from Favorite" className="favorite_add" onClick={() => {addFavorite(item)}}>
                <svg className={`icon ${isFavorite ? "fav" : ""}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            </div>
        </div>

        <div className="details">
        <div className="title">{item.Title}</div>
        <div className="year">{item.Year}</div>
        </div>
        </div>
       
    </div>
     { popup && <Popup item={item} close={close}/>}
     </>
	);
};

export default Item;
