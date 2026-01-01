import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const INITIAL_GAME_BORAD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2'
};

// Derive active player
function deriveActivePlayer(prevGameTurns) {
    let currentPlayer = 'X';

    if (prevGameTurns.length > 0 && prevGameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

const gameBoardCreator = (gameTurns) => {
    // Game board
    const gameBoard = [...INITIAL_GAME_BORAD.map(innerArray => [...innerArray])];

    for (const turn of gameTurns) {
        const {cell, player} = turn;
        const {row, col} = cell;
        gameBoard[row][col] = player;
    }
    return gameBoard;
}

const winnerEvaluator = (gameBoard, winner, players, gameTurns) => {
    for (const c of WINNING_COMBINATIONS) {
        const squareSymbol1 = gameBoard[c[0].row][c[0].column];
        const squareSymbol2 = gameBoard[c[1].row][c[1].column];
        const squareSymbol3 = gameBoard[c[2].row][c[2].column];

        console.log(squareSymbol1, squareSymbol2, squareSymbol3);

        if (squareSymbol1 && squareSymbol1 === squareSymbol2 && squareSymbol2 === squareSymbol3) {
            winner = players[squareSymbol1];
        }
    }

    let draw = false;

    if (!winner && gameTurns.length === 9) {
        draw = true;
    }
    return {winner, draw};
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);

    let activePlayer = deriveActivePlayer(gameTurns);

    const [players, setPlayers] = useState(PLAYERS)

    const gameBoard = gameBoardCreator(gameTurns);

    let winner;
    const __ret = winnerEvaluator(gameBoard, winner, players, gameTurns);
    winner = __ret.winner;
    let draw = __ret.draw;

    function handleSelectSquare(rIndex, cIndex) {
        setGameTurns((prevGameTurns) => {
            let currentPlayer = deriveActivePlayer(prevGameTurns);

            return [
                {cell: {row: rIndex, col: cIndex}, player: currentPlayer},
                ...prevGameTurns];
        });

    }

    function restartGame() {
        setGameTurns([]);
    }

    function setPlayerName(symbol, name) {
        setPlayers(oldPlayers => {
            return {
                ...oldPlayers,
                [symbol]: name
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player playerName={PLAYERS.X} playerSymbol={"X"} isActive={activePlayer === 'X'}
                            setPlayerName={setPlayerName}/>
                    <Player playerName={PLAYERS.O} playerSymbol={"O"} isActive={activePlayer === 'O'}
                            setPlayerName={setPlayerName}/>
                </ol>
                {(winner || draw) && <GameOver winner={winner} restartGame={restartGame}/>}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
            </div>
            <Log gameTurns={gameTurns}/>
        </main>
    )
}

export default App
