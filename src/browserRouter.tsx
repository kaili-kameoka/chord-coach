import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import Root from "./components/Root/Root";
import TriadChordsPage from "./page/TriadChordsPage/TriadChordsPage ";
import SeventhChordsPage from "./page/SeventhChordsPage/SeventhChordsPage ";
import MixedChordsPage from "./page/MixedChordsPage/MixedChordsPage ";

const routes: RouteObject[] = [
	{
		path: '/',
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
				path: '7th-chords',
				element: <SeventhChordsPage />
			},
			{
				path: 'mixed-chords',
				element: <MixedChordsPage />
			}
		]
	}
];

export const browserRouter = createBrowserRouter(routes)
