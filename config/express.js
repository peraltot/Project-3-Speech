

// Module dependencies
const express = require('express');
const expressBrowserify = require('express-browserify');
const path = require('path');


module.exports = (app) => {
  app.enable('trust proxy');
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());


  // Only loaded when running in Bluemix
  if (process.env.VCAP_APPLICATION) {
    require('./security')(app);
  }

  // automatically bundle the front-end js on the fly
  // note: this should come before the express.static since bundle.js is in the public folder
  const isDev = (app.get('env') === 'development');
  const browserifyier = expressBrowserify('./public/scripts/bundle.jsx', {
    watch: isDev,
    debug: isDev,
    extension: ['jsx'],
    transform: ['babelify'],
  });
  if (!isDev) {
    browserifyier.browserify.transform('uglifyify', { global: true });
  }
  app.get('/scripts/bundle.js', browserifyier);

  // Configure Express
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(express.static(path.join(__dirname, '..', 'node_modules/watson-react-components/dist/')));
};
