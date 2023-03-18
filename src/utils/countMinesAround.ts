/**
 * Conta o número de minas ao redor de uma caixa em uma matriz de minas.
 * @param {boolean[][]} isMine - Matriz de minas.
 * @param {number} row - Índice da linha da caixa.
 * @param {number} col - Índice da coluna da caixa.
 * @returns {number} - O número de minas ao redor da caixa.
 */
function countMinesAround(isMine: boolean[][], row: number, col: number): number {
	const positions = [
		[-1, -1], [-1, 0], [-1, 1],
		[0, -1],           [0, 1],
		[1, -1],  [1, 0],  [1, 1]
	]
  
	let count = 0
	for (const pos of positions) {
		const r = row + pos[0]
		const c = col + pos[1]
		if (r >= 0 && r < isMine.length && c >= 0 && c < isMine[0].length && isMine[r][c]) {
			count++
		}
	}
  
	return count
}

export default countMinesAround