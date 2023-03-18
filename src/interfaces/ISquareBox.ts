interface ISquareBox {
    row: number;
    col: number;
    isRevealed: boolean;
    isMine: boolean;
    isFlagged: boolean;
    minesAround: number;
}
  
  
export default ISquareBox