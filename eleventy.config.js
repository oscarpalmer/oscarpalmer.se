import i18nPlugin from 'eleventy-plugin-i18n';
import sassPlugin from 'eleventy-plugin-dart-sass';
import {minify as minifyHtml} from 'html-minifier';
import * as path from 'path';
import i18n from './data/i18n/index.js';

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

	i18n: {
		translations: i18n,
		fallbackLocales: {
			'*': 'sv',
		},
	},

	sass: {
		domainName: 'https://oscarpalmer.se',
		outDir: path.normalize(path.join(path.dirname('./'), './build')),
		outPath: '/assets/stylesheets/',
		outputStyle: environment.production ? 'compressed' : 'expanded',
		sassIndexFile: 'styles.scss',
		sassLocation: path.normalize(path.join(path.dirname('./'), './source/assets/stylesheets/')),
	},
};

export default (config) => {
	config.addGlobalData('production', environment.production);

	if (environment.production) {
		config.addTransform('html', (content, path) => {
			return path.endsWith('.html')
				? minifyHtml(content, options.html)
				: content;
		});
	}

	config.addPlugin(i18nPlugin, options.i18n);
	config.addPlugin(sassPlugin, options.sass);

	config.setServerOptions(options.browser);

	return {
		dir: {
			data: '../../data',
			input: 'source/pages',
			layouts: '../layouts',
			output: 'build'
		},
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		passthroughFileCopy: true,
	};
};
