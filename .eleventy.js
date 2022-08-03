const path = require('path');

const production = (process.env.ELEVENTY_MODE || 'development') === 'production';
const timestamp = Date.now();

const browserOptions = {
	files: 'build/**/*',
	port: 4567,
	ui: false
};

const htmlOptions = {
	collapseWhitespace: true,
	decodeEntities: true,
	removeComments: true,
};

const i18nOptions = {
	translations: require('./source/data/i18n'),
	fallbackLocales: {
		'*': 'sv',
	},
};

const sassOptions = {
	domainName: 'https://oscarpalmer.se',
	outDir: path.normalize(path.join(__dirname, './build')),
	outFileName: production ? `styles.${timestamp}`: 'styles',
	outPath: '/assets/stylesheets/',
	outputStyle: production ? 'compressed' : 'expanded',
	sassIndexFile: 'styles.scss',
	sassLocation: path.normalize(path.join(__dirname, './source/assets/stylesheets/')),
};

module.exports = (config) => {
	config.addGlobalData('production', production);

	if (production) {
		const html = require('html-minifier');

		config.addTransform('html', (content, path) => {
			return path.endsWith('.html')
				? html.minify(content.replace('styles.css', `styles.${timestamp}.css`), htmlOptions)
				: content;
		});
	}

	config.addPassthroughCopy({
		'source/.htaccess': '.htaccess',
	});

	config.addPlugin(require('eleventy-plugin-i18n'), i18nOptions);
	config.addPlugin(require('eleventy-plugin-dart-sass'), sassOptions);

	config.setBrowserSyncConfig(browserOptions);

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