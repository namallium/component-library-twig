module.exports = {
  extends: [
    '@namallium/eslint-config-and-other-formatting/stylelint.config',
  ],
  rules: {
    // Need to figure out a regex for kebab-case that allows `#`, `{`, and `}`
    'custom-property-pattern': null,
  },
};
