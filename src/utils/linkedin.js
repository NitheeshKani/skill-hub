import axios from "axios";
import { JobWords } from "./constants";
export const newJob = [
	{
		id: "QixhLGMsaywtLGUsbixkLCAsVyxlLGIsICxELGUsdixlLGwsbyxwLGUsciwgLC0sICxELHIsdSxwLGE=",
		title: "Back-end Web Developer - Drupal",
		company: "Fastspot",
		description:
			"Salary: competitive salary, commensurate with experience...",
		image: "https://fonts.gstatic.com/s/i/googlematerialicons/event_available/v16/gm_grey-24dp/1x/gm_event_available_gm_grey_24dp.png",
		location: "Anywhere",
		employmentType: "Part time and fulltime",
		timeAgoPosted: "1 day ago",
		salaryRange: "",
	},
];
export const fetchLinkedInJobs = async (q) => {
	const options = {
		method: "GET",
		url: "https://jobs-api14.p.rapidapi.com/list",
		params: {
			query: q,
			location: "india",
			distance: "1.0",
			language: "en_GB",
			remoteOnly: "false",
			datePosted: "month",
			employmentTypes: "fulltime;parttime;intern;contractor",
			index: "0",
		},
		headers: {
			"X-RapidAPI-Key":
				"48015dfc15msha0f0daf4975ac1cp10e6f5jsneda3ce182c41",
			"X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const findWord = (str) => {
	JobWords.forEach((word) => {
		if (str.toLowerCase().includes(word.toLowerCase)) {
			return word;
		}
	});
	return str.toLowerCase();
};
