/**
 * Retorna a quantidade de bombas adjacentes a uma célula específica no tabuleiro.
 * 
 * @param board O tabuleiro do jogo, representado como uma matriz de números.
 * @param rowIndex O índice da linha da célula a ser verificada.
 * @param colIndex O índice da coluna da célula a ser verificada.
 * @returns O número de bombas adjacentes à célula.
 */
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
  
  export default getAdjacentBombCount;
  