import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./view/App";
import RepoPage from "./view/components/RepoPage";
import NotFound from "./view/components/errors/NotFound";
import ContextProvider from "./context/ContextProvider";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/repo/:name",
		element: <RepoPage />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
	</React.StrictMode>
);
