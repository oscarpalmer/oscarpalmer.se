import {getMarkdown} from '../../../11ty/index.js';

export default {
	content: getMarkdown('about/colophon/content'),
	description: {
		en: 'A rundown of all the stuff that built and powers this little website.',
		sv: 'En översikt över allt som byggde och driver denna lilla webbplats.',
	},
	links: {
		cloudflare: {
			title: 'Cloudflare',
			url: 'https://www.cloudflare.com/',
		},
		digitalocean: {
			title: 'DigitalOcean',
			url: 'https://www.digitalocean.com/',
		},
		eleventy: {
			title: 'Eleventy',
			url: 'https://11ty.dev/',
		},
		iwantmyname: {
			title: 'iwantmyname',
			url: 'https://iwantmyname.com/',
		},
		liquid: {
			title: 'Liquid',
			url: 'https://shopify.github.io/liquid/',
		},
		markdown: {
			title: 'Markdown',
			url: 'https://daringfireball.net/projects/markdown/',
		},
		node: {
			title: 'Node',
			url: 'https://nodejs.org/',
		},
		nova: {
			title: 'Nova',
			url: 'https://nova.app/',
		},
		polypane: {
			title: 'Polypane',
			url: 'https://polypane.app/',
		},
		sass: {
			title: 'Sass',
			url: 'https://sass-lang.com/',
		},
		vscode: {
			title: 'Visual Studio Code',
			url: 'https://code.visualstudio.com/',
		},
	},
	title: {
		en: 'Colophon',
		sv: 'Kolofon',
	},
	url: {
		en: '/en/about/colophon/',
		sv: '/om/kolofon/',
	},
};
