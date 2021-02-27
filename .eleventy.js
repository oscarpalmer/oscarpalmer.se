module.exports = function (config) {
  config.setBrowserSyncConfig({
    files: 'build/**/*',
    port: 4567,
    ui: false
  });

  return {
    dir: {
      input: 'source',
      layouts: '_includes/layouts',
      output: 'build'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true
  };
};