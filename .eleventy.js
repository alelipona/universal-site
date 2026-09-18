module.exports = function(eleventyConfig) {
  // Copy public/ to _site/
  eleventyConfig.addPassthroughCopy("public");

  // Date formatting filter
  eleventyConfig.addFilter("formatDate", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // Current year shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
