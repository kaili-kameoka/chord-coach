import { Container } from "react-bootstrap";
import Timer from "../../components/Timer/Timer";
import { useEffect, useRef, useState } from "react";
import { seventhChordData } from "../../chords/SeventhChords";
import Controls from "../../components/Controls/Controls";
import SeventhChordsAnswers from "./SeventhChordsAnswers";
import { defaultAnswerState } from "./constants";
import NextChordModal from "../../components/NextChordModal/NextchordModal";
import RouterLinkButton from "../../components/RouterLinkButton/RouterLinkButton";

const MODAL_TIMEOUT = 3000

const SeventhChordsPage = () => {
	const [chordIndex, setChordIndex] = useState(-1);
	const [score, setScore] = useState(0);
	const [answerState, setAnswerState] = useState(defaultAnswerState);
	const [showModal, setShowModal] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const modalTimeOutRef = useRef<null | NodeJS.Timeout>(null);

	const onComplete = () => {
		setGameOver(true);
	};


	const setNewChord = () => {
		const newChordIndex = Math.floor(Math.random() * seventhChordData.length);
		if (newChordIndex === chordIndex) {
			setNewChord();
		} else {
			console.log(seventhChordData[newChordIndex])
			setChordIndex(newChordIndex);
		}
	}

	useEffect(() => {
		setNewChord();
	}, []);

	useEffect(() => {
		if (chordIndex >= 0 && !gameOver) {
			const audio = new Audio(seventhChordData[chordIndex].mainSrc)
			audio.play();
		}
	}, [chordIndex]);

	const onCorrectAnswer = () => {
		setScore(score + 1);
		handleShowModal();
	}

	const nextChord = () => {
		setAnswerState(defaultAnswerState);
		if (!gameOver) setNewChord();
	}

	const handleShowModal = () => {
		setShowModal(true);
		modalTimeOutRef.current = setTimeout(() => {
			setShowModal(false);
			nextChord();
		}, MODAL_TIMEOUT)
	}

	const handleCloseModal = () => {
		setShowModal(false);
		if (modalTimeOutRef.current) {
			clearTimeout(modalTimeOutRef.current)
		}
		nextChord();
	}


	return (
		<Container className={'d-flex flex-column justify-content-center vh-100'}>
			{gameOver ? (
				<>
					<p className="h2 text-center">Score</p>
					<p className="display-1 text-center">{score}</p>
					<p className={'d-flex justify-content-center gap-3'}>
						<RouterLinkButton variant={'dark'} to={'/'}>Menu</RouterLinkButton>
					</p>
				</>
			) : (
				<>
					<Timer onComplete={onComplete}/>
					{chordIndex >= 0 && (
						<>
							<Controls
								mainSrc={seventhChordData[chordIndex].mainSrc}
								hintSrc={seventhChordData[chordIndex].hintSrc}
								score={score}
							/>
							<SeventhChordsAnswers
								answer={seventhChordData[chordIndex].type}
								setAnswerState={setAnswerState}
								currentAnswerState={answerState}
								onCorrectAnswer={onCorrectAnswer}
							/>
							<NextChordModal show={showModal} handleClose={handleCloseModal}>
								<p className="display-1 text-center">
									C {seventhChordData[chordIndex].type}
								</p>
							</NextChordModal>
						</>
					)}
				</>
			)}
		</Container>
	)
}

export default SeventhChordsPage;