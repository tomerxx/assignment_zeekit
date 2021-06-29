import React, { useEffect, useRef, useState } from "react";
import { ApiData, Local } from "../services/services";
import { API_URL, API_KEY } from "../services/constant";

const Popup = (props) => {
	const { item, close } = props;
	const [plot, setPlot] = useState("Loading...");
	const more = useRef();
    const readMore =()=>{ 
       more.current.classList.add("more");
    }
	useEffect(() => {
		ApiData.getItems(API_URL, {
			apikey: API_KEY,
			i: item.imdbID,
		}).then(
			(res) => {
				setPlot(res.data.Plot);
			},
			(rej) => {},
		);
	});
	return (
		<div className="popup">
			<div className="item">
				<div className="close" onClick={close} />
				<img
					className="poster"
					src={item.Poster}
				/>
				<div ref={more} className="content">
					<div className="details">
						<div className="title">{item.Title}</div>
						<div className="year">{item.Year}</div>
					</div>
					<div className="plot">{plot}</div>
					<div className="link" onClick={readMore}>
						Read More
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;
