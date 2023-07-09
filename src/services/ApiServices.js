import axios from "axios";

const get = async (url) => {
	try {
		const data = await axios.get(url);
		return [data, null];
	} catch (error) {
		return [null, error];
	}
};

export const fetchRepos = async () => {
	return get("https://api.github.com/users/octocat/repos");
};

export const fetchTags = async (name) => {
	return get("https://api.github.com/repos/octocat/" + name + "/tags");
};

export const fetchRepo = async (name) => {
	return get("https://api.github.com/repos/octocat/" + name);
};
