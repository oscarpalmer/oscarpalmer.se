import {getMarkdown} from '../../11ty/index.js';

export default {
	banner: {
		blurb: {
			en: 'I design, develop, and evalute things for cool people who use computers',
			sv: 'Jag designar, utvecklar, och utvärderar saker för coola personer som avänder datorer',
		},
		intro: {
			main: {
				en: "Howdy, I'm Oscar",
				sv: 'Hallå, jag heter Oscar',
			},
			suffix: {
				en: '&nbsp;and&hellip;',
				sv: '&nbsp;och&hellip;',
			},
		},
	},
	content: getMarkdown('home/content'),
	title: {
		en: 'Home',
		sv: 'Hem',
	},
	url: {
		en: '/en/',
		sv: '/',
	},
};
