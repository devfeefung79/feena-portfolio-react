import './custom.css';

import Icon from '@mdi/react';

const CustomLink = ({ url, text, icon, isOpenNewTab }) => {  
return (
    <div className='customLink'>
        <a href={url} target={isOpenNewTab ? "_blank" : "_self"}>
            {icon && <Icon path={icon} size={1}/>}
            <span>{text}</span>
        </a>
    </div>)
}   

export default CustomLink;