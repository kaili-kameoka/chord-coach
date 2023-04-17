import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import PlayChordButton from "../PlayChordButton/PlayChordButton";
import { FC } from "react";

interface ControlsProps {
	mainSrc: string;
	hintSrc: string;
	score: number;
}

const Controls: FC<ControlsProps> = ({ mainSrc, hintSrc, score }) => {
	return (
			<div className="d-flex justify-content-between my-5">
				<PlayChordButton src={hintSrc}>
					<FontAwesomeIcon icon={faCircleQuestion} size={'2xl'}/>
				</PlayChordButton>
				<PlayChordButton src={mainSrc}>
					<FontAwesomeIcon icon={faVolumeUp} size={'2xl'}/>
				</PlayChordButton>
				<p className="h1">Score: {score}</p>
			</div>
	)
}

export default Controls;