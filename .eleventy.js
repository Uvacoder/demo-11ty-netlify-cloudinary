module.exports = function (eleventyConfig) {
  return {
    templateFormats: ['md', 'njk'],

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      output: 'dist',
      input: 'src'
    },
  };
};
