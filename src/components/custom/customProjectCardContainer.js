import './custom.css';

import AnimationOnScroll from '../animation-on-scroll';
import Slideshow from '../slideshow';
import CustomButton from './customButton';
import CustomChip from './customChip';

const customProjectCardContainer = ({ projectInfo, projectImages }) => {
    return (
        <AnimationOnScroll animationClass="slide-right">
            <div className="customProjectCardContainer">
                    <div className='link'>
                        {projectInfo && projectInfo.links.map((item, index) =>
                            <a href={item.link} target="_blank" key={`${projectInfo.id}-links-${index}`}>
                                <CustomButton text={item.text} />
                            </a>)}
                    </div>
                    <div className='content'>
                        <div className='slideshow'>
                            <Slideshow images={projectImages} />
                        </div>
                        <div className='description'>
                            <h2>{projectInfo.title}</h2>
                            <p>{projectInfo.summary}</p>
                            <div className='functions'>
                                <p>Functions:</p>
                                <ul>{projectInfo.functions.map((fn, index) => 
                                    <li key={`${projectInfo.id}-functions-${index}`}>
                                        {fn}
                                    </li>
                                    )}
                                </ul>
                            </div>
                            <div className='technologies'>
                                <p>Technologies:</p>
                                {projectInfo.technologies.map((tech) => <CustomChip key={`${projectInfo.id}-technologies-${tech}`} text={tech}/>)}
                            </div>
                        </div>
                    </div>
            </div>
        </AnimationOnScroll>
    );
}   

export default customProjectCardContainer;