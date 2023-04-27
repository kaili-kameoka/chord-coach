import { Button } from "react-bootstrap";
import { FC, ReactNode } from "react";

interface PlayChordButtonProps {
	src: string;
	children: ReactNode;
}

const PlayChordButton: FC<PlayChordButtonProps> = ({ src, children}) => {
	const audio = new Audio();

	const makeOnClick = (src: string) => {
		audio.src = src;
		return async () => {
			try {
				await audio.play();
			} catch (error) {
				console.error(error)
			}
		}
	}

	return (
			<Button onClick={makeOnClick(src)}>
				{children}
			</Button>
	)
}

export default PlayChordButton;