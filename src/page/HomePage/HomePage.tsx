import { Col, Row } from "react-bootstrap";
import RouterLinkButton from "../../components/RouterLinkButton/RouterLinkButton";

const HomePage = () => {
	return (
			<>
				<h1 className={'display-1 text-center'}>
					Chord Coach
				</h1>
				<Row className="my-5 d-flex justify-content-center">
					<Col md={6} className={'d-flex flex-column align-items-center'}>
						<p className="d-flex gap-3 w-100">
							<RouterLinkButton className={'flex-grow-1'} to={'melodic-intervals'} variant={'dark'}>
								Melodic Intervals
							</RouterLinkButton>
							<RouterLinkButton className={'flex-grow-1'} to={'harmonic-intervals'} variant={'dark'}>
								Harmonic Intervals
							</RouterLinkButton>
						</p>
						<p className="d-flex gap-3 w-100">
							<RouterLinkButton className={'flex-grow-1'} to={'triad-chords'} variant={'dark'}>
								Triad Chords
							</RouterLinkButton>
							<RouterLinkButton className={'flex-grow-1'} to={'inverted-chords'} variant={'dark'}>
								Chord Inversions
							</RouterLinkButton>
						</p>
						<p className="d-flex w-100">
							<RouterLinkButton className={'flex-grow-1'} to={'7th-chords'} variant={'dark'}>
								7th Chords
							</RouterLinkButton>
						</p>
					</Col>
				</Row>
			</>
	)
}

export default HomePage;
