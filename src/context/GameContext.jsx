import { createContext, useContext, useState } from "react";

const GameContext = createContext();
const randomNumber = () => {
  return Math.floor(Math.random() * 9);
};

export function GameProvider({ children }) {
  const [board, setBoard] = useState(makeBoard());
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [molePosition, setMolePosition] = useState(randomNumber());

  const startGame = () => {
    setScore(0);
    setIsPlaying(true);
    setMolePosition();
    setBoard(makeBoard());
  };

  const restartGame = () => {
    setIsPlaying(false);
    setScore(0);
    setBoard(makeBoard());
  };

  const whackMole = () => {
    setScore((prev) => prev + 1);
    setBoard(makeBoard(board));
  };

  return (
    <GameContext.Provider
      value={{
        score,
        isPlaying,
        molePosition,
        board,
        startGame,
        restartGame,
        whackMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("Use useGame inside of GameProvider.");
  }
  return context;
}

function makeBoard(board = []) {
  const newBoard = Array(9).fill(false);
  let mole = randomNumber();
  while (board[mole]) {
    mole = randomNumber();
  }
  newBoard[mole] = true;
  return newBoard;
}
