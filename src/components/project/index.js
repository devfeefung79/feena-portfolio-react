import CustomProjectCardContainer from '../custom/customProjectCardContainer';
import CustomSectionHeading from '../custom/customSectionHeading';

import BonufoScreen1 from '../../assets/project-bonufo/screen1.jpeg';
import BonufoScreen2 from '../../assets/project-bonufo/screen2.jpeg';
import BonufoScreen3 from '../../assets/project-bonufo/screen3.jpeg';
import BonufoScreen4 from '../../assets/project-bonufo/screen4.jpeg';
import BonufoScreen5 from '../../assets/project-bonufo/screen5.jpeg';
import BonufoScreen6 from '../../assets/project-bonufo/screen6.jpeg';
import BonufoScreen7 from '../../assets/project-bonufo/screen7.jpeg';
import BonufoScreen8 from '../../assets/project-bonufo/screen8.jpeg';

import RecipenScreen1 from '../../assets/project-recipen/screen1.jpeg';
import RecipenScreen2 from '../../assets/project-recipen/screen2.jpeg';
import RecipenScreen3 from '../../assets/project-recipen/screen3.jpeg';
import RecipenScreen4 from '../../assets/project-recipen/screen4.jpeg';
import RecipenScreen5 from '../../assets/project-recipen/screen5.jpeg';
import RecipenScreen6 from '../../assets/project-recipen/screen6.jpeg';

import { projectInfo } from '../../data/data';

import './index.css';

const Project = () => {

  const projectImages = {
    1: [BonufoScreen1, BonufoScreen2, BonufoScreen3, BonufoScreen4, BonufoScreen5, BonufoScreen6, BonufoScreen7, BonufoScreen8],
    2: [RecipenScreen1, RecipenScreen2, RecipenScreen3, RecipenScreen4, RecipenScreen5, RecipenScreen6],
  };+7

  return (
    <div className="project">
      <CustomSectionHeading text="Projects."/>
      {projectInfo && projectInfo.map((info) => 
        <CustomProjectCardContainer key={info.id} projectInfo={info} projectImages={projectImages[info.id]} />
      )}
    </div>
  );
}

export default Project;