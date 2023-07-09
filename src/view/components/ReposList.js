import { React, useEffect } from "react";
import { Link } from "react-router-dom";

import { useCustomContext } from "../../context/ContextProvider";
import { fetchRepos } from "../../services/ApiServices";
import ErrorDetails from "./errors/ErrorDetails";

const ReposList = () => {
	const context = useCustomContext();

	useEffect(() => {
		const fetchRepo = async () => {
			const [res, error] = await fetchRepos();
			context.setError(error);
			context.setRepos(res?.data || []);
		};

		fetchRepo();
	}, []);

	const indexOfLastPost = context.currentPage * context.postsPerPage;
	const indexOfFirstPost = indexOfLastPost - context.postsPerPage;
	const currentPosts = context.repos.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<div className="repositories">
			{context.error && <ErrorDetails details={context.error} />}
			{!context.error &&
				currentPosts.map((repo, i) => (
					<div className="single-repo" key={i}>
						<Link to={"/repo/" + repo.name} className="repo-title">
							{repo.name}
						</Link>
						<p className="repo-text">{repo.description}</p>
						<div className="repo-footer">
							<div className="repo-releases">
								<span className="repo-language-text">{repo.open_issues_count}</span>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default ReposList;
