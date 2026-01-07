import {useRef, useState} from "react";
import Result from "./Result.jsx";

export default function TimerChallenge({title, targetTime}) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    const dialogResult = useRef();
    const timerId = useRef();

    if (timeRemaining <= 0) {
        clearInterval(timerId.current);
        dialogResult.current.openDialog();
    }

    function resetTimer() {
        setTimeRemaining(targetTime * 1000);
    }

    function startTimer() {
        timerId.current = setInterval(() => {
            setTimeRemaining(prev => prev - 10);
        }, 10)
    }

    function stopTimer() {
        clearInterval(timerId.current);
        dialogResult.current.openDialog();
    }

    return (
        <>
            <Result ref={dialogResult} timeRemaining={timeRemaining} time={targetTime} resetTimer={resetTimer}/>
            <section className="challenge">
                <h2>
                    {title}
                </h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerActive ? stopTimer : startTimer}>
                        {timerActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerActive ? 'active' : undefined}>
                    Timer is {!timerActive ? 'Not started.' : 'Running..'}
                </p>
            </section>
        </>
    )
}