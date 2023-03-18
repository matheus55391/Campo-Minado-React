import { useState, useEffect } from "react";
import Board from "./components/Board";

function App() {
  const [key, setKey] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (gameOver) {
      pauseTimer();
    }
  }, [gameOver]);

  const handleReset = () => {
    setGameOver(false);
    setTime(0);
    setKey(key + 1);
    playTimer();
  };

  const handleGameOver = () => {
    setGameOver(true);
    pauseTimer();
  };

  useEffect(() => {
    playTimer();
    return pauseTimer;
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
  };

  const playTimer = () => {
    const id = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    setIntervalId(id);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between bg-gray-200 py-2 px-4">
        <h1 className="text-2xl font-bold">Campo Minado</h1>
        <div className="flex items-center">
          <span className="text-lg font-medium mr-4">{formatTime(time)}</span>
          <button
            className={`p-2 rounded-md ${
              gameOver ? "bg-red-500 text-white cursor-default" : "bg-blue-500 text-white"
            }`}
            onClick={handleReset}
          >
            {gameOver ? "GAMEOVER" : "Reset"}
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Board
          bombPercentage={20}
          key={key}
          isGameOver={gameOver}
          onGameOver={handleGameOver}
        />
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
