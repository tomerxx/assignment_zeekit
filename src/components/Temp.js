import React, { useEffect, useState } from "react";
import { useInterval } from "./useInterval";
import { ApiData } from "./services";

const GetData = () => {
	const [data, setData] = useState("");
	useInterval(() => {
		ApiData.getItems("http://192.168.1.109/temperaturec")
			
			.then(function (myJson) {
				// debugger
				console.log(myJson);
				handleData(myJson);
			});
	}, 1000);

	const handleData = d => {

        setData(d.data);

		return <></>;
	};

	return <div>{data && data}</div>;
};
export default GetData;
