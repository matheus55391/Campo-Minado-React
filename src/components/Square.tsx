import React from 'react'
import ISquareBox from '../interfaces/ISquareBox'

interface SquareProps {
  square: ISquareBox;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ square, onClick }) => {
	const handleRightClick = (event:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault()
		onClick()
	}

	const defaultBoxClasses =
    'w-8 h-8 border border-black bg-white cursor-pointer'
	const revealedBoxClasses = square.isMine ? 'bg-red-600' : 'bg-gray-200'
	const textClasses = 'text-base font-bold'
	
	return (
		<div
			className={`${defaultBoxClasses} ${square.isRevealed ? revealedBoxClasses : ''}`}
			onClick={handleRightClick}
			
		>
			{square.isRevealed && (
				<div className="w-full h-full flex items-center justify-center">
					<span className={textClasses}>{square.isMine ? '💣' : square.minesAround}</span>
				</div>
			)}
		</div>

	)
}

export default Square
