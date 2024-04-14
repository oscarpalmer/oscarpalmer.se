import {getMarkdown} from '../../11ty/index.js';

export default {
	description: {
		en: 'This is the home page.',
		sv: 'Detta är startsidan.',
	},
	intro: {
		banner: {
			en: `Hallå, I'm Oscar, a design engineer from southern Sweden`,
			sv: 'Hallå, jag heter Oscar och är en designingenjör från södra Sverige',
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
