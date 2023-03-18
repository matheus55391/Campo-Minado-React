import { useState } from "react";

interface SquareBoxProps {
    isBomb: boolean;
    numberValue?: number;
  }
  
const SquareBox = ({ isBomb, numberValue }: SquareBoxProps) => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleClick = () => {
        setIsRevealed(true);
    };

    const defaultBoxClasses = 'w-8 h-8 border border-black bg-white cursor-pointer';
    const revealedBoxClasses = isBomb ? 'bg-red-600' : 'bg-gray-200';
    const textClasses = 'text-base font-bold';

    return (
        <div
        className={`${defaultBoxClasses} ${isRevealed ? revealedBoxClasses : ''}`}
        onClick={handleClick}
        >
        {isRevealed && (
            <div className="w-full h-full flex items-center justify-center">
            <span className={textClasses}>
                {isBomb ? 'B' : numberValue !== undefined ? numberValue : '0'}
            </span>
            </div>
        )}
        </div>
    );
};

export default SquareBox