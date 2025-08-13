import { mdiAngularjs, mdiEmail, mdiFile, mdiGithub, mdiLanguagePython, mdiLinkedin, mdiNodejs, mdiOpenInNew, mdiPencilRulerOutline, mdiReact } from '@mdi/js';

const iconMap = {
    'github': mdiGithub,
    'linkedin': mdiLinkedin,
    'email': mdiEmail,
    'file': mdiFile,
    'angular': mdiAngularjs,
    'pencil-ruler': mdiPencilRulerOutline,
    'react': mdiReact,
    'nodejs': mdiNodejs,
    'python': mdiLanguagePython,
    'open-in-new': mdiOpenInNew,
}

export const mapIconCode = (iconCode) => {
    return iconMap[iconCode] || null;
}