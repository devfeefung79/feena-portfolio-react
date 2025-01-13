import CoffeeImage from '../../assets/coffee.jpg';
import WorkImage from '../../assets/work.jpeg';
import CustomImageVerticalContainer from '../custom/customImageVerticalContainer';
import CustomSectionHeading from '../custom/customSectionHeading';

import { aboutMeInfo } from '../../data/data';

import './index.css';

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <CustomSectionHeading text="About Me."/>
      <div className='container'>
        <div className='picture slide-top'>
          <CustomImageVerticalContainer imageSrc={CoffeeImage} altText="coffee.jpg"/>
        </div>
        <div className='picture slide-top'>
          <CustomImageVerticalContainer imageSrc={WorkImage} altText="work.jpg"/>
        </div>
        <div className='content slide-top'>
          <div>
            <h2>My Life</h2>
            <p>{aboutMeInfo.lifeDesc}</p>
          </div>
          <div>
            <h2>My Aspiration</h2>
            <p>{aboutMeInfo.aspirationDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;