import { Container } from "react-bootstrap";
import Timer from "../../components/Timer/Timer";
import { useEffect, useRef, useState } from "react";
import { triadChordData } from "../../chords/triads";
import Controls from "../../components/Controls/Controls";
import TriadChordsAnswers from "./triadChordsAnswers";
import { defaultAnswerState } from "./constants";
import NextChordModal from "../../components/NextChordModal/NextchordModal";
import RouterLinkButton from "../../components/RouterLinkButton/RouterLinkButton";

const MODAL_TIMEOUT = 3000

const TriadChordsPage = () => {
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
		const newChordIndex = Math.floor(Math.random() * triadChordData.length);
		if (newChordIndex === chordIndex) {
			setNewChord();
		} else {
			setChordIndex(newChordIndex);
		}
	}

	useEffect(() => {
		setNewChord();
	}, []);

	useEffect(() => {
		if (chordIndex >= 0 && !gameOver) {
			const audio = new Audio(triadChordData[chordIndex].mainSrc)
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
								mainSrc={triadChordData[chordIndex].mainSrc}
								hintSrc={triadChordData[chordIndex].hintSrc}
								score={score}
							/>
							<TriadChordsAnswers
								answer={triadChordData[chordIndex].type}
								setAnswerState={setAnswerState}
								currentAnswerState={answerState}
								onCorrectAnswer={onCorrectAnswer}
							/>
							<NextChordModal show={showModal} handleClose={handleCloseModal}>
								<p className="display-1 text-center">
									C {triadChordData[chordIndex].type}
								</p>
							</NextChordModal>
						</>
					)}
				</>
			)}
		</Container>
	)
}

export default TriadChordsPage;