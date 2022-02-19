import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const GetData = () => {
	const [data, setData] = useState(0);

useEffect(()=>{
	const interval = setInterval(async () => {
		
		 axios.get("http://blynk-cloud.com/NFmzesAKsa340A_zSVk5NUuKkALH99RD/get/V5"
		).then((res,rej)=>{
 // console.log(res)

			// let a=Math.round(res.data[0])
			console.log(res)
			 setData(res.data[0]) ;

		});
	
// console.log(d.data)
// console.log(data)


	  }, 1000);
  
	  return () => clearInterval(interval);
},[data])
 console.log("render")
	return <div>{data && data}</div>;
};
export default GetData;
