import { useGame } from "../context/GameContext";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <div className="welcome-screen">
      <h1>Whack A Mole</h1>
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
}
