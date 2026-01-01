import {useState} from "react";

export default function Player({playerName, playerSymbol, isActive, setPlayerName}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerNameState, setPlayerNameState] = useState(playerName);

    let currentButton = "Edit";
    if (isEditing) {
        currentButton = "Save";
    }

    function handleEdit() {
        setIsEditing(editStatus => !editStatus);
        if (isEditing) {
            setPlayerName(playerSymbol, playerNameState);
        }
    }

    function savePlayerName(e) {
        setPlayerNameState(e.target.value)
    }

    let playerNameDisplay = playerNameState;
    if (isEditing) {
        playerNameDisplay = (
            <input
                type="text"
                value={playerNameState}
                onChange={savePlayerName}
            />
        )
    } else {
        playerNameDisplay = (<span className="player-name">{playerNameState}</span>);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
            {playerNameDisplay}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEdit}>{currentButton}</button>
        </li>
    )
}