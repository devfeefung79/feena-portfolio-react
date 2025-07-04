import AnimationOnScroll from '../animation-on-scroll';
import CustomChip from '../custom/customChip';
import CustomSectionHeading from '../custom/customSectionHeading';

import { skillsInfo } from '../../data/data';

import './index.css';

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <CustomSectionHeading text="Skills." />
            <AnimationOnScroll animationClass="slide-top">
                <div className="container">
                    {skillsInfo.map((cat, index) => (
                        <div key={index} className="content">
                            <h2>{cat.category}</h2>
                            {cat.skills.map((skill, skillIndex) => (
                                <CustomChip key={skillIndex} text={skill} />
                            ))}
                        </div>
                    ))}
                </div>
            </AnimationOnScroll>
        </div>
    );
}

export default Skills;