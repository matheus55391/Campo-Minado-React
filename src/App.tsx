import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [key, setKey] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleReset = () => {
    setGameOver(false);
    setKey(key + 1);
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between bg-gray-200 py-2 px-4">
        <h1 className="text-2xl font-bold">Campo Minado</h1>
        <button
          className={`p-2 rounded-md ${gameOver ? "bg-red-500 text-white cursor-default" : "bg-blue-500 text-white"}`}
          onClick={handleReset}
        >
          {gameOver ? "GAMEOVER" : "Reset"}
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Board bombPercentage={10} key={key} isGameOver={gameOver} onGameOver={handleGameOver} />
      </div>
      <div className="flex items-center justify-center bg-gray-200 py-2">
        <span className="text-gray-600">
          Desenvolvido por Matheus Felipe Vieira Santiago
        </span>
      </div>
    </div>
  );
}

export default App;
