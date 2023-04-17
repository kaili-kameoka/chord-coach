export const chordTypes = {
	dim: "Diminished",
	min: "Minor",
	maj: "Major",
	aug: "Augmented"
}

export type ChordTypeShortName = keyof typeof chordTypes;
export type ChordTypeLongName = typeof chordTypes[ChordTypeShortName];

export interface Chord {
	mainSrc: string;
	hintSrc: string;
	type: ChordTypeLongName;
}