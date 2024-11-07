import Square from './Square';

const state = [1, 2, 3, 4, 5, 6, 7, 8, null];

const Board = () => {
    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 200px)',
        boxShadow: '15px 10px 5px #0b0c0b',
    }
    return (
        <div style={boardStyle}>
            {state.map((square) =>
                <Square value={square} />
            )}
        </div>
    )
}

export default Board;
