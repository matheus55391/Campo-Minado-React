import { useState, useEffect } from "react";

interface SquareBoxProps {
  isBomb: boolean;
  numberValue: number;
  onReveal: () => void;
  disabled: boolean;
  isGameOver: boolean;
}

const SquareBox = ({
  isBomb,
  numberValue,
  onReveal,
  disabled,
  isGameOver,
}: SquareBoxProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isGameOver && isBomb) {
      setIsRevealed(true);
    }
  }, [isGameOver, isBomb]);

  const handleClick = () => {
    if (!disabled && !isRevealed) {
      setIsRevealed(true);
      onReveal();
    }
  };

  const defaultBoxClasses =
    "w-8 h-8 border border-black bg-white cursor-pointer";
  const revealedBoxClasses = isBomb ? "bg-red-600" : "bg-gray-200";
  const textClasses = "text-base font-bold";

  return (
    <div
      className={`${defaultBoxClasses} ${isRevealed ? revealedBoxClasses : ""}`}
      onClick={handleClick}
    >
      {isRevealed && (
        <div className="w-full h-full flex items-center justify-center">
          <span className={textClasses}>{isBomb ? "B" : numberValue}</span>
        </div>
      )}
    </div>
  );
};

export default SquareBox;
