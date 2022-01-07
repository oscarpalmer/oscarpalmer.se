const path = require('path');

const sass = require('eleventy-plugin-dart-sass');

const mode = process.env.ELEVENTY_MODE || 'development';
const production = mode === 'production';

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

const sassOptions = {
  domainName: 'https://oscarpalmer.se',
  outDir: path.normalize(path.join(__dirname, './build')),
  outFileName: 'styles',
  outputStyle: production ? 'compressed' : 'expanded',
  sassIndexFile: 'styles.scss',
  sassLocation: path.normalize(path.join(__dirname, './source/assets/css/')),
};

module.exports = (config) => {
  config.addGlobalData('production', production);
  config.addGlobalData('timestamp', Date.now());

  if (production) {
    const html = require('html-minifier');

    config.addTransform('html', (content, path) => {
      return path.endsWith('.html')
        ? html.minify(content, htmlOptions)
        : content;
    });
  }

  config.addPlugin(sass, sassOptions);

  config.setBrowserSyncConfig(browserOptions);

  return {
    dir: {
      input: 'source',
      layouts: '_includes/layouts',
      output: 'build'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};