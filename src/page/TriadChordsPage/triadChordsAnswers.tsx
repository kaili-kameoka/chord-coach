import { Button } from "react-bootstrap";
import { ChordTypeLongName, chordTypes } from "../../chords/types";
import { FC, MouseEventHandler } from "react";
import { AnswerState } from "./types";
import { defaultAnswerState } from "./constants";

interface TriadChordsAnswersProps {
	answer: ChordTypeLongName;
	setAnswerState: (state: AnswerState) => void;
	currentAnswerState: AnswerState;
	onCorrectAnswer: () => void;
}

const TriadChordsAnswers: FC<TriadChordsAnswersProps> = ({
	answer,
	setAnswerState,
	currentAnswerState,
	onCorrectAnswer
}) => {
	const checkAnswer: MouseEventHandler = (e) => {
		const newAnswer = e.currentTarget.getAttribute('value');
		if (answer === newAnswer) {
			setAnswerState(defaultAnswerState);
			onCorrectAnswer();
		} else {
			setAnswerState({
				...currentAnswerState,
				[newAnswer as keyof AnswerState]: true
			});
		}
	}
	return (
		<div className={'d-flex justify-content-center gap-3'}>
			<Button
				value={chordTypes.dim}
				onClick={checkAnswer}
				variant={currentAnswerState.Diminished ? 'danger' : 'dark'}
			>
				Diminished
			</Button>
			<Button
				value={chordTypes.min}
				onClick={checkAnswer}
				variant={currentAnswerState.Minor ? 'danger' : 'dark'}
			>
				Minor
			</Button>
			<Button
				value={chordTypes.maj}
				onClick={checkAnswer}
				variant={currentAnswerState.Major ? 'danger' : 'dark'}
			>
				Major
			</Button>
			<Button
				value={chordTypes.aug}
				onClick={checkAnswer}
				variant={currentAnswerState.Augmented ? 'danger' : 'dark'}
			>
				Augmented
			</Button>
		</div>
	)
}

export default TriadChordsAnswers;