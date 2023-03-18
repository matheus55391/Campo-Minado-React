import React from 'react'
import { useMinefield } from '../hooks/useMineField'
import Square from './Square'


const GameBoard: React.FC = () => {
	const { minefield, handleBoxClick } = useMinefield()

	return (
		<div className="grid grid-cols-10 grid-rows-10 gap-1">
			{minefield.board.boxes.map((row, rowIndex) => (
				row.map((box, colIndex) => (
					<Square
						key={`${rowIndex}-${colIndex}`}
						square={box}
						onClick={() => handleBoxClick(rowIndex, colIndex, false)}
					/>
				))
			))}
		</div>
	)
}

export default GameBoard
