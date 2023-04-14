import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/Timer/Timer";


const MelodicIntervalsPage = () => {
	const navigate = useNavigate();

	const onComplete = () => {
		navigate('../complete');
	}

	return (
			<Container className={'d-flex flex-column justify-content-center vh-100'}>
				<Timer onComplete={onComplete} />
			</Container>
	)
}

export default MelodicIntervalsPage;