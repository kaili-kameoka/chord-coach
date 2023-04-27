export const chordTypes = {
	dim: "Diminished",
	min: "Minor",
	maj: "Major",
	aug: "Augmented",
	dim7: "Diminished 7th",
	halfDim7: "Half Diminished 7th",
	min7: "Minor 7th",
	majMin7: "Major Minor 7th",
	maj7: "Major 7th"
}

export type ChordTypeShortName = keyof typeof chordTypes;
export type ChordTypeLongName = typeof chordTypes[ChordTypeShortName];

export interface Chord {
	mainSrc: string;
	hintSrc: string;
	type: ChordTypeLongName;
}