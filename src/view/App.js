import React from "react";

import ReposList from "./components/ReposList";
import Pagination from "./components/Pagination";

import "./App.css";
import "./AppResposive.css";

function App() {
	return (
		<div className="container">
			<ReposList />
			<Pagination />
		</div>
	);
}

export default App;
