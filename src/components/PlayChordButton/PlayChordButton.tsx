import { Button } from "react-bootstrap";
import { FC, ReactNode } from "react";

interface PlayChordButtonProps {
	src: string;
	children: ReactNode;
}

const PlayChordButton: FC<PlayChordButtonProps> = ({src, children}) => {
	const audio = new Audio();

	const makeOnClick = (src: string) => {
		audio.src = src;
		return () => {
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