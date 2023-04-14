import { FC, useEffect, useRef, useState } from "react";

const TIMER_DURATION_IN_SECONDS = 10;

interface TimerProps {
	onComplete: () => void;
}

const Timer: FC<TimerProps> = ({ onComplete }) => {
	const ref = useRef<null | NodeJS.Timer>(null);
	const [timerText, setTimerText] = useState<string>('00:00');

	const getDeadTime = (): Date => {
		let deadline = new Date();

		deadline.setSeconds(deadline.getSeconds() + TIMER_DURATION_IN_SECONDS)
		return deadline;
	}

	const clearTimer = (deadline: Date) => {
		setTimerText('01:00');

		if (ref.current) clearInterval(ref.current);

		ref.current = setInterval(() => {
			startTimer(deadline)
		}, 1000)
	}

	const startTimer = (deadline: Date) => {
		const [total, minutes, seconds] = getTimeRemaining(deadline);
		let newTimeText: string = minutes > 9 ? minutes + ":" : '0' + minutes + ":";
		newTimeText += seconds > 9 ? seconds : '0' + seconds;

		if (total > 0) {
			setTimerText(newTimeText)
		}

		if (total <= 0) {
			onComplete();
		}
	}

	const getTimeRemaining = (deadline: Date) => {
		const now = new Date();
		const total = deadline.getTime() - now.getTime();
		const minutes = Math.floor((total / 1000) % 60);
		const seconds = Math.floor((total / 1000 / 60) % 60);
		return [total, seconds, minutes];
	}

	useEffect(() => {
		return () => {
			clearTimer(getDeadTime())
		};
	}, []);

	return (
			<p className="text-center display-1">{timerText}</p>
	)
}

export default Timer;