interface squareProps {
    value: number | null;
}

const Square: React.FC<squareProps> = ({value}) => {
    const imageName = value !== null ? `image${value}.jpg` : null;
    const squareStyle = {
        backgroundImage: imageName ? `url(/images/${imageName})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'black',
        width: '200px',
        height: '200px',
        color: 'white',
        fontSize: '50px',
        border: '1px solid black',
    }
    return (
        <div style={squareStyle}>
            {value !== null ? value : ''}
        </div>
    );
}

export default Square;