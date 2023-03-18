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