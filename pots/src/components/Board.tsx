import Square from './Square';
import { GameState } from '../constants/constants'

const initialState: GameState =
{
    items: [1, 2, 4, 3, 5, 6, 7, 8, null],
    completed: false,
}

const Board = () => {
    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 200px)',
        boxShadow: '15px 10px 5px #0b0c0b',
    }
    return (
        <div style={boardStyle}>
            {initialState.items.map((square) =>
                <Square value={square} />
            )}
        </div>
    )
}

export default Board;
