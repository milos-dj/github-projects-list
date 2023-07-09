const ErrorDetails = ({ details }) => {
	return (
		<div className="container error-details">
			<span>Error</span>
			<p>{details.message}</p>
		</div>
	);
};

export default ErrorDetails;
