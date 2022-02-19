import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const PostData = () => {
	//const [data, setData] = useState(0);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		//	const interval = setInterval(async () => {

		axios
			.get(
				"http://blynk-cloud.com/NFmzesAKsa340A_zSVk5NUuKkALH99RD/update/v5",
				{
					params: {
						value: inputValue,
					},
				},
			)
			.then((res, rej) => {
				console.log(res);
				// setData(res.data[0]) ;
			});
	}, [inputValue]);


	const handleInput = e => {
		return setInputValue(e.target.value);
	};

	return (
		<div>
			<input onChange={handleInput} value={inputValue} />
		</div>
	);
};
export default PostData;
