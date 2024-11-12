import './custom.css';

import Slideshow from '../slideshow';
import CustomButton from './customButton';
import CustomChip from './customChip';

const customProjectCardContainer = ({ projectInfo, projectImages }) => {
    return (
        <div className="customProjectCardContainer slide-right">
            <div className='link'>
                {projectInfo && projectInfo.links.map((item, index) =>
                    <a href={item.link} target="_blank" key={`${projectInfo.id}-links-${index}`}>
                        <CustomButton type={item.type === 'demo' ? 'primary' : null} text={item.text} />
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
                        {projectInfo.technologies.map((tech) => <CustomChip text={tech}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default customProjectCardContainer;