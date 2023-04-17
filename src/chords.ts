import cDimFile from './assets/c-dim.mp3';
import cDimHintFile from './assets/c-dim-hint.mp3';
import cMinFile from './assets/c-min.mp3';
import cMinHintFile from './assets/c-min-hint.mp3';
import cMajFile from './assets/c-maj.mp3';
import cMajHintFile from './assets/c-maj-hint.mp3';
import cAugFile from './assets/c-aug.mp3';
import cAugHintFile from './assets/c-aug-hint.mp3';
import { Chord, chordTypes } from "./types";

export const triadChordData: Chord[] = [
	{
		mainSrc: cDimFile,
		hintSrc: cDimHintFile,
		type: chordTypes.dim
	},
	{
		mainSrc: cMinFile,
		hintSrc: cMinHintFile,
		type: chordTypes.min
	},
	{
		mainSrc: cMajFile,
		hintSrc: cMajHintFile,
		type: chordTypes.maj
	},
	{
		mainSrc: cAugFile,
		hintSrc: cAugHintFile,
		type: chordTypes.aug
	}
]