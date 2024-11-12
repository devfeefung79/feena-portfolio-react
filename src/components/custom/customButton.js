import './custom.css';

const CustomButton = ({ type, text }) => {
    return (
        type === 'primary' ?
        <div className='customButton primary'>{text}</div> :
        <div className='customButton'>{text}</div>
    );
}

export default CustomButton;