import Picture from '../../assets/profile.jpeg';
import './index.css';

import { headerInfo } from '../../data/data';

const Header = () => {
  return (
    <div className="header">
      <div className='picture-container slide-right'>
        <img src={Picture} alt='feena'/>
      </div>
      <div className='content slide-left'>
        <h1>Hello, I’m <span className='name'>{headerInfo.name}</span></h1>
        <p>{headerInfo.summary}</p>
      </div>
    </div>
  );
}

export default Header;
