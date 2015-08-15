Package.describe({
  name: 'crazypyro:reaction-couponwallet',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('reaction-couponwallet.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('crazypyro:reaction-couponwallet');
  api.addFiles('reaction-couponwallet-tests.js');
});
