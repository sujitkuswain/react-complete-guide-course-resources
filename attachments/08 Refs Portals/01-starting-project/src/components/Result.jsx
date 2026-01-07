import {useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

export default function Result({ref, timeRemaining, time, resetTimer, ...props}) {
    const dialog = useRef();

    const userLost = timeRemaining <= 0;
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const score = Math.floor((1 - timeRemaining / (time * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            openDialog() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={resetTimer}>
            <h2> You {userLost ? "lost" : "win"} {!userLost && "and Score: " + score}</h2>
            <p>
                Target time was <strong>{time}</strong> seconds.
            </p>
            <p>
                You stopped time when <strong>{formattedTimeRemaining}</strong> seconds left.
            </p>
            <form method="dialog" onSubmit={resetTimer}>
                <button>
                    Close
                </button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}