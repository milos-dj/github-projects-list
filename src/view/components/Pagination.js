import React from "react";
import { useCustomContext } from "../../context/ContextProvider";

const Pagination = () => {
	const context = useCustomContext();

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(context.repos.length / context.postsPerPage); i++) {
		pageNumbers.push(i);
	}

	const paginate = (pageNumber) => context.setCurrentPage(pageNumber);

	return (
		<div className="pagination">
			{pageNumbers.map((number, i) =>
				number === context.currentPage ? (
					<a className="current" onClick={() => paginate(number)} key={i}>
						{number}
					</a>
				) : (
					<a onClick={() => paginate(number)} key={i}>
						{number}
					</a>
				)
			)}
		</div>
	);
};

export default Pagination;
