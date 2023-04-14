import setupPageTest from "../../page/setupPageTest";
import RouterLinkButton from "./RouterLinkButton";
import React from "react";
import { screen } from "@testing-library/react";

const text = 'test';

describe('Router Link Button', function () {
	it('should take link props.', function () {
		setupPageTest(<RouterLinkButton to={'/'} >{text}</RouterLinkButton>);
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});