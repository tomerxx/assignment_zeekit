import axios from "axios";

export const getData = new function () {
	
	
	 this.a = ("343")
	this.data = async () => {
	return	 await axios.get(
			"http://blynk-cloud.com/NFmzesAKsa340A_zSVk5NUuKkALH99RD/get/V5",
			{ crossdomain: true }
		);
		//return res.data[0];
	};
};

// export const GetData = new (function () {
// 	this.getItems = async ( url=null, params=null ) =>
// 		await axios.get(url, { params });
// })();

// export default GetData;
