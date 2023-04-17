import { Button, Modal } from "react-bootstrap";
import { FC, ReactNode } from "react";

interface NextChordModalProps {
	show: boolean;
	handleClose: () => void;
	children: ReactNode;
}

const NextChordModal: FC<NextChordModalProps> = ({
	show,
	handleClose,
	children
}) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Body>
				{children}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="dark" onClick={handleClose}>
					Next
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default NextChordModal;