const secure = require('express-secure-only');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

module.exports = (app) => {
  app.enable('trust proxy');

  // 1. redirects http to https
  app.use(secure());

  // 2. helmet with defaults
  app.use(helmet());

  // 5. rate limiting.
  app.use('/api/', rateLimit({
    windowMs: 30 * 1000, // 30 seconds
    delayMs: 0,
    max: 3,
    message: JSON.stringify({
      error: 'Too many requests, please try again in 30 seconds.',
      code: 429,
    }),
  }));
};
