/**
 * Manipula a revelação de uma célula do tabuleiro.
 * 
 * @param rowIndex O índice da linha da célula a ser revelada.
 * @param colIndex O índice da coluna da célula a ser revelada.
 * @param board O tabuleiro do jogo, representado como uma matriz de números.
 * @param onGameOver A função a ser chamada quando o jogo acabar.
 */
const handleBoxReveal = (rowIndex: number, colIndex: number, board: number[][], onGameOver: () => void) => {
    if (board[rowIndex][colIndex] === 1) {
        onGameOver();
    }
};

export default handleBoxReveal;
  