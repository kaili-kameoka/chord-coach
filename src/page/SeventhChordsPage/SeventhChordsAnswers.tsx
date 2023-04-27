import { Button } from "react-bootstrap";
import { ChordTypeLongName, chordTypes } from "../../chords/types";
import { FC, MouseEventHandler } from "react";
import { SeventhAnswerState } from "./types";
import { defaultAnswerState } from "./constants";

interface SeventhChordsAnswersProps {
	answer: ChordTypeLongName;
	setAnswerState: (state: SeventhAnswerState) => void;
	currentAnswerState: SeventhAnswerState;
	onCorrectAnswer: () => void;
}

const SeventhChordsAnswers: FC<SeventhChordsAnswersProps> = ({
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
				[newAnswer as keyof SeventhAnswerState]: true
			})
			setAnswerState({
				...currentAnswerState,
				[newAnswer as keyof SeventhAnswerState]: true
			});
		}
	}
	return (
		<div className={'d-flex justify-content-center gap-3'}>
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
		</div>
	)
}

export default SeventhChordsAnswers;