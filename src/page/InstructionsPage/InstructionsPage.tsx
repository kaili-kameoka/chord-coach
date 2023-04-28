import RouterLinkButton from "../../components/RouterLinkButton/RouterLinkButton";

const InstructionsPage = () => {
	return (
		<>
			<h1>How it Works</h1>
			<p>Chord Coach consists of 3 games of </p>
			<ul>
				<li>
					<strong>Triad Chords</strong>: The triad chords game presents you with a random triad chord. You must choose
					the correct type of chord among the 4 choices (Diminished, Minor, Major or Augmented).
				</li>
				<li>
					<strong>7th Chords</strong>: The 7th chords game presents you with rando 7th chords. You must choose from 5 options (Diminished, Half Diminished, Minor, Major Minor, or Major).
				</li>
				<li>
					<strong>Mixed Chords</strong>: The Mixed Chords game presents ou with a random chord. It can be a Triad or a 7th chord. all options from the other two games are available.
				</li>
			</ul>
			<p>
				When you choose the correct chord type, a modal will appear with the correct answer. You can choose to close the modal, or wait for it to disappear before moving on to the next chords.
			</p>
			<p>
				When you choose the incorrect chord type, the button will turn red, and you can choose a different option.
			</p>
			<p>
				For each game, you have 30 seconds to identify as many chords as possible.
			</p>
			<p>
				<RouterLinkButton variant={'dark'} to={'/'}>Menu</RouterLinkButton>
			</p>
		</>
	)
}

export default InstructionsPage;