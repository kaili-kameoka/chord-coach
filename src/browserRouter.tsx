import {createBrowserRouter, RouteObject} from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";

const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />
	}
];

export const browserRouter = createBrowserRouter(routes)