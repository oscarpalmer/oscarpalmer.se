import {getMarkdown} from '../../11ty/index.js';

export default {
	description: {
		en: 'A collection of links and other ways to get in touch with me.',
		sv: 'En samling länkar och andra sätt att komma i kontakt med mig.',
	},
	intro: {
		content: getMarkdown('contact/intro'),
		title: {
			en: 'Introduction',
			sv: 'Introduktion',
		},
	},
	links: {
		items: [
			{
				icon: 'mailbox',
				label: {
					en: 'Email',
					sv: 'E-post',
				},
				url: '&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#111;&#112;&#97;&#108;&#109;&#101;&#114;&#64;&#109;&#101;&#46;&#99;&#111;&#109;',
				value: 'opalmer&#64;me.com',
			},
			{
				icon: 'brand-bluesky',
				label: 'Bluesky',
				url: 'https://bsky.app/profile/oscarpalmer.se',
				value: '@oscarpalmer.se',
			},
			{
				icon: 'brand-github',
				label: 'GitHub',
				url: 'https://github.com/oscarpalmer',
				value: '@oscarpalmer',
			},
			{
				icon: 'brand-instagram',
				label: 'Instagram',
				url: 'https://instagram.com/ohpalmer',
				value: '@ohpalmer',
			},
			{
				icon: 'brand-linkedin',
				label: 'LinkedIn',
				url: 'https://linkedin.com/in/oscar-palmer/',
				value: '@oscar-palmer',
			},
			{
				icon: 'brand-twitter',
				label: 'Twitter',
				url: 'https://twitter.com/ohpalmer',
				value: '@ohpalmer',
			},
			{
				icon: 'device-gamepad-2',
				label: {
					en: 'Video games',
					sv: 'TV-spel',
				},
				suffix: {
					en: '(on Exophase)',
					sv: '(på Exophase)',
				},
				url: 'https://exophase.com/user/oscar/',
				value: '@oscar',
			},
		],
		title: {
			en: 'Links',
			sv: 'Länkar',
		},
	},
	title: {
		en: 'Contact',
		sv: 'Kontakt',
	},
	url: {
		en: '/en/contact/',
		sv: '/kontakt/',
	},
};
