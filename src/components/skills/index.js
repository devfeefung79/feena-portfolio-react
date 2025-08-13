import AnimationOnScroll from '../animation-on-scroll';
import CustomChip from '../custom/customChip';
import CustomSectionHeading from '../custom/customSectionHeading';

import { skillsInfo } from '../../data/data';

import './index.css';

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <CustomSectionHeading text="Skills." />
            <div className="container">
                {skillsInfo.map((cat, index) => (
                    <AnimationOnScroll animationClass="slide-top">
                        <div key={index} className="content">
                            <h2>{cat.category}</h2>
                            {cat.skills.map((skill, skillIndex) => (
                                <CustomChip key={skillIndex} text={skill} />
                            ))}
                        </div>
                    </AnimationOnScroll>
                ))}
            </div>
        </div>
    );
}

export default Skills;