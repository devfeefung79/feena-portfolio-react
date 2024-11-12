const headerInfo = {
    name: "Feena Fung",
    title: "Full-stack developer",
    summary: 'and I’m a Software Developer',
} 

const aboutMeInfo = {
    lifeDesc: "A morning coffee is my energy for the day! I am a cheerful but calm individual. I love solving puzzles, watching movies and travelling. Never get tired about exploring different places in the world! Also, I enjoy chatting and creating memory with my friends and family.",
    aspirationDesc: "It is fulfilling to develop software solutions that bring values to others with my expertise. I believe dedication is the key attribute of a person when pursuing great achievements. I like to study IT knowledge and new technologies continually, so as to enhance my technical abilities and make great contributions in my career."
}

const projectInfo = [
	{
		id: 1,
		title: 'English Writing Response Platform',
		summary: 'A platform to enhance English writing skill as a learner or give feedback to others\' essay as a tutor',
		functions: [
			'Register for an account as a learner or a tutor',
			'Search questions with criteria (keyword, topic, question type, related exam)',
			'Write an essay responded to a question (Learner)',
			'Choose a marking scheme for an essay for particular exam preparation, e.g. IELTS, CELPIP (Learner)',
			'Give score and comment to an essay (Tutor)',
			'View saved questions in profile page',
			'View previous submission and the corresponding average score calculated (Learner)',
		],
		technologies: [
			'React','TypeScript','HTML','CSS','Semantic UI','NodeJS','ExpressJS','JWT','MongoDB'
		],
		links: [
			{
				type: 'demo',
				text: 'Live Demo',
				link: 'https://bonufo-react.vercel.app/'
			},
			{
				type: 'frontend',
				text: 'Frontend Project',
				link: 'https://github.com/devfeefung79/bonufo-react'
			},
			{
				type: 'backend',
				text: 'Backend Project',
				link: 'https://github.com/devfeefung79/bonufo-express'
			}
		]
      },
      {
		id: 2,
		title: 'Recipe Platform',
		summary: 'A website designed for food enthusiasts of all skill levels, offering a user-friendly interface to explore a diverse range of recipes',
		functions: [
			'Browse recipes by category or cusisine',
			'Search recipes by keyword',
			'View recipe details'
		],
		technologies: [
			'Angular',
			'TypeScript',
			'HTML',
			'SCSS',
			'Material UI',
			'RxJS',
			'Jasmine'
		],
		links: [
			{
				type: 'frontend',
				text: 'Frontend Project',
				link: 'https://github.com/devfeefung79/recipen-angular'
			},
			{
				type: 'design',
				text: 'Design',
				link: 'https://www.figma.com/design/R6oiXN7KnbPDtJ34eoqBaw/Recipen?node-id=0-1&t=2QHEZaBbLv5Ore4R-1'
			}
		],
      }
]

const contactInfo = {
	resume: "https://drive.google.com/file/d/18ulha-L8nHwI0LHfysLskoL0q6IQQu2t/view?usp=sharing",
    email: "feenafungftl@gmail.com",
    linkedin: "https://www.linkedin.com/in/feena-fung/",
    github: "https://github.com/devfeefung79/",
}

export { aboutMeInfo, contactInfo, headerInfo, projectInfo };

