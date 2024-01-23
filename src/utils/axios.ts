import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://api.extrazone.com/",
	headers: {
		"Content-Type": "application/json",
		"X-Country-Id": "TR",
		"X-Language-Id": "TR",
	},
});
