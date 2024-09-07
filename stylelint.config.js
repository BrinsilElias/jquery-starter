export default {
  extends: 'stylelint-config-standard',
  rules: {
    'property-no-vendor-prefix': [
      true,
      { ignoreProperties: ['appearance', 'text-size-adjust'] }
    ],
    'custom-property-pattern': '^(_[a-z0-9-]+$)|(^[a-z0-9-]+$)',
    'custom-property-empty-line-before': [
      'never',
      { ignore: ['after-comment', 'first-nested'] }
    ]
  }
};
