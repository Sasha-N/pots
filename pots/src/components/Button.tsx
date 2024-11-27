import './Button.css';
import { buttonProps } from '../constants/constants';

const Button: React.FC<buttonProps>  = ({ onClick }) => {
    return (
        <div className='button-container'>
            <button onClick={onClick}>Shuffle</button>
        </div>
    )
}

export default Button;