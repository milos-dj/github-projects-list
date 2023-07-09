import React from "react";
import { useParams } from "react-router-dom";

import RepoTags from "./RepoTags";
import RepoHeader from "./RepoHeader";

const RepoPage = () => {
	const { name } = useParams();

	return (
		<div className="container">
			<RepoHeader name={name} />
			<RepoTags name={name} />
		</div>
	);
};

export default RepoPage;
