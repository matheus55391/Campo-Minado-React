import { useState, useEffect } from "react";
import getAdjacentBombCount from "../utils/getAdjacentBombCount";
import handleBoxReveal from "../utils/handleBoxReveal";
import SquareBox from "./SquareBox";

interface BoardProps {
  bombPercentage: number;
  isGameOver: boolean;
  onGameOver: () => void;
}

const Board = ({ bombPercentage, isGameOver, onGameOver }: BoardProps) => {
  const [board, setBoard] = useState<number[][]>([]);

  useEffect(() => {
    // Criar o tabuleiro com o número de bombas especificado
    const newBoard = Array(10).fill(0).map(() => Array(10).fill(0));
    const totalBoxes = 10 * 10;
    const totalBombs = Math.round(totalBoxes * (bombPercentage / 100));
    let bombsPlaced = 0;

    while (bombsPlaced < totalBombs) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      if (newBoard[row][col] === 0) {
        newBoard[row][col] = 1;
        bombsPlaced++;
      }
    }

    setBoard(newBoard);
  }, [bombPercentage]);
  
  return (
    <div className="grid grid-cols-10 gap-0">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <SquareBox
              key={`${rowIndex}-${colIndex}`}
              isBomb={cell === 1}
              numberValue={
                  cell === 0
                      ? getAdjacentBombCount(board, rowIndex, colIndex)
                      : 0
              }
              onReveal={() => handleBoxReveal(rowIndex, colIndex, board, onGameOver)}
              disabled={isGameOver}
              isGameOver={isGameOver}
          />
        ))
      )}
    </div>
  );
};

export default Board;
