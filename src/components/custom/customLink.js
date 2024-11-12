import './custom.css';

import Icon from '@mdi/react';

const CustomLink = ({ url, text, icon }) => {  
return (
    <div className='customLink'>
        <a href={url} target='_blank'>
            <Icon path={icon} size={1}/>
            <span>{text}</span>
        </a>
    </div>)
}   

export default CustomLink;