import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found">
			<span>404</span>
			<p>Page not found</p>
			<Link to="/" className="button">
				Home
			</Link>
		</div>
	);
};

export default NotFound;
