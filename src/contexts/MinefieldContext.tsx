import { createContext, useState } from 'react'
import GameState from '../interfaces/GameState'
import IBoard from '../interfaces/IBoard'
import IMineField from '../interfaces/IMineField'
import generateMinefield from '../utils/generateMinefield'

interface IMinefieldContext {
  minefield: IMineField;
  setMinefield: (mineField: IMineField) => void;
  updateBoard: (board: IBoard) => void;
  updateMinesLeft: (minesLeft: number) => void;
  updateGameState: (gameState: GameState) => void;
}

export const MinefieldContext = createContext<IMinefieldContext>({
	minefield: {
		board: { rows: 0, cols: 0, boxes: [] },
		mines: 0,
		minesLeft: 0,
		gameState: GameState.NOT_STARTED,
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updateBoard: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updateMinesLeft: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updateGameState: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setMinefield: () => {},
})

interface IMinefieldProviderProps {
    children: React.ReactNode;
  }
  
export const MinefieldProvider: React.FC<IMinefieldProviderProps> = ({ children }: IMinefieldProviderProps) => {
	const [minefield, setMinefield] = useState<IMineField>(generateMinefield(10, 10, 10))

	const updateBoard = (board: IBoard) => {
		setMinefield({ ...minefield, board })
	}
  
	const updateMinesLeft = (minesLeft: number) => {
		setMinefield({ ...minefield, minesLeft })
	}
  
	const updateGameState = (gameState: GameState) => {
		setMinefield({ ...minefield, gameState })
	}
	
	return (
		<MinefieldContext.Provider value={{ minefield, setMinefield, updateBoard, updateMinesLeft, updateGameState }}>
			{children}
		</MinefieldContext.Provider>
	)
}