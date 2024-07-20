import {minify as minifyHtml} from 'html-minifier';
import {codes, filters} from './11ty/index.js';

const environment = {
	production: (process.env.ELEVENTY_RUN_MODE || 'development') === 'build',
};

const now = new Date();

const options = {
	browser: {
		port: 4567,
	},

	html: {
		collapseWhitespace: true,
		decodeEntities: true,
		removeComments: true,
	},
};

export default (config) => {
	config.addGlobalData(
		'canonicalUrl',
		environment.production ? 'https://oscarpalmer.se' : 'http://localhost:4567',
	);

	config.addGlobalData('production', environment.production);

	config.addGlobalData('timestamp', {
		iso: now.toISOString(),
		unix: now.getTime(),
	});

	config.addGlobalData('version', process.env.ELEVENTY_VERSION || '???');

	config.addFilter('altLocale', filters.getAlternateLocale);
	config.addFilter('ariaCurrent', filters.getAriaCurrentFromUrl);
	config.addFilter('icon', filters.icon);
	config.addFilter('i18n', filters.internationalise);
	config.addFilter('locale', filters.getLocale);
	config.addFilter('markdown', filters.renderMarkdown);

	config.addShortcode('getDescription', codes.getDescription);
	config.addShortcode('getTitle', codes.getTitle);

	config.addPassthroughCopy({
		'source/assets/images': 'assets/images',
		'source/assets/javascript': 'assets/javascript',
		'source/robots.txt': 'robots.txt',
		'source/site.webmanifest': 'site.webmanifest',
	});

	config.addWatchTarget('source');

	config.setServerOptions(options.browser);

	if (environment.production) {
		config.addTransform('html', (content, path) => {
			return path.endsWith('.html')
				? minifyHtml(content, options.html)
				: content;
		});
	}

	return {
		dir: {
			data: '../../data',
			includes: '../layouts/partials',
			input: 'source/pages',
			layouts: '../layouts',
			output: 'build',
		},
		htmlTemplateEngine: 'liquid',
		markdownTemplateEngine: 'liquid',
		passthroughFileCopy: true,
	};
};
