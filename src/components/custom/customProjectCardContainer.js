import './custom.css';

import { mapIconCode } from '../../utils/iconUtil';
import AnimationOnScroll from '../animation-on-scroll';
import Slideshow from '../slideshow';
import CustomButton from './customButton';
import CustomChip from './customChip';
import CustomStatusBadge from './customStatusBadge';

const customProjectCardContainer = ({ projectInfo, projectImages }) => {
    return (
        <AnimationOnScroll animationClass="slide-right">
            <div className="customProjectCardContainer">
                    <div className='project-header'>
                        <div className='link'>
                            {projectInfo && projectInfo.links.map((item, index) =>
                                <a href={item.link} target="_blank" key={`${projectInfo.id}-links-${index}`}>
                                    <CustomButton text={item.text} icon={mapIconCode(item.icon)} />
                                </a>)}
                        </div>
                        <div className='badge'>
                            <CustomStatusBadge status={projectInfo.status}/>
                        </div>
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
                                <p>Technologies/Tools:</p>
                                {projectInfo.technologies.map((tech) => <CustomChip key={`${projectInfo.id}-technologies-${tech}`} text={tech}/>)}
                            </div>
                        </div>
                    </div>
            </div>
        </AnimationOnScroll>
    );
}   

export default customProjectCardContainer;