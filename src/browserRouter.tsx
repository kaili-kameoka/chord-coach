import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import MelodicIntervalsPage from "./page/MelodicIntervalsPage/MelodicIntervalsPage";
import Root from "./components/Root/Root";
import CompletePage from "./page/CompletePage/CompletePage";

const routes: RouteObject[] = [
	{
		path: '/chord-coach',
		element: <Root />,
		children: [
			{
				path: '',
				element: <HomePage/>
			},
			{
				path: 'melodic-intervals',
				element: <MelodicIntervalsPage />
			},
			{
				path: 'complete',
				element: <CompletePage />
			}
		]
	}
];

export const browserRouter = createBrowserRouter(routes)