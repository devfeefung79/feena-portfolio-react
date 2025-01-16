import CoffeeImage from '../../assets/coffee.jpg';
import WorkImage from '../../assets/work.jpeg';
import AnimationOnScroll from '../animation-on-scroll';
import CustomImageVerticalContainer from '../custom/customImageVerticalContainer';
import CustomSectionHeading from '../custom/customSectionHeading';

import { aboutMeInfo } from '../../data/data';

import './index.css';

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <CustomSectionHeading text="About Me."/>
      <div className='container'>
        <div className='picture'>
          <AnimationOnScroll animationClass="slide-top">
              <CustomImageVerticalContainer imageSrc={CoffeeImage} altText="coffee.jpg"/>
          </AnimationOnScroll>
        </div>
        <div className='picture'>
          <AnimationOnScroll animationClass="slide-top">
              <CustomImageVerticalContainer imageSrc={WorkImage} altText="work.jpg"/>
          </AnimationOnScroll>
        </div>
        <div className='content'>
          <AnimationOnScroll animationClass="slide-top">
              <div>
                <h2>My Life</h2>
                <p>{aboutMeInfo.lifeDesc}</p>
              </div>
              <div>
                <h2>My Aspiration</h2>
                <p>{aboutMeInfo.aspirationDesc}</p>
              </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;