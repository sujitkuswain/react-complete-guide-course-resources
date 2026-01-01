export default function Log({gameTurns}) {
    return (
        <ol id="log">
            {
                gameTurns.map(t =>
                    <li key={`${t.player}-${t.cell.row}-${t.cell.col}`}>
                        {`Player ${t.player} selected row ${t.cell.row + 1}, column ${t.cell.col + 1}`}
                    </li>)
            }
        </ol>
    );
}