import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
    return (
        <>
            <Player/>
            <div id="challenges">
                <TimerChallenge title={"easy"} targetTime={+15}/>
                <TimerChallenge title={"medium"} targetTime={+10}/>
                <TimerChallenge title={"hard"} targetTime={+5}/>
                <TimerChallenge title={"pro"} targetTime={+1}/>
            </div>
        </>
    );
}

export default App;
