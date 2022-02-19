//ver 1
import React,{useEffect, useState}  from "react";
import {getData} from "./Temp";
import PostData from "./Temp_post";
import "../style/style.scss";

const AppTemp = () => {
const [data,setData] =useState("")
useEffect(() => {
	const interval = setInterval(async () => {   //  
	getData.data().then(o=>{
		console.log(o.data[0])
		setData(o.data[0])})

	}, 500);
  
	return () => clearInterval(interval);
},[data])
// useEffect(() => {
// 	getData.data().then(o=>{setData(o.data[0])})

// }, [])




	
	return (
		<div className="App">
		 {
		 
		//  <div dir="rtl" className={"text"} dangerouslySetInnerHTML={{__html: data}} />
		 data
		 
		 }
		  <PostData data={data}  />
		</div>
	  );
	

};
export default AppTemp;
