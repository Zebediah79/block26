import { useGame } from "./context/GameContext";
import Welcome from "./components/Welcome";
import Board from "./components/Board";

function App() {
  const { isPlaying } = useGame();
  return <>{isPlaying ? <Board /> : <Welcome />}</>;
}

export default App;
