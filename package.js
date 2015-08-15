Package.describe({
  name: 'crazypyro:reaction-couponwallet',
  version: '0.0.1',
  summary: 'reactioncommerce plugin (Meteor.js based) for the couponwallet.com API',
  git: 'https://github.com/CrazyPyro/reaction-couponwallet.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('reaction-couponwallet.js');
  //api.use("reactioncommerce:core@x.x.x"); //current release
  api.addFiles("server/register.coffee",'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('crazypyro:reaction-couponwallet');
  api.addFiles('reaction-couponwallet-tests.js');
});
