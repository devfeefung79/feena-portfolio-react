import './index.css';

import Picture from '../../assets/profile-3.jpg';
import AnimationOnScroll from '../animation-on-scroll';
import CustomLink from '../custom/customLink';

import { headerInfo } from '../../data/data';

const Header = () => {
  return (
    <div id="header" className="header">
      <div className='header-links'>
        <CustomLink isOnHeader url='#about' text='About'/>
        <CustomLink isOnHeader url='#projects' text='Projects'/>
        <CustomLink isOnHeader url='#skills' text='Skills'/>
        <CustomLink isOnHeader url='#contact' text='Contact'/>
      </div>
      <div className='container'>
        <div className='picture-container'>
          <AnimationOnScroll animationClass="slide-left">
            <img src={Picture} alt='feena'/>
          </AnimationOnScroll>
        </div>
        <div className='content'>
          <AnimationOnScroll animationClass="slide-right">
            <h1>Hello, I’m <span className='name'>{headerInfo.name}</span></h1>
            <p>{headerInfo.summary}</p>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Header;
