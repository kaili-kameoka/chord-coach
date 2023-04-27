import { Button } from "react-bootstrap";
import { ChordTypeLongName, chordTypes } from "../../chords/types";
import { FC, MouseEventHandler } from "react";
import { MixedAnswerState } from "./types";
import { defaultAnswerState } from "./constants";

interface SeventhChordsAnswersProps {
	answer: ChordTypeLongName;
	setAnswerState: (state: MixedAnswerState) => void;
	currentAnswerState: MixedAnswerState;
	onCorrectAnswer: () => void;
}

const MixedChordsAnswers: FC<SeventhChordsAnswersProps> = ({
	answer,
	setAnswerState,
	currentAnswerState,
	onCorrectAnswer
}) => {
	const checkAnswer: MouseEventHandler = (e) => {
		const newAnswer = e.currentTarget.getAttribute('value');
		console.log(newAnswer, currentAnswerState);
		if (answer === newAnswer) {
			setAnswerState(defaultAnswerState);
			onCorrectAnswer();
		} else {
			console.log({
				...currentAnswerState,
				[newAnswer as keyof MixedAnswerState]: true
			})
			setAnswerState({
				...currentAnswerState,
				[newAnswer as keyof MixedAnswerState]: true
			});
		}
	}
	return (
		<>
			<p className={'d-flex justify-content-center gap-3'}>
				<Button
					value={chordTypes.dim7}
					onClick={checkAnswer}
					variant={currentAnswerState["Diminished 7th"] ? 'danger' : 'dark'}
				>
					Diminished 7th
				</Button>
				<Button
					value={chordTypes.halfDim7}
					onClick={checkAnswer}
					variant={currentAnswerState["Half Diminished 7th"] ? 'danger' : 'dark'}
				>
					Half Diminished 7th
				</Button>
				<Button
					value={chordTypes.min7}
					onClick={checkAnswer}
					variant={currentAnswerState["Minor 7th"] ? 'danger' : 'dark'}
				>
					Minor 7th
				</Button>
				<Button
					value={chordTypes.majMin7}
					onClick={checkAnswer}
					variant={currentAnswerState["Major Minor 7th"] ? 'danger' : 'dark'}
				>
					Major Minor 7th
				</Button>
				<Button
					value={chordTypes.maj7}
					onClick={checkAnswer}
					variant={currentAnswerState["Major 7th"] ? 'danger' : 'dark'}
				>
					Major 7th
				</Button>
			</p>
			<p className={'d-flex justify-content-center gap-3'}>
				<Button
					value={chordTypes.dim}
					onClick={checkAnswer}
					variant={currentAnswerState["Diminished"] ? 'danger' : 'dark'}
				>
					Diminished
				</Button>
				<Button
					value={chordTypes.min}
					onClick={checkAnswer}
					variant={currentAnswerState["Minor"] ? 'danger' : 'dark'}
				>
					Minor
				</Button>
				<Button
					value={chordTypes.maj}
					onClick={checkAnswer}
					variant={currentAnswerState["Major"] ? 'danger' : 'dark'}
				>
					Major
				</Button>
				<Button
					value={chordTypes.aug}
					onClick={checkAnswer}
					variant={currentAnswerState["Augmented"] ? 'danger' : 'dark'}
				>
					Augmented
				</Button>
			</p>
		</>
	)
}

export default MixedChordsAnswers;