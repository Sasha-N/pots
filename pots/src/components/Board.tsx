import Square from './Square';
import { GameState } from '../constants/constants';
import { useReducer } from 'react';
import GameReducer from '../reducers/reducer';

const initialState: GameState =
{
    items: [1, 2, 4, 3, 6, 5, 7, 8, null],
    completed: false,
}

const Board = () => {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    const handleMove = (position: number) => {
        dispatch({type: 'MOVE', payload: position});
    }

    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 200px)',
        boxShadow: '15px 10px 5px #0b0c0b',
    }
    return (
        <div style={boardStyle}>
            {state.items.map((square, index) =>
                <Square key={index} value={square} onClick={() => handleMove(index)}/>
            )}
        </div>
    )
}

export default Board;
