import axios from "axios";
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
export const fetchLinkedInJobs = async (q, lo) => {
	const options = {
		method: "GET",
		url: "https://jobs-api14.p.rapidapi.com/list",
		params: {
			query: q,
			location: lo ? lo : "india",
			distance: "1.0",
			language: "en_GB",
			remoteOnly: "false",
			datePosted: "month",
			employmentTypes: "fulltime;parttime;intern;contractor",
			index: "0",
		},
		headers: {
			"X-RapidAPI-Key":
				"d25bbf6ba6mshdb5fbd5d4bb49fep1d0f08jsn5c5f7e96ddfc",
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

export const searchSplit = (str) => {
	return str.split(",");
};
