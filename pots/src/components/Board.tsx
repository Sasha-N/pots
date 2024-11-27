import Square from './Square';
import { GameState } from '../constants/constants';
import { useReducer } from 'react';
import GameReducer from '../reducers/reducer';
import Button from './Button';
import { generateItems } from '../utils/utils';

const initialState: GameState =
{
    items: generateItems(),
    completed: false,
}

const Board = () => {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    const handleMove = (position: number) => {
        dispatch({ type: 'MOVE', payload: position });
    }

    const handleShuffle = () => {
        dispatch({ type: 'SHUFFLE' });
    }

    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 200px)',
        boxShadow: '15px 10px 5px #0b0c0b',
    }

    const imageStyle = {
        backgroundImage: 'url(/images/monster.jpg)',
        backgroundSize: 'cover',
        width: '600px',
        height: '600px',
        boxShadow: '0 0 45px #d5d21c',
    }

    return (
        <>
            <Button onClick={() => handleShuffle()} />
            {!state.completed && <div style={boardStyle}>
                {state.items.map((square, index) =>
                    <Square key={index} value={square} onClick={() => handleMove(index)} />
                )}
            </div>}
            {state.completed && <div style={imageStyle}></div>}
        </>
    )
}

export default Board;
