import { useContext, useState } from "react";
import { Context } from "./Context";

export function useCustomContext() {
	return useContext(Context);
}

function ContextProvider({ children }) {
	const [repos, setRepos] = useState([]);
	const [repo, setRepo] = useState([]);
	const [tags, setTags] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);
	const [error, setError] = useState(null);

	const values = {
		repos: repos,
		repo: repo,
		tags: tags,
		currentPage: currentPage,
		postsPerPage: postsPerPage,
		error: error,
		setCurrentPage: setCurrentPage,
		setRepos: setRepos,
		setRepo: setRepo,
		setTags: setTags,
		setError: setError,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
}

export default ContextProvider;
