import { useGame } from "../context/GameContext";

export default function Board() {
  const { score, restartGame, board } = useGame();

  return (
    <>
      <header className="header">
        <span>Score: {score}</span>
        <button onClick={restartGame}>Restart</button>
      </header>
      <table className="grid">
        {board.map((hasMole, index) => (
          <Hole key={index} hasMole={hasMole} />
        ))}
      </table>
    </>
  );
}

function Hole({ hasMole }) {
  const { whackMole } = useGame();
  if (hasMole) return <td onClick={whackMole} className="mole" />;
  return <td className="hole" />;
}
