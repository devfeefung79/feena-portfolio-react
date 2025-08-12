import Icon from '@mdi/react';
import './custom.css';

const CustomButton = ({ type, text, onClick, disabled, icon}) => {

    console.log('CustomButton props:', { icon });

    switch (type) {
        case 'primary':
            return (
                <button className='customButton primary' onClick={onClick} disabled={disabled}>{icon && <Icon path={icon} size={1}/>}<span>{text}</span></button>
            );
        case 'submit':
            return (
                <button className='customButton submit' onClick={onClick} disabled={disabled}>{icon && <Icon path={icon} size={1}/>}<span>{text}</span></button>
            );
        default:
            return (
                <button className='customButton' onClick={onClick} disabled={disabled}><span>{text}</span>{icon && <span><Icon path={icon} size={1}/></span>}</button>
            );
    }

}

export default CustomButton;