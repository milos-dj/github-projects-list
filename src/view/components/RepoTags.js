import React, { useEffect } from "react";

import { fetchTags } from "../../services/ApiServices";
import { useCustomContext } from "../../context/ContextProvider";
import ErrorDetails from "./errors/ErrorDetails";

const RepoTags = ({ name }) => {
	const context = useCustomContext();

	useEffect(() => {
		const fetchTagsData = async () => {
			const [res, error] = await fetchTags(name);
			context.setError(error);
			context.setTags(res?.data);
		};

		fetchTagsData();
	}, []);

	return (
		<div className="tags">
			<div className="tags-header">Tags</div>
			<div className="tags-items">
				{context.error !== null ? (
					<ErrorDetails details={context.error} />
				) : (
					<div>
						{context.tags && context.tags.length > 0 ? (
							context.tags.map((tag, i) => (
								<div className="tag" key={i}>
									<h3>{tag.name}</h3>
									<div className="icon">
										<span>{tag.commit.sha}</span>
									</div>
								</div>
							))
						) : (
							<span className="tags-404">No tags published</span>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default RepoTags;
