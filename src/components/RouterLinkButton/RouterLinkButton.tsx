import { Button, ButtonProps } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FC, ReactNode } from "react";

interface RouterLinkButtonProps extends ButtonProps {
	to: string;
	children: ReactNode;
}

const RouterLinkButton: FC<RouterLinkButtonProps> = ({ to, children, ...rest }) => {
	return (
			<LinkContainer to={to}>
				<Button {...rest}>{children}</Button>
			</LinkContainer>
	)
}

export default RouterLinkButton;