import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCustomContext } from "../../context/ContextProvider";
import { fetchRepo } from "../../services/ApiServices";
import ErrorDetails from "./errors/ErrorDetails";

const RepoHeader = ({ name }) => {
	const context = useCustomContext();

	useEffect(() => {
		const fetchRepoData = async () => {
			const [res, error] = await fetchRepo(name);
			context.setError(error);
			context.setRepo(res?.data);
		};

		fetchRepoData();
	}, []);

	return (
		<div className="header">
			{context.error !== null ? (
				<ErrorDetails details={context.error} />
			) : (
				<div>
					<div className="user-info">
						<img src={context.repo.owner && context.repo.owner.avatar_url}></img>
						<span>{context.repo.owner && context.repo.owner.login}</span>
					</div>
					<div className="repo-details">
						<div className="repo-icon">
							<span>{context.repo.name}</span>
						</div>

						<div className="fork-icon">
							<span>{context.repo.forks_count}</span>
						</div>

						<div className="watchers-icon">
							<span>{context.repo.watchers_count}</span>
						</div>
					</div>
					<Link to="/" className="button">
						Back
					</Link>
				</div>
			)}
		</div>
	);
};

export default RepoHeader;
