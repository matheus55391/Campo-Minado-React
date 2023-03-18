import { useState, useEffect } from "react";
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

  const handleBoxReveal = (rowIndex: number, colIndex: number) => {
    if (board[rowIndex][colIndex] === 1) {
      onGameOver();
    }
  };
  const getAdjacentBombCount = (board: number[][], rowIndex: number, colIndex: number) => {
    const offsets = [-1, 0, 1];
    let count = 0;
  
    for (let i = 0; i < offsets.length; i++) {
      const row = rowIndex + offsets[i];
      if (row < 0 || row >= board.length) continue;
  
      for (let j = 0; j < offsets.length; j++) {
        const col = colIndex + offsets[j];
        if (col < 0 || col >= board[0].length) continue;
        if (row === rowIndex && col === colIndex) continue;
  
        if (board[row][col] === 1) {
          count++;
        }
      }
    }
  
    return count;
  };
  
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
            onReveal={() => handleBoxReveal(rowIndex, colIndex)}
            disabled={isGameOver}
            isGameOver={isGameOver}
          />
        ))
      )}
    </div>
  );
};

export default Board;
