import { ReactNode } from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render } from "@testing-library/react";

const setupPageTest = (element: ReactNode) => {
	const router = createMemoryRouter([{
		path: '/',
		element
	}]);

	render(<RouterProvider router={router} />);
}

export default setupPageTest;