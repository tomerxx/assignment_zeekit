import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const PostData = props => {
	// const [postData, setPostData] = useState(data);
	// debugger
	// const [data,setData] =useState("")
	const [inputValue, setInputValue] = useState();

	const sendData = () => {
		//	const interval = setInterval(async () => {

		axios
			.get(
				"http://blynk-cloud.com/NFmzesAKsa340A_zSVk5NUuKkALH99RD/update/v5",
				{
					params: {
						// value: `${props.data} <br/> ${inputValue}`,
						 value: `[${inputValue}]`,
					},
				},
			)
			.then((res, rej) => {
				setInputValue("");
				//console.log(res)
			});
	};
	const clearData = () => {
		//	const interval = setInterval(async () => {

		axios
			.get(
				"http://blynk-cloud.com/NFmzesAKsa340A_zSVk5NUuKkALH99RD/update/v5",
				{
					params: {
						value: ``,
					},
				},
			)
			.then((res, rej) => {
				//console.log(res)
			});
	};

	const handleInput = e => {
		return setInputValue(e.target.value);
	};

	return (
		<div dir="rtl">
			<input 
			
				onKeyPress={event => {
					if (event.key === "Enter") sendData();
				}}
				onChange={handleInput}
				value={inputValue}
			/>
			<button onClick={sendData}> שלח </button>
			<button onClick={clearData}> נקה מסך </button>
		</div>
	);
};
export default PostData;
