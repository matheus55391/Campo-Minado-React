import React from 'react'
import ISquareBox from '../interfaces/ISquareBox'

interface SquareProps {
  square: ISquareBox;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ square, onClick }) => {
	const handleRightClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		onClick()
	}

	return (
		<button
			className={`relative flex justify-center items-center bg-gray-300 w-8 h-8 rounded-sm border border-gray-400 ${square.isRevealed && !square.isMine ? 'bg-black text-white' : ''} ${square.isRevealed && square.isMine ? 'bg-gray-100' : ''} ${square.isMine ? 'text-red-500' : ''} ${square.isFlagged ? 'bg-yellow-300' : ''}`}
			onClick={onClick}
			onContextMenu={handleRightClick}
		>
			{square.isRevealed && !square.isMine && square.minesAround !== 0 && (
				<span className={`absolute text-${square.minesAround}-500 text-xs`}>{square.minesAround}</span>
			)}
			{square.isRevealed && square.isMine && (
				<i className="absolute text-red-500 text-xl material-icons">💣</i>
			)}
			{!square.isRevealed && square.isFlagged && (
				<i className="absolute text-yellow-800 text-xl material-icons">flag</i>
			)}
		</button>
	)
}

export default Square
