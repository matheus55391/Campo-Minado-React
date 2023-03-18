import ISquareBox from './ISquareBox'

interface IBoard {
    rows: number;
    cols: number;
    boxes: ISquareBox[][];
}

export default IBoard