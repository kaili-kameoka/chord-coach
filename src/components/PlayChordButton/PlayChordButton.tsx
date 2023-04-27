import { Button } from "react-bootstrap";
import { FC, ReactNode } from "react";
import { log } from "util";

interface PlayChordButtonProps {
	src: string;
	children: ReactNode;
}

const PlayChordButton: FC<PlayChordButtonProps> = ({src, children}) => {
	const audio = new Audio();

	const makeOnClick = (src: string) => {
		audio.src = src;
		return () => {
			console.log(audio.src);
			audio.play().then((error) => {
				console.log(error);
			});

		}
	}

	return (
		<Button onClick={makeOnClick(src)}>
			{children}
		</Button>
	)
}

export default PlayChordButton;