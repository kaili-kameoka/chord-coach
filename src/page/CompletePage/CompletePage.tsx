import { useLocation } from "react-router-dom";
import RouterLinkButton from "../../components/RouterLinkButton/RouterLinkButton";

const CompletePage = () => {
	const {state} = useLocation();

	return (
		<>
			<p className={'h1'}>Final Score</p>
			<p className="display-1">{state.score}</p>
			<RouterLinkButton to={'/'}>Menu</RouterLinkButton>
		</>
	)
};

export default CompletePage;