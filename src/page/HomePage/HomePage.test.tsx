import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import setupPageTest from "../setupPageTest";

const title: string = 'Chord Coach';
const melodicIntervalButtonTest = 'Melodic Intervals';
const harmonicIntervalButtonText = 'Harmonic Intervals';
const triadButtonText = 'Triad Chords';
const inversionsButonText = 'Chord Inversions';
const seventhChordsButtonText = '7th Chords';

describe('Home Page', function () {
	it('should have a title', function () {
		setupPageTest(<HomePage />);
		expect(screen.getByText(title)).toBeInTheDocument();
	});

	it('should have a Melodic Interval button', function () {
		setupPageTest(<HomePage />);
		expect(screen.getByText(melodicIntervalButtonTest)).toBeInTheDocument();
	});

	it('should Harmonic Interval button', function () {
		setupPageTest(<HomePage />);
		expect(screen.getByText(harmonicIntervalButtonText)).toBeInTheDocument();
	});

	it('should Triad Chords button', function () {
		setupPageTest(<HomePage />);
		expect(screen.getByText(triadButtonText)).toBeInTheDocument();
	});

	it('should Chord Inversions button', function () {
		setupPageTest(<HomePage />);
		expect(screen.getByText(inversionsButonText)).toBeInTheDocument();
	});

	it('should 7th Chords button', function () {
		setupPageTest(<HomePage />);
		expect(screen.getByText(seventhChordsButtonText)).toBeInTheDocument();
	});
});
