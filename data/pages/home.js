import {getMarkdown} from '../../11ty/index.js';

export default {
	intro: {
		banner: {
			en: 'I design, develop, and evalute things for cool people who use computers',
			sv: 'Jag designar, utvecklar, och utvärderar saker för coola personer som avänder datorer',
		},
		content: getMarkdown('home/content'),
	},
	title: {
		en: 'Home',
		sv: 'Hem',
	},
	url: {
		en: '/en/',
		sv: '/',
	},
};
