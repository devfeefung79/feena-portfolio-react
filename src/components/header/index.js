import './index.css';

import Picture from '../../assets/profile.jpeg';
import CustomLink from '../custom/customLink';

import { headerInfo } from '../../data/data';

const Header = () => {
  return (
    <div id="header" className="header">
      <div className='header-links'>
        <CustomLink isOnHeader url='#about' text='About'/>
        <CustomLink isOnHeader url='#projects' text='Projects'/>
        <CustomLink isOnHeader url='#contact' text='Contact'/>
      </div>
      <div className='container'>
        <div className='picture-container slide-right'>
          <img src={Picture} alt='feena'/>
        </div>
        <div className='content slide-left'>
          <h1>Hello, I’m <span className='name'>{headerInfo.name}</span></h1>
          <p>{headerInfo.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
