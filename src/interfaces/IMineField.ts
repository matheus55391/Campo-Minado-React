import GameState from './GameState'
import IBoard from './IBoard'

interface IMineField {
    board: IBoard;
    mines: number;
    minesLeft: number;
    gameState: GameState;
}

export default IMineField