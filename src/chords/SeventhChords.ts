import c7DimFile from '../assets/c7-dim.mp3';
import c7DimHintFile from '../assets/c7-dim-hint.mp3';
import c7HalfDimFile from '../assets/c7-half-dim.mp3';
import c7HalfDimHintFile from '../assets/c7-half-dim-hint.mp3';
import c7MinFile from '../assets/c7-min.mp3';
import c7MinHintFile from '../assets/c7-min-hint.mp3';
import c7MajMinFile from '../assets/c7-maj-min.mp3';
import c7MajMinHintFile from '../assets/c7-maj-min-hint.mp3';
import c7MajFile from '../assets/c7-maj.mp3';
import c7MajHintFile from '../assets/c7-min-hint.mp3';

import { Chord, chordTypes } from "./types";

export const seventhChordData: Chord[] = [
	{
		mainSrc: c7DimFile,
		hintSrc: c7DimHintFile,
		type: chordTypes.dim7
	},
	{
		mainSrc: c7HalfDimFile,
		hintSrc: c7HalfDimHintFile,
		type: chordTypes.halfDim7
	},
	{
		mainSrc: c7MinFile,
		hintSrc: c7MinHintFile,
		type: chordTypes.min7
	},
	{
		mainSrc: c7MajMinFile,
		hintSrc: c7MajMinHintFile,
		type: chordTypes.majMin7
	},
	{
		mainSrc: c7MajFile,
		hintSrc: c7MajHintFile,
		type: chordTypes.maj7
	}
]