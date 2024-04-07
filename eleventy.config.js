import sassPlugin from 'eleventy-plugin-dart-sass';
import {minify as minifyHtml} from 'html-minifier';
import * as path from 'node:path';
import {filters} from './11ty/index.js';

const environment = {
	production: (process.env.ELEVENTY_MODE || 'development') === 'production',
};

const options = {
	browser: {
		port: 4567,
	},

	html: {
		collapseWhitespace: true,
		decodeEntities: true,
		removeComments: true,
	},

	sass: {
		domainName: 'https://oscarpalmer.se',
		outDir: path.normalize(path.join(path.dirname('./'), './build')),
		outPath: '/assets/stylesheets/',
		outputStyle: environment.production ? 'compressed' : 'expanded',
		sassIndexFile: 'styles.scss',
		sassLocation: path.normalize(
			path.join(path.dirname('./'), './source/assets/stylesheets/'),
		),
	},
};

export default (config) => {
	config.addGlobalData('production', environment.production);

	config.addFilter('ariaCurrent', filters.getAriaCurrentFromUrl);
	config.addFilter('i18n', filters.internationalise);
	config.addFilter('locale', filters.getLocale);
	config.addFilter('markdown', filters.renderMarkdown);

	config.addPlugin(sassPlugin, options.sass);

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
