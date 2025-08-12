const headerInfo = {
    name: "Feena Fung",
    summary: 'and I’m a Software Engineer',
} 

const aboutMeInfo = {
    lifeDesc: "A morning coffee is my energy for the day! I am a cheerful but calm individual. I love solving puzzles, watching movies and travelling. Never get tired about exploring different places in the world! Also, I enjoy chatting and creating memory with my friends and family.",
    aspirationDesc: "It is fulfilling to develop software solutions that bring values to others with my expertise. I believe dedication is the key attribute of a person when pursuing great achievements. I like to study IT knowledge and new technologies continually, so as to enhance my technical abilities and make great contributions in my career."
}

const skillsInfo = [
	{
		id: 1, 
		category: 'Frontend Development',
		skills: [
			'React', 
			'Redux',
			'Next.js', 
			'TypeScript',
			'JavaScript',
			'HTML', 
			'CSS/LESS/SCSS',
			'Jest',
			'Selenium',
			'Figma',
		]
	}, {
		id: 2, 
		category: 'Cloud & DevOps',
		skills: [
			'AWS', 
			'Docker', 
			'Kubernetes',
			'Git',
			'Jenkins',
			'CI/CD',
			'Prometheus',
			'Grafana',
		]
	}, {
		id: 3, 
		category: 'APIs & Integration',
		skills: [
			'RESTful APIs',
			'Swagger',
			'Postman', 
			'Kafka', 
			'JMeter'
		]
	}, { 
		id: 4, 
		category: 'Backend & Data Engineering',
		skills: [
			'Java', 
			'Spring Boot', 
			'Node.js', 
			'Express', 
			'Python', 
			'FastAPI', 
			'MySQL', 
			'MongoDB',
			'Apache Solr',
			'AWS S3',
			'AWS RedShift',
			'Apache Airflow',
			'Extract, Transform, Load (ETL)',
			'Informatica',
			'Tableau',
			'Microservices',
		]
	},
]

const projectInfo = [
	
      {
		id: 2,
		status: 'Active',
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
				type: 'demo',
				text: 'Live Demo',
				link: 'https://recipen-angular.vercel.app/',
				icon: 'open-in-new',
			},
			{
				type: 'frontend',
				text: 'Repo',
				link: 'https://github.com/devfeefung79/recipen-angular',
				icon: 'angular',
			},
			{
				type: 'design',
				text: 'Design',
				link: 'https://www.figma.com/design/R6oiXN7KnbPDtJ34eoqBaw/Recipen?node-id=0-1&t=2QHEZaBbLv5Ore4R-1',
				icon: 'pencil-ruler',
			}
		],
      },
	{
		id: 1,
		status: 'Under Revamp',
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
				link: 'https://bonufo-react.vercel.app/',
				icon: 'open-in-new',
			},
			{
				type: 'frontend',
				text: 'Repo',
				link: 'https://github.com/devfeefung79/bonufo-react',
				icon: 'react',
			},
			{
				type: 'backend',
				text: 'Repo',
				link: 'https://github.com/devfeefung79/bonufo-express',
				icon: 'nodejs',
			}
		]
      },
]

const contactInfo = {
	resume: "resume_feena_fung.pdf",
    email: "feenafungftl@gmail.com",
    linkedin: "https://www.linkedin.com/in/feena-fung/",
    github: "https://github.com/devfeefung79/",
}

export { aboutMeInfo, contactInfo, headerInfo, projectInfo, skillsInfo }

