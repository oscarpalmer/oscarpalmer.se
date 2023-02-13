const path = require('path');

const environment = {
	production: (process.env.ELEVENTY_MODE || 'development') === 'production',
	timestamp: Date.now(),
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
		translations: require('./source/data/i18n'),
		fallbackLocales: {
			'*': 'sv',
		},
	},
	
	sass: {
		domainName: 'https://oscarpalmer.se',
		outDir: path.normalize(path.join(__dirname, './build')),
		outFileName: environment.production ? `styles.${environment.timestamp}`: 'styles',
		outPath: '/assets/stylesheets/',
		outputStyle: environment.production ? 'compressed' : 'expanded',
		sassIndexFile: 'styles.scss',
		sassLocation: path.normalize(path.join(__dirname, './source/assets/stylesheets/')),
	},
};

module.exports = (config) => {
	config.addGlobalData('production', environment.production);

	if (environment.production) {
		const html = require('html-minifier');

		config.addTransform('html', (content, path) => {
			return path.endsWith('.html')
				? html.minify(content.replace('styles.css', `styles.${environment.timestamp}.css`), options.html)
				: content;
		});
	}

	config.addPassthroughCopy({
		'source/.htaccess': '.htaccess',
	});

	config.addPlugin(require('eleventy-plugin-i18n'), options.i18n);
	config.addPlugin(require('eleventy-plugin-dart-sass'), options.sass);

	config.setServerOptions(options.browser);

	return {
		dir: {
			data: '../data',
			input: 'source/pages',
			layouts: '../layouts',
			output: 'build'
		},
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		passthroughFileCopy: true,
	};
};
