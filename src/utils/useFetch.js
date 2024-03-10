import { useState, useEffect } from "react";

// as it uses useState function, It will execute only once on page load/reload ↻

const useFetch = (url) => {
	const [data, set_data] = useState(null);
	const [isPending, set_isPending] = useState(true);
	const [error, set_error] = useState(null);

	// assign blogs from the database and renders it at the start(passing empty list)
	useEffect(() => {
		const abortController = new AbortController();

		fetch(url)
			.then((res) => {
				//checks if there is a communication error and throws an error
				if (!res.ok) {
					throw Error("Error : Could not fetch from json");
				} // not necessary
				return res.json(); //fetch resource from a server
			})
			.then((data) => {
				// converts resource to a json data
				set_data(data);
				console.log(data);
				set_isPending(false);
			})
			.catch((err) => {
				// error handling
				if (err.name === "AbortError") {
					console.info("Fetch Aborted");
				} else {
					console.log(err.message);
					set_error(err.message);
					set_isPending(false);
				}
			});

		return () => {
			abortController.abort;
		}; //"cleanup" - abort if we move to another page quickly
	}, []);

	return { data, isPending, error }; // returns the values in a object form
};

export default useFetch;
