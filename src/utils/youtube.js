import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { jobs } from "./constants";

export const fetchVideos = async (query, count) => {
	const BASE_URL = "https://youtube-v31.p.rapidapi.com";
	const options = {
		url: BASE_URL,
		params: {
			maxResults: count,
		},
		headers: {
			"X-RapidAPI-Key":
				"45687a246amsh2c4dfe601637c21p13d93cjsn96bc772e5343",
			"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
		},
	};

	// Make a GET request to fetch videos based on the provided query
	const { data } = await axios.get(
		`${BASE_URL}/search?part=snippet&q=${query}`,
		options
	);

	return data;
};

export const fetchVideoDetail = async (ID) => {
	const BASE_URL = "https://youtube-v31.p.rapidapi.com";
	const options = {
		url: BASE_URL,
		params: {
			part: "snippet,statistics",
		},
		headers: {
			"X-RapidAPI-Key":
				"45687a246amsh2c4dfe601637c21p13d93cjsn96bc772e5343",
			"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
		},
	};

	// Make a GET request to fetch videos based on the provided query
	const { data } = await axios.get(
		`${BASE_URL}/videos?part=snippet&id=${ID}`,
		options
	);

	return data;
};

export const fetchJobs = (language) => {
	let filteredJobs = [];
	if (language === "New") {
		return jobs;
	} else {
		jobs.forEach((job) => {
			job.programmingLanguages.forEach((lang) => {
				if (lang === language) {
					filteredJobs.push(job);
				}
			});
		});
	}
	return filteredJobs;
};

export const fetchJob = (ID) => {
	jobs.forEach((job) => {
		if (job.id == ID) {
			return job;
		}
	});
};

export function getImageURL(logo) {
	return new URL(`../assets/logo/${logo}`, import.meta.url).href;
}
