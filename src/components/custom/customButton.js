import './custom.css';

const CustomButton = ({ type, text, onClick, disabled, ...props }) => {

    switch (type) {
        case 'primary':
            return (
                <button className='customButton primary' onClick={onClick} disabled={disabled}>{text}</button>
            );
        case 'submit':
            return (
                <button className='customButton submit' onClick={onClick} disabled={disabled}>{text}</button>
            );
        default:
            return (
                <button className='customButton' onClick={onClick} disabled={disabled}>{text}</button>
            );
    }

}

export default CustomButton;