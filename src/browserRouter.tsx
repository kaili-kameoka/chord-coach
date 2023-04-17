import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import Root from "./components/Root/Root";
import CompletePage from "./page/CompletePage/CompletePage";
import TriadChordsPage from "./page/TriadChordsPage/TriadChordsPage ";

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
				path: 'triad-chords',
				element: <TriadChordsPage />
			},
			{
				path: 'complete',
				element: <CompletePage />
			}
		]
	}
];

export const browserRouter = createBrowserRouter(routes)