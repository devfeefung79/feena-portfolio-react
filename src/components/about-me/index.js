import './index.css';

import CoffeeImage from '../../assets/coffee.jpg';
import WorkImage from '../../assets/work.jpeg';

function AboutMe() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <div className='container'>
        <div className='card'>
          <img src={CoffeeImage} alt="coffee.jpg"/>
          <h2>My Life</h2>
          <p>A morning coffee is my energy for the day! I am a cheerful but calm individual (probably a bit shy as well). I love solving puzzles, watching movies and travelling. Never get tired about exploring different places in the world! Also, I enjoy chatting and creating memory with my friends and family.</p>
        </div>
        <div className='card'>
          <img src={WorkImage} alt="work.jpg"/>
          <h2>My Aspiration</h2>
          <p>It is fulfilling to develop software solutions that bring values to others with my expertise. I believe dedication is the key attribute of a person when pursuing great achievements. I like to study IT knowledge and new technologies continually, so as to enhance my technical abilities and make great contributions in my career.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;