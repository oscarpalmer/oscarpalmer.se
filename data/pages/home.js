import {getMarkdown} from '../../11ty/index.js';

export default {
	intro: {
		en: "Hiya, I'm Oscar",
		sv: 'Hallå, jag heter Oscar',
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
